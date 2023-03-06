import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { color } from "../../../constants/Theme.js";
import { getDeliveryPlans } from "../../../utils/apis.js";
import DeliveryPlanItem from "../../../components/Delivery/DeliveryPlanItem.component.jsx";
import { routes } from "../../../routes/siteRoutes.routes.js";
const DeliveryPlan = () => {
  const navigate = useNavigate();
  const [deliveryPlans, setDeliveryPlans] = useState([]);
  const handleGetDeliveryPlans = useCallback(async () => {
    const response = await getDeliveryPlans({});
    if (response?.status < 300) {
      setDeliveryPlans(response?.data?.data?.data);
      console.log(response?.data?.data?.data);
    } else {
      toast.error(response?.statusText);
    }
  }, []);
  useEffect(() => {
    handleGetDeliveryPlans();
  }, [handleGetDeliveryPlans]);

  return deliveryPlans.length > 0 ? (
    <div className="flex flex-col w-full h-full items-center px-10 pt-5">
      <div className="flex h-[20%] w-full">
        <div className="flex w-full items-center  justify-between">
          <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
            Delivery Plans
          </Typography>
          <Button
            onClick={() => {
              navigate(routes.admin.addDeliveryPlan);
            }}
            sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
            variant="outlined"
            size="large"
            startIcon={<AddIcon />}
          >
            Add New
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-3">
        <div className="flex w-full min-h-[15%] items-center bg-white rounded-lg">
          <div className="w-[5%]"></div>
          <div className="w-[68%]">
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: color.lightGray,
              }}
            >
              Name
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: color.lightGray,
              }}
            >
              Manage
            </Typography>
          </div>
        </div>
        <div className="flex w-full h-full">
          <div className="flex flex-col w-[80%] gap-2 pr-2">
            {deliveryPlans.map((plan, index) => {
              return <DeliveryPlanItem plan={plan} key={index} />;
            })}
          </div>
          <div className="flex flex-col w-[20%] h-[50%] px-5 py-10 bg-white rounded-lg gap-2">
            <div className="flex justify-between items-center">
              <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
                Food Delivery
              </Typography>
              <MoreHorizIcon />
            </div>
            <Typography sx={{ color: color.lightGray, fontWeight: "700" }}>
              45 minutes delivery service
            </Typography>
            <div className="flex gap-1">
              <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                Base Fare:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  color: color.lightGray,
                }}
              >
                500
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                Price per Km
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  color: color.lightGray,
                }}
              >
                500
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                Flat Rate
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  color: color.lightGray,
                }}
              >
                500
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default DeliveryPlan;
