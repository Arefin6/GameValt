import { Platform } from "@/hooks/useGame";
import usePlatform from "@/hooks/usePlatform";
import UsePlatforms from "@/hooks/usePlatforms";
import { Button, ButtonGroup, IconButton, Menu } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = UsePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
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
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
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
