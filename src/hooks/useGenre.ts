import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenre = () => ({ isLoading: false, data: genres, error: null });

export default UseGenre;
