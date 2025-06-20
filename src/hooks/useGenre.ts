import UseData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const UseGenre = () => UseData<Genre>("/genres");

export default UseGenre;
