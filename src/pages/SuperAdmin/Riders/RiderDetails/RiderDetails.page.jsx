import { useLocation } from "react-router-dom";
import RiderDetail from "../../../../components/Rider/RiderDetail/RiderDetail.component";

const RiderDetails = () => {
  const { state } = useLocation();
  console.log("user", state);
  return <RiderDetail user={state} />;
};

export default RiderDetails;
