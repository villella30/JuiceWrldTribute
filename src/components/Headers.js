import React, { useState } from "react";
import "../styles/Headers.css";

export default function Headers() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="nav-bar">
            <a className="nav-img" href="#top">
                <img className="logo" src="/JuiceHeader.jpg" alt="JuiceWrld" />
            </a>

            {/* Botón de menú hamburguesa */}
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`icon-bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`icon-bar ${menuOpen ? "open" : ""}`}></div>
                <div className={`icon-bar ${menuOpen ? "open" : ""}`}></div>
            </div>

            {/* Links del menú */}
            <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                <a className="nav-text" href="#content">
                    <h2>Biografía</h2>
                </a>
                <a className="nav-text" href="#albums">
                    <h2>Discografía</h2>
                </a>
                <a className="nav-text" href="#songs">
                    <h2>Hits</h2>
                </a>
            </div>
        </div>
    );
}
