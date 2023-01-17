import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { color } from "../../../constants/Theme.js";
import SubscriptionPlanItem from "../../../components/Subscription/SubscriptionPlanItem.component.jsx";
const SubscriptionPlan = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full items-center px-10">
      <div className="flex h-[20%] w-full items-center justify-between">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Subscription Plans
        </Typography>
        <Button
          onClick={() => {
            navigate("/admin/subscription/add");
          }}
          variant="outlined"
          sx={{ color: color.darkIndigo, borderColor: color.darkIndigo }}
        >
          Add New
        </Button>
      </div>
      <div className="flex flex-col w-full h-[80%] gap-2">
        <SubscriptionPlanItem />
        <SubscriptionPlanItem />
        <SubscriptionPlanItem />
        <SubscriptionPlanItem />
        <SubscriptionPlanItem />
      </div>
    </div>
  );
};

export default SubscriptionPlan;
