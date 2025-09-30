import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={8}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
