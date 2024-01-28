import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
} from "@chakra-ui/react";

const TransactionHistoryTable = () => {
    const tableData = [
      {
        id: "HD82NA10H",
        date: "2023-09-02",
        time: "04:09 PM",
        type: "BTC Widthdraw",
        amount: "-10.05454 BTC",
        status: "success",
    },
    {
      id: "HD82NA9H",
      date: "2023-08-25",
      time: "04:00 PM",
      type: "INR Widthdraw",
      amount: "-₹8,000",
      status: "cancelled",
    },
    {
        id: "HD82NA8H",
        date: "2023-08-18",
        time: "01:00 PM",
        type: "BTC Widthdraw",
        amount: "-5.05555544 BTC",
        status: "success",
    },
    {
        id: "HD82NA7H",
        date: "2023-08-11",
        time: "10:10 AM",
        type: "BTC Deposit",
        amount: "+15.5000000 BTC",
        status: "pending",
    },
    {
      id: "HD82NA6H",
      date: "2023-08-08",
      time: "08:48 AM",
      type: "BTC Sell",
      amount: "-2.0554484 BTC",
      status: "success",
    },
    {
        id: "HD82NA5H",
        date: "2023-07-28",
        time: "09:15 AM",
      type: "BTC Buy",
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
        id: "HD82NA4H",
        date: "2023-07-18",
        time: "08:00 AM",
        type: "INR Widthdraw",
        amount: "-₹55,123",
        status: "processing",
    },
    {
        id: "HD82NA3H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: "INR Deposit",
        amount: "+₹81,000",
        status: "pending",
    },
];

  const statusColor={
    pending:"black.20",
    processing:"#F5A50B",
    success:"#059669",
    cancelled:"#DC2626"
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id} fontSize="sm">
              <Td>{data.id}</Td>
              <Td>{data.time}</Td>
              <Td>{data.type}</Td>
              <Td>{data.amount}</Td>
              <Td><Tag bg={statusColor[data.status]} color="black" borderRadius="full">{data.status}</Tag></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionHistoryTable;
