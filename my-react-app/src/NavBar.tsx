import React from "react";

interface NavBarProps {
    currentPage: string;
    onNavigate: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage, onNavigate }) => {
    return (
        <nav>
            <button 
                onClick={() => onNavigate("home")} 
                className={currentPage === "home" ? "active" : ""}
            >
                Hem
            </button>
            <button 
                onClick={() => onNavigate("about")} 
                className={currentPage === "about" ? "active" : ""}
            >
                Om
            </button>
        </nav>
    );
};

export default NavBar;
