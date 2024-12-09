import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isLanguageOpen, setLanguageOpen] = useState(false);
    const [isNavOpen, setNavOpen] = useState(false); 
    const [language, setLanguage] = useState('Eng');
    const navigate = useNavigate();

    const toggleLanguageMenu = () => {
        setLanguageOpen(!isLanguageOpen);
    };

    const toggleNavMenu = () => {
        setNavOpen(!isNavOpen);
    };

    const handleLanguageSelect = (language) => {
        setLanguage(language);
        setLanguageOpen(false);
    };

    const handleHomePage = () => {
        navigate('/');
    };

    const handleNavLinkClick = () => {
        setNavOpen(false); // Close the nav menu when a NavLink is clicked
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header_main_icon" onClick={toggleNavMenu}>
                    <img src="/icons/humberg.svg" alt="Menu" />
                </div>
                <div className="header_main_icon">
                    <img src="/icons/main.svg" alt="Logo" />
                </div>
                <div className="header-part logo" onClick={handleHomePage}>LOGO</div>
                <div className="header_icon">
                    <img src="/icons/search.svg" alt="Search" />
                    <img src="/icons/like.svg" alt="Like" />
                    <img src="/icons/cart.svg" alt="Cart" />
                    <img src="/icons/person.svg" alt="Person" className="desktop-only" />
                    <div className="language-selector desktop-only" onClick={toggleLanguageMenu}>
                        {language} <img style={{ paddingInline: 5 }} src="/icons/downaerrow.svg" alt="Arrow" />
                    </div>
                    {isLanguageOpen && (
                        <div className="language-menu">
                            <ul>
                                <li onClick={() => handleLanguageSelect('Eng')}>English</li>
                                <li onClick={() => handleLanguageSelect('Hin')}>Hindi</li>
                                <li onClick={() => handleLanguageSelect('Guj')}>Gujarati</li>
                                <li onClick={() => handleLanguageSelect('Spa')}>Spanish</li>
                                <li onClick={() => handleLanguageSelect('Fre')}>French</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
                <ul className="nav-list">
                    <li>
                        <NavLink className="nav-item" to="/shop" onClick={handleNavLinkClick}>SHOP</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/skills" onClick={handleNavLinkClick}>SKILLS</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/stories" onClick={handleNavLinkClick}>STORIES</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/about" onClick={handleNavLinkClick}>ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-item" to="/contact" onClick={handleNavLinkClick}>CONTACT US</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
