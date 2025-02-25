import { useContext } from "react";
import ThemeContext from "../contexts/theme";

function ToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme}>
            <img
                src={theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
                alt="change theme color"
            />
        </button>
    );
}

export default ToggleButton;
