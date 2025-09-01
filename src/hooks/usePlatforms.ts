import platform from "@/data/platform";
import apiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { fetchResponse } from "./useData";
import { Platform } from "./useGame";
const UsePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    // 24 hours
    initialData: { count: platform.length, results: platform },
  });

export default UsePlatforms;
