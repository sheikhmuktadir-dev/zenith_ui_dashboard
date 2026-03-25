import { useState, useMemo } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuContextProvider({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);

  const menuHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  const value = useMemo(() => {
    return { menuToggle, menuHandler, setMenuToggle };
  }, [menuToggle]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
