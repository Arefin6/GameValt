import CriticScore from "@/components/CriticScore";
import DefinitionItem from "@/components/DefinitionItem";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttribute";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGame from "@/hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
