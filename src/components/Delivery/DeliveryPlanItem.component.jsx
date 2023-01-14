import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../constants/Theme.js";
import { Typography } from "@mui/material";
import CollectionCenter from "../../assets/svg/CollectionCenter.svg";
const DeliveryPlan = () => {
  return (
    <div className="flex bg-white rounded-lg w-full min-h-[10%] items-center">
      <div className="flex justify-center w-[5%]">
        <img src={CollectionCenter} alt="" />
      </div>
      <div className="flex flex-col w-[60%]">
        <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
          Express Delivery Service
        </Typography>
        <Typography sx={{ fontSize: "8px", color: color.darkGray }}>
          Delivery within 3 hours
        </Typography>
      </div>
      <div className="w-[30%] flex justify-start">
        <Typography
          sx={{
            fontWeight: "700",
            color: color.darkIndigo,
            backgroundColor: color.lightBlue,
            paddingX: "15px",
            borderRadius: "4px",
          }}
        >
          Active
        </Typography>
      </div>
      <MoreHorizIcon sx={{ width: "5%" }} />
    </div>
  );
};

export default DeliveryPlan;
