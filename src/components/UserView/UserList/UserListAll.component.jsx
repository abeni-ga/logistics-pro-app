import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListViewHeader from "../../PageFilterAndButton/ListViewHeader.component.jsx";
import TablePagination from "../../Pagination/TablePagination.component.jsx";
import UserListTable from "./UserListTable.component.jsx";
const ListAllUsers = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-screen bg-transparent p-10 flex flex-col">
      <div className="flex flex-col h-[20%] w-full">
        <Typography variant="h5" className="font-bold">
          {props.title}
        </Typography>
        <ListViewHeader
          btnName={props.btnName}
          action={() => {
            navigate("/admin/logistics-company/register");
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
