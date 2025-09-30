//@ts-nocheck
import usePlatform from "@/hooks/usePlatform";
import UsePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, ButtonGroup, IconButton, Menu } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

const PlatformSelector = () => {
  const { data, error } = UsePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger>
        <ButtonGroup size="lg" variant="outline" attached>
          <Button variant="outline">
            {selectedPlatform?.name || "Platforms"}
          </Button>
          <IconButton variant="outline">
            <LuChevronDown />
          </IconButton>
        </ButtonGroup>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data?.results.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.id.toString()}
              onClick={() => setPlatformId(platform.id)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
