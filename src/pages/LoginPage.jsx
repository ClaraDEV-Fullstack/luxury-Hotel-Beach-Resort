import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For password visibility toggle
import "./LoginPage.css"; // Import the CSS file

export function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, formData.email, formData.password);

            // Save the user's email to local storage
            localStorage.setItem("userEmail", formData.email);
        } catch (err) {
            setError(err.message || "Failed to log in.");
        }
    };

    // Listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Redirect to the profile page after successful login
                navigate("/profile");
            }
        });

        // Cleanup the listener
        return () => unsubscribe();
    }, [navigate]);

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Login</h2>
                {error && <p className="login-error">{error}</p>}
                <form onSubmit={handleSubmit} className="login-form">
                    {/* Email Input */}
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">
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
                            className="input-field"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="input-group">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="input-field"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                        >
                            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>

                {/* Link to Signup Page */}
                <p className="signup-link">
                    Don't have an account?{" "}
                    <a href="/signup" className="signup-link-text">
                        Sign up here
                    </a>
                </p>
            </div>
        </div>
    );
}