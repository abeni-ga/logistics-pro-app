import ListAllCompanies from "../../../components/UserView/UserList/UserListAll.component";
const ListAllLogisticsCompanies = () => {
  return (
    <div>
      <ListAllCompanies
        route="/admin/logistics-company/detail"
        title={"Logistic Companies"}
        btnName="Register Company"
      />
    </div>
  );
};

export default ListAllLogisticsCompanies;
