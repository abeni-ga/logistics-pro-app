import { useLocation, useParams } from "react-router-dom";
import RiderDetail from "../../../../components/Rider/RiderDetail/RiderDetail.component";

const RiderDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const { user } = state;
  console.log("user id get from params", id);
  return <RiderDetail user={user} userId={id} />;
};

export default RiderDetails;
