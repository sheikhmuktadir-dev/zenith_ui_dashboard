import { useContext } from "react";
import Style from "./themetoggle.module.css";
import { FaMoon } from "react-icons/fa6";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, themeHandler } = useContext(ThemeContext);
  return (
    <button className={Style.themeToggle} onClick={themeHandler}>
      {theme === "dark" ? <IoSunny /> : <FaMoon />}
    </button>
  );
}
