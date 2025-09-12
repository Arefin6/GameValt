import UseGame from "@/hooks/useGame";
import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = UseGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  // Flatten all games from all pages
  const allGames = data?.pages.flatMap((page) => page.results ?? []) ?? [];

  if (status === "error") return <Text>Error: {error.message}</Text>;

  if (status === "loading") {
    return (
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
      >
        {skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    );
  }
  return (
    <SimpleGrid padding="10px" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
      {allGames.length > 0 &&
        allGames.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        loadingText="Loading more..."
        size="lg"
        colorScheme="dark"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More Games"
          : "Nothing more to load"}
      </Button>
    </SimpleGrid>
  );
};
export default GameGrid;
