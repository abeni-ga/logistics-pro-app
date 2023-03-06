import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/siteRoutes.routes.js";
import PageHeader from "../../Header/PageHeader.component.jsx";
import ListViewHeader from "../../PageFilterAndButton/ListViewHeader.component.jsx";
import TablePagination from "../../Pagination/TablePagination.component.jsx";
import UserListTable from "./UserListTable.component.jsx";
const ListAllUsers = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen bg-transparent px-10 flex flex-col">
      <div className="flex flex-col w-full">
        <PageHeader title="" />
        <ListViewHeader
          btnName={props.btnName}
          action={() => {
            navigate(routes.admin.registerDeliveryCompany);
          }}
        />
      </div>
      <div className="flex flex-col h-[75%] w-full overflow-auto">
        <UserListTable route={props.route} />
      </div>
      <div className="h-[5%]">
        <TablePagination />
      </div>
    </div>
  );
};

export default ListAllUsers;
