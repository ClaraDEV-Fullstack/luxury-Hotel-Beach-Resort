import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css'; // Custom CSS for additional styling

export function AboutUs() {
    const navigate = useNavigate();

    return (
        <section className="about-us-section py-20 bg-gradient-to-b from-blue-50 to-white">
            {/* Container */}
            <div className="about-us-container mx-auto px-4 max-w-7xl">
                {/* Section Title */}
                <motion.h2
                    className="about-us-title text-5xl font-bold text-center text-gray-800 mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Azure Shores Resort
                </motion.h2>

                {/* Content Grid */}
                <div className="about-us-grid grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Description */}
                    <motion.div
                        className="about-us-description space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="about-us-subtitle text-3xl font-semibold text-gray-800">
                            Welcome to Azure Shores Resort
                        </h3>
                        <p className="about-us-text text-gray-600 leading-relaxed text-lg">
                            Nestled along pristine beaches and surrounded by lush tropical landscapes, Azure Shores Resort offers a sanctuary of comfort and elegance. Whether you're here for a romantic getaway, a family vacation, or a corporate retreat, our resort promises an unforgettable experience.
                        </p>
                        <p className="about-us-text text-gray-600 leading-relaxed text-lg">
                            Our mission is simple yet profound: to redefine hospitality by blending modern amenities with timeless charm. From luxurious accommodations to world-class dining and activities, every detail is designed to ensure your stay is nothing short of extraordinary.
                        </p>
                        <div className="about-us-actions flex space-x-8">
                            {/* Explore Rooms Button */}
                            <motion.div
                                className="about-us-action flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/rooms')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                                <span className="text-xl">Explore Rooms</span>
                            </motion.div>

                            {/* Contact Us Button */}
                            <motion.div
                                className="about-us-action flex items-center space-x-3 text-green-600 hover:text-green-700 transition cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-xl">Contact Us</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Image Gallery */}
                    <motion.div
                        className="about-us-images grid grid-cols-2 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.img
                            src="https://img.freepik.com/premium-vector/beach-house-logo-design-template_644408-300.jpg"
                            alt="Azure Shores Resort"
                            className="about-us-image w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.02 }}
                            loading="lazy"
                        />
                        <motion.img
                            src="/images/beachfront-villa.jpg"
                            alt="Azure Shores Resort"
                            className="about-us-image w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.02 }}
                            loading="lazy"
                        />
                    </motion.div>
                </div>

                {/* Vision & Mission Section */}
                <div className="about-us-vision-mission mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Vision */}
                    <motion.div
                        className="about-us-vision space-y-6 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h3 className="about-us-vision-title text-3xl font-semibold text-gray-800">Our Vision</h3>
                        <p className="about-us-vision-text text-gray-600 leading-relaxed text-lg">
                            To create a sanctuary of comfort and elegance where guests can reconnect with nature, rejuvenate their spirits, and craft memories that last a lifetime.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        className="about-us-mission space-y-6 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <h3 className="about-us-mission-title text-3xl font-semibold text-gray-800">Our Mission</h3>
                        <p className="about-us-mission-text text-gray-600 leading-relaxed text-lg">
                            Delivering personalized, warm, and professional service tailored to each guest's unique needs. We prioritize eco-friendly practices and curate bespoke experiences to exceed expectations.
                        </p>
                    </motion.div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="about-us-cta flex justify-center space-x-8 mt-20">
                    {/* Explore Rooms Button */}
                    <motion.button
                        className="about-us-cta-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/offers')}
                    >
                        See Special Rooms
                    </motion.button>

                    {/* Contact Us Button */}
                    <motion.button
                        className="about-us-cta-button bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                    >
                        Contact Us
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;