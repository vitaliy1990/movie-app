export const encodeParam = (value: unknown) =>
  encodeURIComponent(String(value));

export const decodeParam = (value: string | null | undefined) => {
  if (!value) {
    return '';
  }

  const decoded = decodeURIComponent(value);

  switch (decoded) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return decoded;
  }
};
