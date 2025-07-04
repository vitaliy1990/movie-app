import { useEffect, useState } from "react";
import type { ResponseMovies } from "../types";
import { useSearchParams } from "react-router-dom";
import { fetchMovies } from "../services/movies";
import toast from "react-hot-toast";

export const useFetchMoviesSearch = () => {
  const [searchParams] = useSearchParams();

  const [data, setData] = useState<ResponseMovies | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchMovies(searchParams.toString(), signal);
        setData(response || null);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Failed to fetch suggestions");
          toast.error("Error fetching movies");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [searchParams]);

  return { data, isLoading, error };
};
