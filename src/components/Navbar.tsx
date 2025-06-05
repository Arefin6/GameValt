import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={logo} alt="Logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
