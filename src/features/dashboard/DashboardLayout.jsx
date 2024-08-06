import styled from "styled-components";
import Stats from "./Stats";
import { useRecentSays } from "./useRecentStays";
import { useRecentBookins } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookins();
  const {
    stays,
    confirmedStays,
    isLoading: isLoading1,
    numDays,
  } = useRecentSays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  if (isLoading || isLoading1 || isLoading3) return <Spinner></Spinner>;

  console.log(bookings);
  console.log(stays, confirmedStays);
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today`s activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays}></SalesChart>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
