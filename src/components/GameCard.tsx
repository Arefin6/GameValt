import { Game } from "@/hooks/useGame";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
