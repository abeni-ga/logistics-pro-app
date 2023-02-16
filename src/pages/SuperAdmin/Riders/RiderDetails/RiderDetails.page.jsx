import { useLocation, useParams } from "react-router-dom";
import RiderDetail from "../../../../components/Rider/RiderDetail/RiderDetail.component";

const RiderDetails = () => {
  const { id } = useParams();
  console.log("user id get from params", id);
  return <RiderDetail userId={id} />;
};

export default RiderDetails;
