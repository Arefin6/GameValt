import { Button, ButtonGroup, IconButton, Menu } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  sortOrder: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSort = sortOrders.find((sort) => sort.value === sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <ButtonGroup size="lg" variant="outline" attached>
          <Button variant="outline">
            Order by: {currentSort?.label || "Relevance"}
          </Button>
          <IconButton variant="outline">
            <LuChevronDown />
          </IconButton>
        </ButtonGroup>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((sort) => (
            <Menu.Item
              onClick={() => onSelectSortOrder(sort.value)}
              key={sort.value}
              value={sort.value}
            >
              {sort.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
