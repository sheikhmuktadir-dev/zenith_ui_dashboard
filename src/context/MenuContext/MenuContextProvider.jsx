import { useState, useMemo, useRef, useEffect } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuContextProvider({ children }) {
  const [menuToggle, setMenuToggle] = useState(false);
  const ref = useRef();

  const menuHandler = () => {
    setMenuToggle((prev) => !prev);
  };

  useEffect(() => {
    if (!menuToggle) return;

    const outsideCloseHandler = (e) => {
      if (window.innerWidth < 1023.98) {
        if (ref.current && !ref.current.contains(e.target)) {
          setMenuToggle(false);
        }
      }
    };

    document.addEventListener("mousedown", outsideCloseHandler);

    return () => {
      document.removeEventListener("mousedown", outsideCloseHandler);
    };
  }, [menuToggle]);

  const value = useMemo(() => {
    return { menuToggle, menuHandler, setMenuToggle, ref };
  }, [menuToggle]);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
