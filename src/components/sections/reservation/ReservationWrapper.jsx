import ReservationDetails from "./ReservationDetails";
import ReservationContactUs from "./ReservationContact";
import ReservationMap from "./ReservationMap";
function ReservationWrapper() {
  return (
    <>
      <ReservationContactUs />
      <ReservationMap />
      <ReservationDetails />
    </>
  );
}

export default ReservationWrapper;
