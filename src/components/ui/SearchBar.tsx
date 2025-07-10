import { useEffect, useState } from 'react';

type SearchBarProps<T> = {
  placeholder?: string;
  searchFn: (query: string) => Promise<T[]>;
  renderResult: (item: T) => React.ReactNode;
  debounceDelay?: number;
  minQueryLength?: number;
};

export function SearchBar<T>({
  placeholder = 'Buscar...',
  searchFn,
  renderResult,
  debounceDelay = 400,
  minQueryLength = 2,
}: SearchBarProps<T>) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length >= minQueryLength) {
        setLoading(true);
        searchFn(query)
          .then((res) => {
            setResults(res);
            setNoResults(res.length === 0);
          })
          .finally(() => setLoading(false));
      } else {
        setResults([]);
        setNoResults(false);
      }
    }, debounceDelay);

    return () => clearTimeout(delayDebounce);
  }, [query]);

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
