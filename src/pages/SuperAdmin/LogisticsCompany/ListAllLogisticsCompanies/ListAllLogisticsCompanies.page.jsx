import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../components/Header/PageHeader.component";
import ListViewHeader from "../../../../components/PageFilterAndButton/ListViewHeader.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import UserListTable from "../../../../components/UserView/UserList/UserListTable.component";
const ListAllLogisticsCompanies = () => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate("/admin/logistics-company/register");
  };
  return (
    <div className=" w-full h-screen bg-transparent p-10 flex flex-col">
      <div className="flex flex-col h-[20%] w-full">
        <PageHeader title="Logistic Companies" />
        <ListViewHeader btnName="Register Company" action={handleAction} />
      </div>
      <div className="flex flex-col h-[75%] w-full overflow-auto">
        <UserListTable route="/admin/logistics-company/detail" />
      </div>
      <div className="h-[5%]">
        <TablePagination />
      </div>
    </div>
  );
};

export default ListAllLogisticsCompanies;
