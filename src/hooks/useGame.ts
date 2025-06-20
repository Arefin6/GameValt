import apiClient from "@/services/apiClient";
import { useEffect, useState } from "react";
import UseData from "./useData";

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

const UseGame = () => UseData<Game>("/games");

export default UseGame;
