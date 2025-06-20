import UseGenre from "@/hooks/useGenre";

const GenreList = () => {
  const { data } = UseGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
