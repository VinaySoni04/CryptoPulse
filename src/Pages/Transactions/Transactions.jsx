import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import { BiSolidDownload } from "react-icons/bi";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { IoSearch } from "react-icons/io5";

const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count: 350,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 214,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashBoardLayout title="Transaction History">
      <Flex justify="end" mb="12px">
        <Button leftIcon={<Icon as={BiSolidDownload}></Icon>} color="black">
          Download
        </Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList
            pt="4px"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px" pb="4px" pr="10px">
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search...." />
            </InputGroup>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TransactionHistoryTable />
            </TabPanel>
            <TabPanel>
              <TransactionHistoryTable />
            </TabPanel>
            <TabPanel>
              <TransactionHistoryTable />
            </TabPanel>
            <TabPanel>
              <TransactionHistoryTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashBoardLayout>
  );
};

export default Transactions;
