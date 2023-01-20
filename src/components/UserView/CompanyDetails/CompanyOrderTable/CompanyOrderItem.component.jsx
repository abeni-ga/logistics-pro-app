import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
const CompanyOrderItem = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center">
      <div
        className="flex w-[99%] items-center bg-white rounded-lg py-4 gap-2"
        onClick={() => {
          navigate("/admin/retail-company/order-summary");
        }}
      >
        <div className=" w-[5%]">
          <div className="w-fit px-1 rounded-md ml-4 bg-[#4339F2]">
            <CheckIcon className="text-sm text-white" />
          </div>
        </div>
        <Typography className="w-[10%] text-lightGray">#003232</Typography>
        <div className="flex flex-col w-[20%]">
          <Typography className="text-lightGray">
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography>14, Kumolu. Ikeja, Lagos</Typography>
        </div>
        <div className="flex flex-col w-[20%]">
          <Typography className="text-lightGray">
            10 Mar. 2021 01:37PM
          </Typography>
          <Typography>14, Kumolu. Ikeja, Lagos</Typography>
        </div>
        <Typography className="w-[20%] text-lightGray">Mark Geofrey</Typography>
        <Typography className="w-[10%] text-lightGray">No</Typography>
        <div className="w-[10%]">
          <Typography className="p-1 rounded-md w-min bg-darkIndigo items-center text-white">
            N5,900
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CompanyOrderItem;
