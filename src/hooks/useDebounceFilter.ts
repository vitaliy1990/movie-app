import { useState, useEffect, useRef } from 'react';

export const useDebounceFilter = <T>(value: T, delay = 400): T | null => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);
  const lastValue = useRef<T | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (JSON.stringify(value) !== JSON.stringify(lastValue.current)) {
        setDebouncedValue(value);
        lastValue.current = value;
      }
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
