import { Link, useLocation } from "react-router-dom";
import Style from "./breadcrumb.module.css";
import { sidebarData } from "../../data/Links";

export default function Breadcrumb() {
  const location = useLocation();

  const currentPage =
    sidebarData.find((item) => location.pathname === item.path) ||
    sidebarData[0];

  return (
    <div className={Style.breadcrumb}>
      <div className={Style.breadcrumbFlex}>
        <span className={Style.breadcrumbPara}>Overview</span>
        <span className={Style.breadcrumbPara}>/</span>

        <Link to={currentPage.path} className={Style.breadcrumbPara}>
          {currentPage.name}
        </Link>
      </div>

      <h2>{currentPage.name}</h2>
    </div>
  );
}
