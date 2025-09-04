import platform from "@/data/platform";
import ApiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGame";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const UsePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    // 24 hours
    initialData: { count: platform.length, results: platform },
  });

export default UsePlatforms;
