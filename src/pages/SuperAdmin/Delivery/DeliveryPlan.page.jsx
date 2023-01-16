import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { color } from "../../../constants/Theme.js";
import { Button, Typography } from "@mui/material";
import DeliveryPlan from "../../../components/Delivery/DeliveryPlanItem.component.jsx";
import { useNavigate } from "react-router-dom";
const AddCollectionCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full items-center px-10 pt-5">
      <div className="flex h-[20%] w-full">
        <div className="flex w-full items-center  justify-between">
          <Typography variant="h2" sx={{ fontSize: "28px", fontWeight: "700" }}>
            Delivery Plans
          </Typography>
          <Button
            onClick={() => {
              navigate("/admin/delivery/add");
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
          <div className="flex flex-col w-[80%] pr-2">
            <DeliveryPlan />
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
  );
};

export default AddCollectionCenter;
