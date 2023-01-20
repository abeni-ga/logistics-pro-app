import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { routes } from "../../../../routes/siteRoutes.routes";

const RiderOrderTableItem = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center">
      <div
        className="flex w-[99%] items-center bg-white rounded-lg py-4 gap-2"
        onClick={() => {
          navigate(routes.admin.riderHistory);
        }}
      >
        <div className=" w-[5%] flex justify-center">
          <Typography className="text-white w-fit h-fit bg-[#4339F2] rounded ml-4 px-1">
            <CheckIcon className="text-sm" />
          </Typography>
        </div>
        <Typography className="w-[15%] text-lightGray">#003232</Typography>
        <div className="flex flex-col w-[30%]">
          <Typography className="text-lightGray">
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography sx={{ fontWeight: "700" }}>
            14, Kumolu. Ikeja, Lagos
          </Typography>
        </div>
        <div className="flex flex-col w-[30%]">
          <Typography className="text-lightGray">
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography sx={{ fontWeight: "700" }}>
            14, Kumolu. Ikeja, Lagos
          </Typography>
        </div>

        <Typography className="w-[10%] text-lightGray">No</Typography>
        <div className="w-[10%]">
          <Typography className="p-1 rounded-lg w-min bg-darkIndigo items-center text-white font-bold">
            N5,900
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RiderOrderTableItem;
