/* eslint-disable react/prop-types */
import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const TopNavBar = ({title,onOpen}) => {
  return (
    <Box px="12px" bg="white">
      <HStack
        maxW="1120px"
        h="64px"
        justify="space-between"
        mx="auto"
      >
        <Icon as={TiThMenu} onClick={onOpen} 
        display={{
          base:"block",
          lg:"none"
        }}/>
        <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
        <Menu>
          <MenuButton as={Button} bg="black.5" color="black.1">
            <Icon as={FaUserAlt} fontSize="20px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Sign out</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNavBar;
