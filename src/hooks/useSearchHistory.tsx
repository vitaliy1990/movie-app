import { useCallback, useEffect, useState } from "react";
import { MAX_HISTORY_COUNT } from "../const";

const STORAGE_KEY = import.meta.env.VITE_STORAGE_HISTORY_KEY;

export const useSearchHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const addQuery = useCallback((query: string) => {
    setHistory((prev) => {
      const newHistory = [query, ...prev.filter((q) => q !== query)].slice(
        0,
        MAX_HISTORY_COUNT
      );
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
