import useScreenShots from "@/hooks/useScreenShots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId);

  if (isLoading || !data) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {data.results.map((screenShot) => (
        <Image
          key={screenShot.id}
          src={screenShot.image}
          alt="game screenshot"
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
