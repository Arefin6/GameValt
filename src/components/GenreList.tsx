import UseGenre from "@/hooks/useGenre";

const GenreList = () => {
  const { genres } = UseGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
