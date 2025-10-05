import { useQuery } from "@tanstack/react-query";
import genres from "../data/genre";
import ApiClient from "@/services/apiClient";
import { Genre } from "../entities/Genre";
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
