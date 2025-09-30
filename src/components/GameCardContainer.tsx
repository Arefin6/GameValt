import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      style={{ cursor: "pointer" }}
      _hover={{ transform: "scale(1.03)", transition: "transform 0.10s" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
