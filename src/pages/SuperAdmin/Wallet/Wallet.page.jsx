import { Typography } from "@mui/material";
import WalletItem from "../../../components/Wallet/WalletListItem.component";
const SubscriptionPlan = () => {
  return (
    <div className="flex flex-col w-full h-full items-center px-10">
      <div className="flex h-[20%] w-full">
        <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
          Subscription Plans
        </Typography>
      </div>
      <div className="flex flex-col w-full h-[80%]">
        <WalletItem />
      </div>
    </div>
  );
};

export default SubscriptionPlan;
