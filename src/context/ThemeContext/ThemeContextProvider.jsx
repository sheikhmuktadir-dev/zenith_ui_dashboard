import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("zenithTheme") || "light",
  );

  const themeHandler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("zenithTheme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
