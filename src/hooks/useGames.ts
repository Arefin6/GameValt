import ApiClient from "@/services/apiClient";
import useGameQueryStore from "@/store";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchResponse } from "../services/apiClient";
import { Game } from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const UseGame = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, pages) => {
      try {
        return lastPage.next ? pages.length + 1 : undefined; // No more pages
      } catch (error) {
        console.log("Error in getNextPageParam:", error);
      }
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default UseGame;
