import { TablePagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../components/Header/PageHeader.component";
import ListViewHeader from "../../../../components/PageFilterAndButton/ListViewHeader.component";
import UserListTable from "../../../../components/UserView/UserList/UserListTable.component";
const ActiveLogisticsCompanies = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen bg-transparent px-10 flex flex-col">
      <div className="flex flex-col h-[20%] w-full">
        <PageHeader title="Active Logistic Companies" />
        <ListViewHeader
          btnName="Register Company"
          action={() => {
            navigate("/admin/logistics-company/register");
          }}
        />
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

export default ActiveLogisticsCompanies;
