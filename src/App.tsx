import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr", // or whatever width you want for aside
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      {/* <Show when={{ lg: true }}> */}
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      {/* </Show>78u0 */}
      <GridItem area={"main"}>
        <PlatformSelector
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
