import { Link, useNavigate } from "react-router-dom";
import Style from "./profiletoggle.module.css";
import profile from "/images/profile.webp";
import useToggleCollapse from "../../hooks/useToggleCollapse";
import { profileMenuData } from "../../data/Links";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export default function ProfileToggle() {
  const { toggleCollapse, toggleCollapseHandler, ref, setToggleCollapse } =
    useToggleCollapse();

  const navigate = useNavigate();

  const { logoutHandler } = useContext(AuthContext);

  const currentUser = JSON.parse(localStorage.getItem("zenithUI-currentUser"));

  return (
    <div className={Style.profileToggle} ref={ref}>
      <img
        src={profile}
        alt="profile image"
        onClick={toggleCollapseHandler}
        className={Style.profileImage}
        role="button"
        tabIndex={0}
      />
      <ul
        className={`${Style.profileBox} ${toggleCollapse ? Style.profileBoxShow : ""}`}
      >
        <li className={Style.profileName}>
          <span>Hey,</span>
          <span>{currentUser ? currentUser.firstName : "Guest"}</span>
        </li>
        {profileMenuData?.map((item, i) => {
          return (
            <li className={Style.profileItem} key={item.name || i}>
              <Link
                to={item.path}
                className={Style.profileLink}
                onClick={() => setToggleCollapse(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}

        {currentUser ? (
          <li className={Style.profileItem}>
            <div
              onClick={() => logoutHandler(navigate)}
              className={Style.profileLog}
            >
              Logout
            </div>
          </li>
        ) : (
          <li className={Style.profileItem}>
            <Link to="/login" className={Style.profileLog}>
              Log In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
