export const isBoolean = (value: unknown) => typeof value === 'boolean';

export const isNumber = (value: unknown): value is number =>
  typeof value === 'number' && !isNaN(value);
