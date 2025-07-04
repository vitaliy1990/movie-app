export const encodeParam = (value: unknown) =>
  encodeURIComponent(String(value));

export const decodeParam = (value: string | null | undefined) => {
  if (value) {
    return decodeURIComponent(value);
  }

  return "";
};
