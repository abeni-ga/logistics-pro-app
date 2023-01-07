import FilterAndActionButton from "../PageFilterAndButton/OrderViewHeader";
import UserOrdersTable from "./UserOrdersTable.component";

const UserOrdersList = () => {
  return (
    <div className="flex items-center w-[98%] flex-col gap-2">
      <FilterAndActionButton btnName="New Company" />
      <UserOrdersTable />
    </div>
  );
};

export default UserOrdersList;
