import {
  ClientOnly,
  HStack,
  IconButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="lg">
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <Text>Dark Mood</Text>
      </ClientOnly>
    </HStack>
  );
};

export default ColorModeSwitch;
