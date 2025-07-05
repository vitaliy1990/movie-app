import { useCallback, useEffect, useState } from 'react';

import { MAX_HISTORY_COUNT } from '../const';
import type { HistoryItem } from '../types';

const STORAGE_KEY = import.meta.env.VITE_STORAGE_HISTORY_KEY;

export const useSearchHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const addQuery = useCallback((query: HistoryItem) => {
    setHistory((prev) => {
      const filtered = prev.filter((q) => q.id !== query.id);
      const newHistory = [query, ...filtered].slice(0, MAX_HISTORY_COUNT);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }, []);

  return { history, addQuery, clearHistory };
};
