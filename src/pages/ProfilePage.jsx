import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaArrowRight, FaEdit, FaSave } from 'react-icons/fa';
import './ProfilePage.css'; // Import the CSS file

export function ProfilePage() {
    const navigate = useNavigate();
    const user = auth.currentUser;

    // State for profile information
    const [username, setUsername] = useState(localStorage.getItem('username') || 'Guest');
    const [isEditing, setIsEditing] = useState(false);
    const [tempUsername, setTempUsername] = useState(username);

    // Check if the user is logged in
    useEffect(() => {
        if (!user) {
            navigate('/login'); // Redirect to login if not logged in
        }
    }, [user, navigate]);

    // Handle editing profile
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Handle saving profile changes
    const handleSave = () => {
        setUsername(tempUsername);
        localStorage.setItem('username', tempUsername); // Save to local storage
        setIsEditing(false);
    };

    // Handle logout
    const handleLogout = () => {
        auth.signOut();
        localStorage.removeItem('username'); // Clear username from local storage
        navigate('/login');
    };

    if (!user) {
        return (
            <div className="not-logged-in">
                <p>
                    You are not logged in. Please{' '}
                    <a href="/signup" className="auth-link">
                        Sign Up
                    </a>{' '}
                    or{' '}
                    <a href="/login" className="auth-link">
                        Log In
                    </a>
                    .
                </p>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-container">
                <h2 className="profile-title">Welcome, {username}!</h2>

                <div className="profile-card">
                    {/* Avatar */}
                    <FaUserCircle size={100} className="profile-avatar" />

                    {/* Username */}
                    {isEditing ? (
                        <div className="edit-username">
                            <input
                                type="text"
                                value={tempUsername}
                                onChange={(e) => setTempUsername(e.target.value)}
                                className="username-input"
                            />
                            <button onClick={handleSave} className="save-button">
                                <FaSave size={16} />
                            </button>
                        </div>
                    ) : (
                        <p className="profile-username">
                            {username}{' '}
                            <button onClick={handleEdit} className="edit-button">
                                <FaEdit size={16} />
                            </button>
                        </p>
                    )}

                    {/* Email */}
                    <p className="profile-email">
                        <strong>Email:</strong> {user?.email}
                    </p>

                    {/* Buttons */}
                    <div className="profile-buttons">
                        <button onClick={() => navigate('/')} className="home-button">
                            Go to Home <FaArrowRight size={16} />
                            <span className="tooltip">Enjoy your stay and proceed with booking!</span>
                        </button>
                    </div>

                    {/* Logout Button */}
                    <button onClick={handleLogout} className="logout-button">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}