import Breadcrumb from "../Breadcrumb/Breadcrumb";
import MenuToggle from "../MenuToggle/MenuToggle";
import ProfileToggle from "../ProfileToggle/ProfileToggle";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Style from "./navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { MenuContext } from "../../context/MenuContext/MenuContext";
import { useContext } from "react";

export default function Navbar() {
  const { menuToggle } = useContext(MenuContext);
  return (
    <div className={`${Style.navbar} ${menuToggle ? Style.navbarExpand : ""}`}>
      <Breadcrumb />

      <div className={Style.navbarRightBox}>
        <div className={Style.navSearchArea}>
          <span className={Style.navSearchIcon}>
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className={Style.navSearchBox}
          />
        </div>
        <MenuToggle />
        <ThemeToggle />
        <ProfileToggle />
      </div>
    </div>
  );
}
