import UsePlatforms from "@/hooks/usePlatforms";
import { Button, ButtonGroup, IconButton, Menu } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const PlatformSelector = () => {
  const { data, error } = UsePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <ButtonGroup size="lg" variant="outline" attached>
          <Button variant="outline">Platforms</Button>
          <IconButton variant="outline">
            <LuChevronDown />
          </IconButton>
        </ButtonGroup>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <Menu.Item key={platform.id}>{platform.name}</Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
