import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDashboard, BiSupport } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname === link;
  };

  const sideMenuLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "256px",
      }}
      h="100vh"
      justify="space-between"
      bg="white"
    >
      <Box>
        <Heading as="h1" textAlign="center" fontSize="24px" pt="56px">
          CryptoPulse
        </Heading>
        <Box mx="12px" mt="24px" cursor="pointer">
          {sideMenuLinks.map((menu) => (
            <Link to={menu.link} key={menu.text}>
              <HStack
                py="12px"
                px="16px"
                borderRadius="12px"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                bg={isActive(menu.link) ? "#F3F3F7" : "transparent"}
                color={isActive(menu.link) ? "#171717" : "#797E82"}
              >
                <Icon as={menu.icon} />
                <Text fontSize="18px" fontWeight="medium">
                  {menu.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mx="12px" mt="24px" mb="24px" cursor="pointer">
        <Link to="/support">
          <HStack
            py="12px"
            px="16px"
            borderRadius="12px"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            bg={isActive("/support") ? "#F3F3F7" : "transparent"}
            color={isActive("/support") ? "#171717" : "#797E82"}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideMenu;
