import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaStar,
    FaMapMarkerAlt,
    FaWifi,
    FaCoffee,
    FaTv,
    FaShower,
    FaUtensils,
} from 'react-icons/fa';
import './RoomDetailPage.css';

export function RoomDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the room ID from the URL
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch room details from the static JSON file
    useEffect(() => {
        fetch('/db.json')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch room details');
                return response.json();
            })
            .then((data) => {
                const room = data.rooms.find((r) => r.id === id); // Find the room by ID (string comparison)
                if (room) {
                    setRoom(room);
                } else {
                    setError('Room not found');
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="loading">Loading room details...</p>;
    }

    if (error) {
        return <p className="error">Error: {error}</p>;
    }

    if (!room) {
        return <p className="error">Room not found.</p>;
    }

    return (
        <motion.div
            className="room-detail-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Back Button */}
            <motion.div
                className="back-button"
                onClick={() => navigate('/rooms')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaArrowLeft size={18} />
                <span>Back to Rooms</span>
            </motion.div>

            {/* Room Image Gallery */}
            <motion.div
                className="image-gallery"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <img src={room.image} alt={room.title} className="main-image" />
                <div className="thumbnail-gallery">
                    {room.images?.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            alt={`Room ${index + 1}`}
                            className="thumbnail"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* Room Title */}
            <motion.h1
                className="room-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {room.title}
            </motion.h1>

            {/* Room Description */}
            <motion.p
                className="room-description"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                Welcome to the <span className="highlight">{room.title}</span>, a luxurious and spacious retreat designed for comfort and relaxation. This room features <span className="highlight">{room.size}m²</span> of elegantly furnished space, perfect for up to <span className="highlight">{room.maxGuests} guests</span>. Enjoy modern amenities such as <span className="highlight">free Wi-Fi</span>, a <span className="highlight">private bathroom</span>, a <span className="highlight">kitchenette</span>, and a <span className="highlight">smart TV</span>. Whether you're here for business or leisure, our room offers everything you need for a memorable stay.
            </motion.p>

            {/* Info Section */}
            <motion.div
                className="info-section"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <h2>Room Information</h2>
                <div className="info-grid">
                    <div className="info-item">
                        <span className="info-label">Price:</span>
                        <span className="info-value">${room.price}/night</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Size:</span>
                        <span className="info-value">{room.size}m²</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Max Capacity:</span>
                        <span className="info-value">{room.maxGuests} guests</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Pets Allowed:</span>
                        <span className="info-value">{room.petsAllowed ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Free Breakfast:</span>
                        <span className="info-value">{room.freeBreakfast ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            </motion.div>

            {/* Amenities and Rating Sections */}
            <motion.div
                className="amenities-rating-container"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <div className="extra-section">
                    <h2>Amenities</h2>
                    <ul className="extra-list">
                        {room.amenities?.map((amenity, index) => (
                            <motion.li
                                key={index}
                                className="extra-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {amenity === 'Wi-Fi' && <FaWifi size={16} />}
                                {amenity === 'Coffee' && <FaCoffee size={16} />}
                                {amenity === 'TV' && <FaTv size={16} />}
                                {amenity === 'Shower' && <FaShower size={16} />}
                                {amenity === 'Kitchenette' && <FaUtensils size={16} />}
                                <span>{amenity}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="rating-section">
                    <h2>Rating & Reviews</h2>
                    <div className="rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                size={20}
                                color={i < (room.rating || 0) ? '#FFD700' : '#D3D3D3'}
                            />
                        ))}
                        <span>{room.rating || 0} ({room.reviews?.length || 0} reviews)</span>
                    </div>
                    <div className="reviews">
                        {(room.reviews || []).map((review, index) => (
                            <motion.div
                                key={index}
                                className="review"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                            >
                                <h3>{review.name}</h3>
                                <p>{review.comment}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
                className="map-section"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <h2>Location</h2>
                <div className="map">
                    <iframe
                        title="Room Location"
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${room.location.lat}!2d${room.location.lng}!3d${room.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA3LjkiTiAxMTjCsDE0JzM3LjQiVw!5e0!3m2!1sen!2sus!4v1633023222534!5m2!1sen!2sus`}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </motion.div>

            {/* Booking Button */}
            <motion.div
                className="booking-section"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
            >
                <button
                    className="booking-button"
                    onClick={() => navigate(`/booking?roomId=${room.id}`)} // Redirect to BookingPage with roomId
                >
                    Book Now
                </button>
            </motion.div>
        </motion.div>
    );
}