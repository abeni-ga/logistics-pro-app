const NavButton = ({ icon, title, isOpen }) => {
  return (
    <button className="flex gap-3 justify-start p-3 w-full">
      {icon}
      {isOpen ? title : null}
    </button>
  );
};

export default NavButton;
