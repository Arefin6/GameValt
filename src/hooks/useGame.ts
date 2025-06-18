import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

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
}

interface GameResponse {
  count: number;
  results: Game[];
}
const UseGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
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

  return { games, error, isLoading };
};

export default UseGame;
