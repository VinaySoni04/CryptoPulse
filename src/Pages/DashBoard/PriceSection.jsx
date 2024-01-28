/* eslint-disable no-unused-vars */
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../ChakraUI/CustomCard";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
  const timeStamps = ["7:15 PM", "7:45 PM", "8:15 PM", "8:45 PM", "9:15 PM"];

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="#535D66">
            <Text fontSize="sm">Current Price</Text>
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={MdOutlineArrowOutward} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button textColor="black" leftIcon={<Icon as={FaPlusCircle} />}>
            Buy
          </Button>
          <Button textColor="black" leftIcon={<Icon as={FaMinusCircle} />}>
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="8px"
                _selected={{
                  color: "black",
                  bg: "white",
                  border: "0.5px solid black",
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image width="100%" src="/public/Graph.svg" mt="58px" />
            <HStack justify="space-between">
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image width="100%" src="/public/Graph.svg" mt="58px" />
            <HStack justify="space-between">
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.30">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image width="100%" src="/public/Graph.svg" mt="58px" />
            <HStack justify="space-between">
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.30">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image width="100%" src="/public/Graph.svg" mt="58px" />
            <HStack justify="space-between">
              {timeStamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
