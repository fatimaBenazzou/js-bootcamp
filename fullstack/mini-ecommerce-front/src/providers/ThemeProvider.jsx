import { useLocalStorage } from "@uidotdev/usehooks";
import { useEffect } from "react";
import ThemeContext from "../contexts/theme";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        setTheme(theme);
        document.documentElement.setAttribute("data-theme", theme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
