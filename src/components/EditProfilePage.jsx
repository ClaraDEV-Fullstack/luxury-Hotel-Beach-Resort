import React, { useState } from 'react';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function EditProfilePage() {
    const navigate = useNavigate();
    const user = auth.currentUser;
    const [formData, setFormData] = useState({
        username: user?.displayName || '',
        email: user?.email || '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Update the user's profile in Firebase
            await updateProfile(user, {
                displayName: formData.username,
            });

            // Optionally, update the email if changed
            if (formData.email !== user.email) {
                await user.updateEmail(formData.email);
            }

            // Save the updated username to local storage
            localStorage.setItem('username', formData.username);

            setSuccess(true);
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to update profile.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '2rem',
            }}
        >
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Edit Profile
            </h2>
            {success && (
                <p style={{ color: '#16a34a', marginBottom: '1rem' }}>
                    Profile updated successfully!
                </p>
            )}
            {error && (
                <p style={{ color: '#ef4444', marginBottom: '1rem' }}>{error}</p>
            )}
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                {/* Username Input */}
                <div style={{ position: 'relative' }}>
                    <label
                        htmlFor="username"
                        style={{
                            position: 'absolute',
                            top: '-0.5rem',
                            left: '1rem',
                            backgroundColor: '#fff',
                            padding: '0 0.5rem',
                            fontSize: '0.875rem',
                            color: '#374151',
                        }}
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '2px solid #d1d5db',
                            fontSize: '1rem',
                            color: '#1f2937',
                            width: '100%',
                        }}
                    />
                </div>

                {/* Email Input */}
                <div style={{ position: 'relative' }}>
                    <label
                        htmlFor="email"
                        style={{
                            position: 'absolute',
                            top: '-0.5rem',
                            left: '1rem',
                            backgroundColor: '#fff',
                            padding: '0 0.5rem',
                            fontSize: '0.875rem',
                            color: '#374151',
                        }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '2px solid #d1d5db',
                            fontSize: '1rem',
                            color: '#1f2937',
                            width: '100%',
                        }}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        padding: '1rem',
                        backgroundColor: '#3b82f6',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
                >
                    Save Changes
                </button>

                {/* Back to Profile Button */}
                <button
                    onClick={() => navigate('/profile')}
                    style={{
                        padding: '1rem',
                        backgroundColor: '#d1d5db',
                        color: '#1f2937',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#9ca3af')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#d1d5db')}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}