import TablePagination from "../../../Pagination/TablePagination.component";
import CompanyOrdersTable from "./CompanyOrdersTable.component";
const CompanyOrdersList = () => {
  return (
    <div className="flex items-center w-[98%] h-screen flex-col gap-10">
      <div className="w-full h-[70%] bg-slate-50 overflow-auto">
        <CompanyOrdersTable />
      </div>
      <div className="w-full h-[5%]">
        <TablePagination />
      </div>
    </div>
  );
};

export default CompanyOrdersList;
