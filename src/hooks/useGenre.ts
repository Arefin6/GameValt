import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import apiClient from "@/services/apiClient";
import { fetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<fetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default UseGenre;
