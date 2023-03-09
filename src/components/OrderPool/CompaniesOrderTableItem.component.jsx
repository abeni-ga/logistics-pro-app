import { Avatar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { routes } from "../../routes/siteRoutes.routes";
import getAddress from "../../utils/getAddress";
import { useEffect, useState } from "react";
const CompaniesOrderPoolTableItem = ({ order }) => {
  const navigate = useNavigate();
  const [pickUpAddress, setPickUpAddress] = useState(undefined);
  const [destinationAddress, setDestinationAddress] = useState(undefined);
  console.log(order);
  useEffect(() => {
    const address = async () => {
      const pickUpAddress = await getAddress(
        order?.pickUpLocation[0],
        order?.pickUpLocation[1]
      );
      setPickUpAddress(pickUpAddress);
      console.log(pickUpAddress);
      const destinationAddress = await getAddress(
        order?.destinationLocation[0],
        order?.destinationLocation[1]
      );
      setDestinationAddress(destinationAddress);
      return {
        pickUpLocation: pickUpAddress,
        destinationLocation: destinationAddress,
      };
    };
    address();
  }, [order]);
  return (
    <div
      className="flex w-full h-24 items-center bg-white rounded-lg justify-between"
      onClick={() => {
        navigate(routes.admin.orderSummary);
      }}
    >
      <Typography className=" text-xs xl:text-sm text-lightGray w-[3%] text-center ">
        {order?.serialNumber}
      </Typography>
      <div className="flex flex-col w-[7%] items-start">
        <Typography className=" text-xs xl:text-sm text-darkIndigo font-bold ">
          {`#${order._id.substring(0, 9)}`}
        </Typography>
        <Typography className=" text-xs xl:text-sm text-darkIndigo "></Typography>
      </div>
      <Typography className=" text-xs xl:text-sm text-lightGray w-[7%] ">
        {order.itemName}
      </Typography>
      <div className="flex gap-2 w-[14%]">
        <Avatar size="small" />
        <div className="flex flex-col">
          <Typography className="text-xs xl:text-sm">
            {order?.customer?.name}
          </Typography>
          <Typography className=" text-xs xl:text-sm text-lightGray ">
            {order?.customer?.phone}
          </Typography>
        </div>
      </div>
      <div className="w-[15%]">
        <Typography className=" text-xs xl:text-sm text-lightGray ">
          {order?.createdAt.substring(0, 10)}
        </Typography>
        <Typography className="text-xs xl:text-sm">{pickUpAddress}</Typography>
      </div>
      <div className="flex gap-2 w-[14%]  ">
        <Avatar />
        <div className="flex flex-col">
          <Typography className="text-xs xl:text-sm">
            {order?.receiver?.name}
          </Typography>
          <Typography className=" text-xs xl:text-sm text-lightGray ">
            {order?.receiver?.phone}
          </Typography>
        </div>
      </div>
      <div className="w-[15%]">
        <Typography className=" text-xs xl:text-sm text-lightGray ">
          {order?.createdAt.substring(0, 10)}
        </Typography>
        <Typography className="text-xs xl:text-sm">
          {destinationAddress}
        </Typography>
      </div>
      <Typography className=" text-xs xl:text-sm text-lightGray w-[9%] ">
        {`${order?.itemType ? order?.itemType : ""} (${parseInt(
          order?.amount
        )} Dozens)`}
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
          {order?.charge}
        </Typography>
        <Typography className=" text-xs xl:text-sm font-bold ">
          {order?.paymentMethod}
        </Typography>
      </div>
      <Typography className=" text-xs xl:text-sm w-[3%] ">
        <MoreHorizIcon />
      </Typography>
    </div>
  );
};

export default CompaniesOrderPoolTableItem;
