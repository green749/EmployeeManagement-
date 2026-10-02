import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (

        <nav className="navbar">
            <div className="two-ele">
                <span><i className="fa-solid fa-users icon"></i></span>
                <h1 >Employee Dashboard</h1>
            </div>
            <div className="two-ele">
                <p className="hide">Current theme: {theme}</p>
                
                <button className="secondary-button button-icon" onClick={toggleTheme}>
                    <i className="fa-solid fa-sun"></i>
                    change theme
                </button>
            </div>
        </nav>
    );
}

export default Navbar;