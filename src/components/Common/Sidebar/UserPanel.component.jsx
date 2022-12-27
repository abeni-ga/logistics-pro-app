import Logo from "../../../assets/svg/Logo.svg";

const UserPanel = () => {
  return (
    <div className="flex">
      <div className="sidebar-user text-center mt-6 mb-6">
        <div>
          <img className="rounded-full w-10" src={Logo} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
