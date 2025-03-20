import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // For password visibility toggle
import "./SignupPage.css"; // Import the CSS file

export function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
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

        // Basic form validation
        if (!formData.username || !formData.email || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        // Check if the email or username already exists in local storage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        const isEmailTaken = existingUsers.some((user) => user.email === formData.email);
        const isUsernameTaken = existingUsers.some((user) => user.username === formData.username);

        if (isEmailTaken) {
            setError("This email is already registered.");
            return;
        }

        if (isUsernameTaken) {
            setError("This username is already taken.");
            return;
        }

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Update the user's profile with the username
            await updateProfile(userCredential.user, { displayName: formData.username });

            // Save the user's information to local storage
            const newUser = {
                email: formData.email,
                username: formData.username,
            };
            const updatedUsers = [...existingUsers, newUser];
            localStorage.setItem("users", JSON.stringify(updatedUsers));

            // Save the username to local storage for session management
            localStorage.setItem("username", formData.username);

            // Redirect to the login page after successful signup
            console.log("Signup successful! Redirecting to login page..."); // Debugging
            navigate("/login"); // Ensure this line is reached
        } catch (err) {
            console.error("Signup error:", err); // Debugging
            let errorMessage = "Failed to create account. Please try again.";
            switch (err.code) {
                case "auth/email-already-in-use":
                    errorMessage = "This email is already registered.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "Please enter a valid email address.";
                    break;
                case "auth/weak-password":
                    errorMessage = "Password must be at least 6 characters long.";
                    break;
                default:
                    errorMessage = err.message || "An unexpected error occurred.";
            }
            setError(errorMessage);
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2 className="signup-title">Create an Account</h2>
                {error && <p className="signup-error">{error}</p>}
                <form onSubmit={handleSubmit} className="signup-form">
                    {/* Username Input */}
                    <div className="input-group">
                        <label htmlFor="username" className="input-label">
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
                            className="input-field"
                        />
                    </div>

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
                            minLength={6}
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
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </form>

                {/* Link to Login Page */}
                <p className="login-link">
                    Already have an account?{" "}
                    <a href="/login" className="login-link-text">
                        Log in here
                    </a>
                </p>
            </div>
        </div>
    );
}