import { Button, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../ChakraUI/CustomCard";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { Fragment } from "react";

const RecentTransactions = () => {
  const transactions = [
    {
      id:"1",
      icon: HiMiniCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id:"2",
      icon: PiCurrencyBtcFill,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id:"3",
      icon: HiMiniCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text fontSize="sm" color="black.30" mb="24px">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        { transactions.map((transaction,idx)=>(
          <Fragment key={transaction.id}>
            { idx!=0 && <Divider />}
            <Flex gap="16px" >
            <Grid bg="black.5" boxSize="40px" borderRadius="full" placeItems="center">
              <Icon as={transaction.icon} />
            </Grid>
            <Flex justify="space-between" w="full" >
              <Stack spacing={0}>
                <Text textStyle="h6">{transaction.text}</Text>
                <Text fontSize="sm" color="black.30" >{transaction.timestamp}</Text>
              </Stack>
              <Text textStyle="h6">{transaction.amount}</Text>
            </Flex>
          </Flex>
          </Fragment>
        )) }
      </Stack>
      <Button w="full" colorScheme="gray" mt="24px">View all</Button>
    </CustomCard>
  );
};

export default RecentTransactions;
