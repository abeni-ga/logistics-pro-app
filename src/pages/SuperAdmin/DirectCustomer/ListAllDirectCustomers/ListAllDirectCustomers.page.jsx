import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../components/Header/PageHeader.component";
import ListViewHeader from "../../../../components/PageFilterAndButton/ListViewHeader.component";
import TablePagination from "../../../../components/Pagination/TablePagination.component";
import UserListTable from "../../../../components/UserView/UserList/UserListTable.component";

const ListAllDirectCustomer = () => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate("/admin/logistics-company/register");
  };
  return (
    <div className=" w-full h-screen bg-transparent px-10 flex flex-col">
      <div className="flex flex-col w-full">
        <PageHeader title="Direct Customers" />
        <ListViewHeader btnName="Search" action={handleAction} />
      </div>
      <div className="flex flex-col h-[75%] w-full overflow-auto">
        <UserListTable route="/admin/direct-customer/detail" />
      </div>
      <div className="h-[5%]">
        <TablePagination />
      </div>
    </div>
  );
};

export default ListAllDirectCustomer;
