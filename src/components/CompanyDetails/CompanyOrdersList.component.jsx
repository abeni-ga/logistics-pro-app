import FilterAndActionButton from "../PageFilterAndButton/OrderViewHeader";
import CompanyOrdersTable from "./CompanyOrdersTable.component";

const CompanyOrdersList = () => {
  return (
    <div className="flex items-center w-[98%] flex-col gap-2">
      <FilterAndActionButton btnName="New Company" />
      <CompanyOrdersTable />
    </div>
  );
};

export default CompanyOrdersList;
