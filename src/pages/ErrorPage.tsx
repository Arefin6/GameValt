import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box padding={7}>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "Page Not Found"
          : "Sorry, an unexpected error has occurred."}
      </Text>
    </Box>
  );
};

export default ErrorPage;
