import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="24px" flexGrow={1}>
      <Stack spacing="20px">
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="Enter your first name...." />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Enter your last name...." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email...." />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Enter your message...." />
        </FormControl>
        <Checkbox>
          <Text fontSize="12px">
            I agree with
            <Box as="span" color="p_blue">
              {" "}
              Terms & Conditions
            </Box>
          </Text>
        </Checkbox>
        <Button color="black" fontSize="sm">
          Send the message
        </Button>
      </Stack>
    </Card>
  );
};

export default ContactCard;
