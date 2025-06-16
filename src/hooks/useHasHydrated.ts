// hooks/useHasHydrated.ts
import { useEffect, useState } from 'react';
import { useUserStore } from '../store/userStore';

export function useHasHydrated() {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const unsub = useUserStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });

    // Por si Zustand ya estaba hidratado antes
    if (useUserStore.persist.hasHydrated()) {
      setHasHydrated(true);
    }

    return unsub;
  }, []);

  return hasHydrated;
}
