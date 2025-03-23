import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file
import AboutUs from '../components/AboutUs.jsx'; // Import the AboutUs component
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'; // Icons for services

export function HomePage() {
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]); // State for rooms
    const [loadingRooms, setLoadingRooms] = useState(true); // Loading state for rooms
    const [errorRooms, setErrorRooms] = useState(null); // Error state for rooms

    // Fetch rooms from db.json or local storage
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if data is already stored in local storage
                const storedRooms = localStorage.getItem('rooms');

                if (storedRooms) {
                    setRooms(JSON.parse(storedRooms));
                    setLoadingRooms(false);
                    return;
                }

                // Fetch data from db.json
                const response = await fetch('/db.json'); // Fetch from the public directory
                if (!response.ok) throw new Error('Failed to fetch data');
                const data = await response.json();

                // Set rooms
                if (data.rooms && Array.isArray(data.rooms)) {
                    const featuredRooms = data.rooms.slice(0, 3); // Display only the first 3 rooms as featured
                    setRooms(featuredRooms);
                    localStorage.setItem('rooms', JSON.stringify(featuredRooms)); // Save to local storage
                } else {
                    setErrorRooms('Rooms not found in db.json');
                }

                setLoadingRooms(false);
            } catch (err) {
                setErrorRooms(err.message);
                setLoadingRooms(false);
            }
        };

        fetchData(); // Call the fetchData function
    }, []);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section" style={{ backgroundImage: `url('https://images.wsj.net/im-931182/?width=1280&height=657')` }}>
                <div className="hero-overlay" />
                <motion.div
                    className="hero-content"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="hero-title">Find Your Perfect Stay</h1>
                    <p className="hero-subtitle">Experience luxury and comfort like never before.</p>
                    <div className="hero-buttons">
                        <button
                            onClick={() => navigate('/rooms')}
                            className="hero-button explore-btn"
                        >
                            Explore Now
                        </button>
                        <button
                            onClick={() => navigate('/offers')}
                            className="hero-button book-now-btn"
                        >
                            Book Now
                        </button>
                    </div>
                </motion.div>
            </div>


            {/* Services Section */}
            <section className="services-section">
                <div className="container">
                    <h2 className="services-title">Our Services</h2>
                    <div className="services-grid">
                        {/* Free Cocktails */}
                        <div className="service-card">
                            <FaCocktail size={48} className="service-icon" />
                            <h3 className="service-title">Free Cocktails</h3>
                            <p className="service-description">
                                Enjoy complimentary handcrafted cocktails at our beachside bar, perfect for relaxing after a day in the sun.
                            </p>
                        </div>

                        {/* Endless Hiking */}
                        <div className="service-card">
                            <FaHiking size={48} className="service-icon" />
                            <h3 className="service-title">Endless Hiking</h3>
                            <p className="service-description">
                                Explore scenic trails and breathtaking views with our guided hiking tours, tailored for all skill levels.
                            </p>
                        </div>

                        {/* Free Shuttle */}
                        <div className="service-card">
                            <FaShuttleVan size={48} className="service-icon" />
                            <h3 className="service-title">Free Shuttle</h3>
                            <p className="service-description">
                                Travel hassle-free with our complimentary shuttle service, connecting you to nearby attractions and the airport.
                            </p>
                        </div>

                        {/* Strongest Beer */}
                        <div className="service-card">
                            <FaBeer size={48} className="service-icon" />
                            <h3 className="service-title">Strongest Beer</h3>
                            <p className="service-description">
                                Savor our exclusive selection of craft beers, brewed locally and served ice-cold at our beachfront pub.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms */}
            <section className="featured-rooms">
                <div className="container">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="featured-header"
                    >
                        <h2 className="featured-title">Featured Accommodations</h2>
                        <p className="featured-subtitle">
                            Discover our collection of luxurious rooms and suites, each designed to provide the ultimate comfort and relaxation during your stay.
                        </p>
                    </motion.div>

                    {loadingRooms && <p className="loading-message">Loading rooms...</p>}
                    {errorRooms && <p className="error-message">{errorRooms}</p>}

                    {!loadingRooms && !errorRooms && (
                        <div className="room-grid">
                            {rooms.map((room) => (
                                <motion.div
                                    key={room.id}
                                    className="room-card"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: room.id * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="room-image-container">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="room-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="room-details">
                                        <h3 className="room-name">{room.title}</h3>
                                        <p className="room-description">{room.description}</p>
                                        <p className="room-price">From ${room.price}/night</p>
                                        <button
                                            onClick={() => navigate(`/booking?roomId=${room.id}`)}
                                            className="book-button"
                                            aria-label={`Book ${room.title}`}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us-section">
                <div className="container">
                    <AboutUs /> {/* Render the AboutUs component */}
                </div>
            </section>
        </div>
    );
}