import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Style from "./dashboardlayout.module.css";
import { MenuContext } from "../context/MenuContext/MenuContext";
import { useContext, useEffect } from "react";
import Footer from "../components/Footer/Footer";

export default function DashboardLayout() {
  const { menuToggle } = useContext(MenuContext);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className={Style.dashboard}>
      <Sidebar />
      <div
        className={`${Style.dashboardContentArea} ${menuToggle ? Style.dashboardContentAreaExpand : ""}`}
      >
        <Navbar />
        <main className={Style.dashboardContentMain}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
