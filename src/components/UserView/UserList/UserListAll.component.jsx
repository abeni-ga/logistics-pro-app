import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListViewHeader from "../../PageFilterAndButton/ListViewHeader.component.jsx";
import UserListTable from "./UserListTable.component.jsx";
const ListAllUsers = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-screen lg:w-full h-full bg-transparent p-10 flex flex-col gap-5 flex-wrap min-w-min">
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <ListViewHeader
        btnName={props.btnName}
        action={() => {
          navigate("/admin/logistics-company/register");
        }}
      />
      <UserListTable route={props.route} />
    </div>
  );
};

export default ListAllUsers;
