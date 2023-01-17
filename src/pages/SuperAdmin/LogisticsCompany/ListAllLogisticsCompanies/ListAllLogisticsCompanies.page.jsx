import { useNavigate } from "react-router-dom";
import ListAllCompanies from "../../../../components/UserView/UserList/UserListAll.component";
const ListAllLogisticsCompanies = () => {
  const navigate = useNavigate();
  const handleAction = () => {
    navigate("/admin/logistics-company/register");
  };
  return (
    <div>
      <ListAllCompanies
        action={handleAction}
        route="/admin/logistics-company/detail"
        title={"Logistic Companies"}
        btnName="Register Company"
      />
    </div>
  );
};

export default ListAllLogisticsCompanies;
