import { useLocation } from "react-router-dom";
import RiderDetail from "../../../../components/Rider/RiderDetail/RiderDetail.component";

const RiderDetails = () => {
  const { state } = useLocation();
  const { user } = state;
  console.log(user);
  return <RiderDetail user={user} />;
};

export default RiderDetails;
