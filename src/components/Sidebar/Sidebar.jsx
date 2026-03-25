import { Link, NavLink } from "react-router-dom";
import Style from "./sidebar.module.css";
import { sidebarData } from "../../data/Links";
import Upgrade from "../Upgrade/Upgrade";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext/MenuContext";
import { IoMdClose } from "react-icons/io";

export default function Sidebar() {
  const { menuToggle, setMenuToggle } = useContext(MenuContext);

  // Helper to close ONLY on mobile and tab
  const handleNavLinkClick = () => {
    if (window.innerWidth < 1023.98) {
      setMenuToggle(false);
    }
  };

  return (
    <div
      className={`${Style.sidebar} ${menuToggle ? Style.sidebarCollapse : ""}`}
    >
      <button
        className={Style.sidebarClose}
        onClick={() => setMenuToggle(false)}
      >
        <IoMdClose />
      </button>

      <div className={Style.sidebarLogoArea}>
        <Link to="/" className={Style.sidebarLogo}>
          <div className={Style.logoShort}>Zen</div>

          <div className={Style.logoFull}>
            Zenith<span>UI</span>
          </div>
        </Link>
      </div>

      <div className={Style.siebarContextArea}>
        <ul className={Style.sidebarList}>
          {sidebarData?.map((item, i) => {
            const Icon = item.icon;

            return (
              <li className={Style.sidebarItem} key={item.name || i}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    `${Style.sidebarLink} ${isActive ? Style.sidebarLinkActive : ""}`
                  }
                >
                  <div className={Style.sidebarIcon}>
                    <Icon />
                  </div>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Upgrade />
      </div>
    </div>
  );
}
