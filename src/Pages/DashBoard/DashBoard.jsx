import { Grid, GridItem } from "@chakra-ui/react";
import DashBoardLayout from "../../Components/DashBoardLayout";
import PortfolioSection from "./PortfolioSection";
import PriceSection from "./PriceSection";
import RecentTransactions from "./RecentTransactions";
import InfoCard from "./InfoCard";
import { useEffect } from "react";

const DashBoard = () => {
  useEffect(()=>{ // useEffect hook is similar to componentDidMount() and componentDidUpdate()
    document.title="Dashboard || CryptoPulse"; // By using [], useEffect will runs only once
},[])

  return (
    <DashBoardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="10px"
      >
        <GridItem colSpan={{
          base:1,
          xl:2
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <RecentTransactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/public/DotBackground.svg"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it."
            tagText="Loan"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/public/GridBackground.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services."
            tagText="Contact"
          />
        </GridItem>
      </Grid>
    </DashBoardLayout>
  );
};

export default DashBoard;
