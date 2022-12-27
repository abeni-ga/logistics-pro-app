const NavButton = ({ icon, title, isOpen }) => {
  return (
    <button className="flex gap-3 mb-10 ">
      {icon}
      {isOpen ? title : null}
    </button>
  );
};

export default NavButton;
