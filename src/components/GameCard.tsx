import { Game } from "@/hooks/useGame";
import { Card, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
