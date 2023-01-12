import { Outlet } from "react-router-dom";

const Companies = () => {
  return (
    <div className="bg-blue-50 w-full h-full">
      <Outlet />
    </div>
  );
};

export default Companies;
