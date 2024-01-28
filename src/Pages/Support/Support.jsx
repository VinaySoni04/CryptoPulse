import { IoMail } from "react-icons/io5";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import DashBoardLayout from "../../Components/DashBoardLayout";
import ContactCard from "./ContactCard";
import SupportCard from "./SupportCard";
import InfoCard from "../DashBoard/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashBoardLayout title="Support">
      <Stack spacing="40px">
        <SupportCard
          leftComponent={<ContactCard />}
          title="Contact Us"
          icon={IoMail}
          text="Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          leftComponent={
            <InfoCard
              imgUrl="/public/DotBackground.svg"
              text="This feature will be available soon"
              tagText="Chatbot"
            />
          }
          title="Live Chat"
          icon={BsFillChatLeftDotsFill}
          text="Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashBoardLayout>
  );
};

export default Support;
