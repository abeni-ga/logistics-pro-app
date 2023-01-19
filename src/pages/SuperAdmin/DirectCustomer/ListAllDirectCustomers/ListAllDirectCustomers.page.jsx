import ListAllUser from "../../../../components/UserView/UserList/UserListAll.component";
const ListAllDirectCustomer = () => {
  return (
    <ListAllUser
      route="/admin/direct-customer/detail"
      title="Direct Customer"
      btnName="Search"
    />
  );
};

export default ListAllDirectCustomer;
