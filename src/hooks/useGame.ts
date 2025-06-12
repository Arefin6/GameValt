import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}
const UseGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof Error) return; // Check if err is an instance of Error
        setError(err.message);
      });
    return () => {
      controller.abort();
    }; // Cleanup function to abort the request if the component unmounts}
  }, []);

  return { games, error };
};

export default UseGame;
