import { color } from "../../constants/Theme.js";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CollectionCenter from "../../assets/svg/CollectionCenter.svg";
const SubscriptionPlanItem = () => {
  return (
    <div className="flex flex-col w-full h-[80%]">
      <div className="flex w-full min-h-[10%] bg-white rounded-lg items-center">
        <div className="w-[4%] flex justify-center">
          <CheckIcon
            sx={{
              backgroundColor: color.bolow,
              fontSize: "small",
              paddingX: "2px",
              color: "white",
              borderRadius: "4px",
            }}
          />
        </div>
        <div className="flex items-center gap-2 w-[30%]">
          <img src={CollectionCenter} alt="" />
          <Typography sx={{ fontWeight: "700", color: color.darkGray }}>
            Plane name
          </Typography>
        </div>
        <Typography
          sx={{ width: "10%", fontWeight: "700", color: color.darkGray }}
        >
          ₦390,000
        </Typography>
        <div className="flex w-[10%]">
          <Typography
            sx={{
              fontWeight: "700",
              paddingX: "6px",
              color: color.darkIndigo,
              backgroundColor: color.bgWhiteSmoke,
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            Active
          </Typography>
        </div>
        <MoreHorizIcon sx={{ width: "5%" }} />
      </div>
    </div>
  );
};

export default SubscriptionPlanItem;
