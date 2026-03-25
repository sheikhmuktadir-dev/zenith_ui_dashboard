import { useContext } from "react";
import Style from "./menutoggle.module.css";
import { SlMenu } from "react-icons/sl";
import { MenuContext } from "../../context/MenuContext/MenuContext";

export default function MenuToggle() {
  const { menuHandler } = useContext(MenuContext);
  return (
    <button className={Style.menuToggle} onClick={menuHandler}>
      <SlMenu />
    </button>
  );
}
