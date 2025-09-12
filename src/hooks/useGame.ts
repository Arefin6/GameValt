import { GameQuery } from "@/App";
import ApiClient from "@/services/apiClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchResponse } from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const UseGame = (gameQuery: GameQuery) =>
  useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
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

export default UseGame;
