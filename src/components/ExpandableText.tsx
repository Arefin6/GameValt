import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summery = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summery}
        <Button
          fontWeight="bold"
          size="xs"
          colorScheme="yellow"
          margin={1}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "ShowLess" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
