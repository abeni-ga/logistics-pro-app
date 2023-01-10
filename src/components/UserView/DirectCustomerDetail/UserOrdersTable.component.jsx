import { Typography } from "@mui/material";

import UserOrderItem from "./UserOrderItem.component";

const UserOrdersTable = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 bg-gray-200 rounded-lg py-2">
      <div className="flex w-full items-center justify-center">
        <div className="flex w-[99%] gap-2">
          <div className="w-[5%]"></div>
          <Typography
            sx={{
              width: "10%",
            }}
          >
            Order Id
          </Typography>
          <Typography sx={{ width: "20%" }}>Pick-Up</Typography>
          <Typography sx={{ width: "20%" }}>Delivery</Typography>
          <Typography sx={{ width: "20%" }}>Customer Name</Typography>
          <Typography sx={{ width: "10%" }}>Refund</Typography>
          <Typography sx={{ width: "10%" }}>Earning</Typography>
        </div>
      </div>
      <UserOrderItem />
      <UserOrderItem />
      <UserOrderItem />
      <UserOrderItem />
      <UserOrderItem />
      <UserOrderItem />
      <UserOrderItem />
    </div>
  );
};

export default UserOrdersTable;
