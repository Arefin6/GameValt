import UseGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Spinner, Button } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = UseGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              asChild
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
              variant={"plain"}
            >
              <a>{genre.name}</a>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
