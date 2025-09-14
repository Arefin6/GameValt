import UseGenres from "./useGenres";

const UseGenre = (id?: number) => {
  const { data: genres } = UseGenres();
  return genres?.results.find((g) => g.id === id);
};

export default UseGenre;
