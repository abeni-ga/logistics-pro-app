import { useLocation } from "react-router-dom";
import RiderDetail from "../../../../components/Rider/RiderDetail/RiderDetail.component";

const RiderDetails = () => {
  const { state } = useLocation();
  const { userId } = state;
  return <RiderDetail userId={userId} />;
};

export default RiderDetails;
