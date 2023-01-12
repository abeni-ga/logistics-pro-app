import ListCompanies from "../../../../components/UserView/UserList/UserListAll.component";
const ListAllCompanies = () => {
  return (
    <div>
      <ListCompanies
        route="/admin/logistics-company/detail"
        title={"View Companies"}
        btnName="Register Company"
      />
    </div>
  );
};

export default ListAllCompanies;
