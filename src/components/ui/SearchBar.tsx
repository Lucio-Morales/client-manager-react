import { useEffect, useRef, useState } from 'react';

type SearchBarProps<T> = {
  placeholder?: string;
  searchFn: (query: string) => Promise<T[]>;
  renderResult: (item: T) => React.ReactNode;
  debounceDelay?: number;
  minQueryLength?: number;
  isOpen?: boolean;
};

export function SearchBar<T>({
  placeholder = 'Buscar...',
  searchFn,
  renderResult,
  debounceDelay = 500,
  minQueryLength = 2,
  isOpen,
}: SearchBarProps<T>) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const cache = useRef<Map<string, T[]>>(new Map());

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length >= minQueryLength) {
        // ✅ Si ya está cacheado, usarlo
        if (cache.current.has(query)) {
          console.log(`✅ Caché HIT para: "${query}"`, cache.current.get(query));
          const cachedResults = cache.current.get(query)!;
          setResults(cachedResults);
          setNoResults(cachedResults.length === 0);
          return;
        }
        // 🛰 Si no está cacheado, buscar

        console.log(`🛰 Caché MISS para: "${query}". Buscando en backend...`);
        setLoading(true);
        searchFn(query)
          .then((res) => {
            cache.current.set(query, res); // siempre cacheamos la respuesta, aunque esté vacía
            console.log(`📦 Guardando en caché: "${query}"`, res);

            setResults(res);
            setNoResults(res.length === 0);
          })
          .catch((err) => {
            console.error('Error en searchFn:', err);
            setResults([]);
            setNoResults(true);
          })
          .finally(() => setLoading(false));
      } else {
        setResults([]);
        setNoResults(false);
      }
    }, debounceDelay);

    return () => clearTimeout(delayDebounce);
  }, [query]);
  const prevIsOpen = useRef<boolean>(isOpen);

  useEffect(() => {
    if (prevIsOpen.current && !isOpen) {
      cache.current.clear();
      console.log('🧹 Caché limpiado (isOpen cambió de true a false)');
    }
    prevIsOpen.current = isOpen;
  }, [isOpen]);
  return (
    <div className="space-y-4">
      <input
        type="text"
        className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p className="text-gray-500 text-sm">Buscando...</p>}

      {!loading && noResults && <p className="text-gray-500 text-sm">No se encontraron resultados.</p>}

      <ul className="space-y-2">
        {results.map((item, i) => (
          <li key={i}>{renderResult(item)}</li>
        ))}
      </ul>
    </div>
  );
}
