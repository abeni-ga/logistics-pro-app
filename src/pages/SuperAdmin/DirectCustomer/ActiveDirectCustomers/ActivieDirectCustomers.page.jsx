import ListAllUser from "../../../../components/UserView/UserList/UserListAll.component";
const ActiveDirectCustomer = () => {
  return (
    <ListAllUser
      route="/admin/direct-customer/detail"
      title="Active Direct Customer"
      btnName="Search"
    />
  );
};

export default ActiveDirectCustomer;
