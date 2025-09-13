import { GameQuery } from "@/App";
import UseGenre from "@/hooks/useGenre";
import UsePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = UseGenre();
  const { data: platforms } = UsePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (g) => g.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" paddingY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
