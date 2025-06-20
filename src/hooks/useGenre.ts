import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

export interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  count: number;
  results: Genre[];
}
const UseGenre = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenre(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof Error) return; // Check if err is an instance of Error
        setError(err.message);
        setIsLoading(false);
      });
    return () => {
      controller.abort();
    }; // Cleanup function to abort the request if the component unmounts}
  }, []);

  return { genres, error, isLoading };
};

export default UseGenre;
