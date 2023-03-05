import { Outlet } from "react-router-dom";

const DirectCustomer = () => {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
};

export default DirectCustomer;
