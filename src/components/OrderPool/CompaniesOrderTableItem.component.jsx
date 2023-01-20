import { Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const CompaniesOrderPoolTableItem = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex w-full h-24 items-center bg-white rounded-lg justify-between"
      onClick={() => {
        navigate("/admin/orders/order-summary");
      }}
    >
      <Typography className=" text-xs xl:text-sm text-lightGray w-[3%] text-center ">
        01
      </Typography>
      <div className="flex flex-col w-[7%] items-start">
        <Typography className=" text-xs xl:text-sm text-darkIndigo font-bold ">
          #00112244
        </Typography>
        <Typography className=" text-xs xl:text-sm text-darkIndigo ">
          TC Riders pushed this
        </Typography>
      </div>
      <Typography className=" text-xs xl:text-sm text-lightGray w-[7%] ">
        Book Delivery
      </Typography>
      <div className="flex gap-2 w-[14%]">
        <Avatar size="small" />
        <div className="flex flex-col">
          <Typography className="text-xs xl:text-sm">
            Olaniyi Ojo David
          </Typography>
          <Typography className=" text-xs xl:text-sm text-lightGray ">
            091612891010
          </Typography>
        </div>
      </div>
      <div className="w-[15%]">
        <Typography className=" text-xs xl:text-sm text-lightGray ">
          10/10/2021 01:37PM
        </Typography>
        <Typography className="text-xs xl:text-sm">
          14 Kumolu Street. Ikeja Lagos
        </Typography>
      </div>
      <div className="flex gap-2 w-[14%]  ">
        <Avatar />
        <div className="flex flex-col">
          <Typography className="text-xs xl:text-sm">
            Olaniyi Ojo David
          </Typography>
          <Typography className=" text-xs xl:text-sm text-lightGray ">
            091612891010
          </Typography>
        </div>
      </div>
      <div className="w-[15%]">
        <Typography className=" text-xs xl:text-sm text-lightGray ">
          10/10/2021 01:37PM
        </Typography>
        <Typography className="text-xs xl:text-sm">
          14 Kumolu Street. Ikeja Lagos
        </Typography>
      </div>
      <Typography className=" text-xs xl:text-sm text-lightGray w-[9%] ">
        Books (2 Dozens)
      </Typography>
      <div className="flex flex-col gap-2 w-[6%]">
        <Typography
          className="
            w-min
            p-1
            rounded-sm
            bg-bgWhiteSmoke
            font-bold
            text-darkIndigo
          "
        >
          N5900
        </Typography>
        <Typography className=" text-xs xl:text-sm font-bold ">Cash</Typography>
      </div>
      <Typography className=" text-xs xl:text-sm w-[3%] ">
        <MoreHorizIcon />
      </Typography>
    </div>
  );
};

export default CompaniesOrderPoolTableItem;
