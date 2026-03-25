import { useEffect, useRef, useState } from "react";

export default function useToggleCollapse() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const ref = useRef();

  const toggleCollapseHandler = () => {
    setToggleCollapse((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setToggleCollapse(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { toggleCollapse, toggleCollapseHandler, ref, setToggleCollapse };
}
