import type { createRangeType } from '../types';

export const createRange: createRangeType = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => i + start);
};
