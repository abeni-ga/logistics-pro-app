import { Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <div className="bg-blue-50 w-full h-full">
      <Outlet />
    </div>
  );
};

export default Orders;
