import { useEffect } from 'react';
import { useCurrentStatusAppStore } from '../store';
import type { LastActivityProps } from '../../types';

export const useLastActivity = (
  callback: () => LastActivityProps | Promise<LastActivityProps>,
  dependencies: any[] = []
) => {
  const { setLastActivity, lastActivity, isLoadingLastActivity } = useCurrentStatusAppStore();

  useEffect(() => {
    let isMounted = true;

    const executeCallback = async () => {
      try {
        const result = await Promise.resolve(callback());
        if (isMounted) {
          await setLastActivity({ ...result, timestamp: Math.floor(Date.now() / 1000) });
        }
      } catch (error) { }
    };

    executeCallback();
    return () => { isMounted = false; };
  }, dependencies);

  return { lastActivity, isLoadingLastActivity };
};
