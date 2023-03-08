import { Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { color } from "../../../constants/Theme.js";
import SubscriptionPlanItem from "../../../components/Subscription/SubscriptionPlanItem.component.jsx";
import { routes } from "../../../routes/siteRoutes.routes.js";
import { useCallback, useEffect, useState } from "react";
import { getSubscriptions } from "../../../utils/apis.js";
import { toast } from "react-toastify";
const SubscriptionPlan = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate();

  const handleGetSubscriptions = useCallback(async () => {
    const response = await getSubscriptions({});
    if (response?.status < 300) {
      setSubscriptions(response?.data?.data);
      console.log(response);
    } else {
      toast.error(response?.statusText);
    }
  }, []);
  useEffect(() => {
    handleGetSubscriptions();
  }, [handleGetSubscriptions]);
  return subscriptions.length > 0 ? (
    <div className="flex flex-col w-full h-full items-center px-10">
      <div className="flex h-[20%] w-full items-center justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Subscription Plans
        </Typography>
        <Button
          onClick={() => {
            navigate(routes.admin.addSubscription);
          }}
          variant="outlined"
          sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
        >
          Add New
        </Button>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-2">
        {subscriptions.map((subscription, index) => {
          return (
            <SubscriptionPlanItem subscription={subscription} key={index} />
          );
        })}
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <CircularProgress />
    </div>
  );
};

export default SubscriptionPlan;
