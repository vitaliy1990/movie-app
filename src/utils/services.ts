import type { ResponseError } from '../types';

export const handleResponse = async <T>(
  response: Response
): Promise<T | null> => {
  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const errorData = (await response.json()) as ResponseError;
    const error = new Error(errorData.status_message) as Error & {
      status_code?: number;
    };

    error.status_code = errorData.status_code;
    throw error;
  }

  return response.json();
};
