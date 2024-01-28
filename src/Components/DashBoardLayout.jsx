/* eslint-disable react/prop-types */
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideMenu from "./SideMenu";
import TopNavBar from "./TopNavBar";
import SideDrawer from "./SideDrawer";

const DashBoardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <SideMenu />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNavBar title={title} onOpen={onOpen} />
        <Container maxW="1120px" mt="24px" overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)" >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashBoardLayout;
