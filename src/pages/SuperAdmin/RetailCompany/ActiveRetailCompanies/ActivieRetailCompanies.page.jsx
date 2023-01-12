import ListAllCompanies from "../../../../components/UserView/UserList/UserListAll.component";
const ActiveRetailCompanies = () => {
  return (
    <div>
      <ListAllCompanies
        route="/admin/retail-company/detail"
        title="Active Retail"
        btnName="New Company"
      />
    </div>
  );
};

export default ActiveRetailCompanies;
