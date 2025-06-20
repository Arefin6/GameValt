import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

interface fetchResponse<T> {
  count: number;
  results: T[];
}
const UseData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<fetchResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
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

  return { data, error, isLoading };
};

export default UseData;
