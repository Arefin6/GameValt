import { GameQuery } from "@/App";
import UseGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = UseGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" paddingY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
