import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr", // or whatever width you want for aside
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      {/* <Show when={{ lg: true }}> */}
      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      {/* </Show> */}
      <GridItem area={"main"} bg={"dodgerblue"}>
        Content
      </GridItem>
    </Grid>
  );
}

export default App;
