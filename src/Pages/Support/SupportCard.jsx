/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap="24px"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="380px">
        <Icon as={icon} boxSize="24px" color="blue.400" />
        <Text as="h3" textStyle="h3" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.30">
          {text}
        </Text>
      </Stack>
      <Box maxW="700px" w="full">{leftComponent}</Box>
    </Flex>
  );
};

export default SupportCard;
