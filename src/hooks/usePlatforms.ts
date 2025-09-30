import platform from "@/data/platform";
import ApiClient, { fetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGames";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const UsePlatforms = () =>
  useQuery<fetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // 24 hours
    initialData: { count: platform.length, next: null, results: platform },
  });

export default UsePlatforms;
