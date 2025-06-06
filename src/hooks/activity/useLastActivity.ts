import { type DependencyList, useEffect } from 'react';
import { useCurrentStatusAppStore } from '@hooks/store';
import type { LastActivityProps } from '@types';

export const useLastActivity = (
  callback: () => LastActivityProps,
  deps: DependencyList
) => {
  const { setLastActivity, lastActivity, isLoadingLastActivity } = useCurrentStatusAppStore();

  useEffect(() => {
    const executeCallback = async () => {
        const result = callback();
        await setLastActivity({ ...result, timestamp: Math.floor(Date.now() / 1000) });
    };

    executeCallback();

  }, deps);

  return { lastActivity, isLoadingLastActivity };
};
