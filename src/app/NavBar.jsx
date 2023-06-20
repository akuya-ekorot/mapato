// Desc: NavBar component

import Menus from "./Menus";
import Button from "./Button";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="h-[90px] px-10 bg-[#1b1f22] border-b sticky top-0 border-gray-700 flex justify-center">
      <div className="w-full max-w-7xl h-full flex lg:justify-between justify-center">
        <Logo />
        <div className="hidden w-full max-w-3xl lg:flex gap-4 justify-end">
          <Menus />
          <Button />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
