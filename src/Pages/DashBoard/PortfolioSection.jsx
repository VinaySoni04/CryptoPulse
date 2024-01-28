import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { HiOutlineUpload, HiOutlineDownload } from "react-icons/hi";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="24px"
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: "14px",
        xl: "0px",
      }}
    >
      <HStack
        spacing={{
          base: "0px",
          xl: "64px",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
      >
        <Stack>
          <HStack color="#535D66">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={BsFillInfoCircleFill} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="#535D66">
            <Text fontSize="sm">Wallet Balance</Text>
            <Icon as={BsFillInfoCircleFill} />
          </HStack>
          <HStack
            gap="24px"
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <Tag bg="black.15" colorScheme="gray">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag bg="black.15" colorScheme="gray">
                INR
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button textColor="black" leftIcon={<Icon as={HiOutlineUpload} />}>
          Deposit
        </Button>
        <Button textColor="black" leftIcon={<Icon as={HiOutlineDownload} />}>
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
