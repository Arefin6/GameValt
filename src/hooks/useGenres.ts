import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import ApiClient from "@/services/apiClient";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const UseGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // 24 hours
    initialData: { count: genres.length, next: null, results: genres },
  });

export default UseGenres;
