import ListAllCompanies from "../../../../components/UserView/UserList/UserListAll.component";
const ActiveLogisticsCompanies = () => {
  return (
    <div>
      <ListAllCompanies
        route="/admin/logistics-company/detail"
        title={"Active Logistic Companies"}
        btnName="search"
      />
    </div>
  );
};

export default ActiveLogisticsCompanies;
