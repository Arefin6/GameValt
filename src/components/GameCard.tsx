import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <HStack justifyContent="space-between" mb={2}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title>
          <Link to={`/games/${game.slug}`}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Link>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
