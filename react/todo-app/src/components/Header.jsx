import PropTypes from "prop-types";

function Header({ theme, toggleTheme }) {
    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-white font-bold text-4xl line-through ">TODO</h1>
            <button onClick={toggleTheme} className="btn btn-circle btn-ghost hover:bg-transparent">
                <img
                    src={theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
                    alt="Change theme color"
                    className="w-6 h-6"
                />
            </button>
        </header>
    );
}
Header.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};

export default Header;
