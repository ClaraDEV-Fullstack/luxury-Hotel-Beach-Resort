import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
    const navigate = useNavigate();
    const location = useLocation(); // Get current path

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Simulate login/logout functionality
    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/profile'); // Redirect to profile after login
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/login'); // Redirect to login after logout
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    <img
                        src="https://img.freepik.com/premium-vector/beach-house-logo-design-template_644408-300.jpg"
                        alt="Azure Retreats Logo"
                        className="logo-image"
                    />
                </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>

            {/* Nav Links */}
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/rooms"
                    className={`nav-link ${location.pathname === '/rooms' ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Rooms
                </Link>
                <Link
                    to="/offers"
                    className={`nav-link ${location.pathname === '/offers' ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Offers
                </Link>
                <Link
                    to="/contact"
                    className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contact
                </Link>
                {isLoggedIn ? (
                    <>
                        <Link
                            to="/profile"
                            className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Profile
                        </Link>
                        <button
                            className="nav-link logout-button"
                            onClick={handleLogout}
                            aria-label="Logout"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/signup"
                            className={`nav-link ${location.pathname === '/signup' ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                        <button
                            className="nav-link login-button"
                            onClick={handleLogin}
                            aria-label="Login"
                        >
                            Login
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}