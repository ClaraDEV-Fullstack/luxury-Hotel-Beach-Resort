import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';
import { FaUtensils, FaCar, FaSpa } from 'react-icons/fa';
import { auth } from '../firebase'; // Import Firebase authentication
import './BookingPage.css';

export function BookingPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomId = queryParams.get('roomId'); // Get roomId from the URL
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        guestName: '',
        email: '',
        phone: '',
        specialRequests: '',
    });
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [user, setUser] = useState(null); // Track authenticated user

    const addons = [
        { id: 1, name: 'Breakfast', price: 15 },
        { id: 2, name: 'Airport Transfer', price: 30 },
        { id: 3, name: 'Spa Package', price: 50 },
    ];

    // Check if the user is authenticated
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser); // Set the authenticated user
            } else {
                navigate('/login'); // Redirect to login page if not authenticated
            }
        });

        return () => unsubscribe(); // Cleanup subscription
    }, [navigate]);

    // Fetch room details from the static JSON file
    useEffect(() => {
        fetch('/db.json')
            .then((response) => {
                if (!response.ok) throw new Error('Failed to fetch room details');
                return response.json();
            })
            .then((data) => {
                const room = data.rooms.find((r) => r.id === roomId); // Find the room by ID
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
    }, [roomId]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle add-ons selection
    const handleAddonSelection = (addon) => {
        if (selectedAddons.some((item) => item.id === addon.id)) {
            setSelectedAddons(selectedAddons.filter((item) => item.id !== addon.id));
        } else {
            setSelectedAddons([
                ...selectedAddons,
                { id: addon.id, name: addon.name, price: addon.price },
            ]);
        }
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        if (!room || !checkInDate || !checkOutDate) return 0;
        const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        const roomPrice = room.price * nights;
        const addonsPrice = selectedAddons.reduce((total, addon) => total + addon.price, 0);
        return roomPrice + addonsPrice;
    };

    // Handle booking submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields
        if (
            !formData.guestName ||
            !formData.email ||
            !formData.phone ||
            !checkInDate ||
            !checkOutDate
        ) {
            alert('Please fill out all required fields before proceeding.');
            return;
        }

        // Prepare booking data
        const bookingData = {
            bookingId: `AZR-${Math.floor(Math.random() * 100000)}`, // Generate a random booking ID
            roomId: room.id,
            roomTitle: room.title,
            guestName: formData.guestName,
            email: formData.email,
            phone: formData.phone,
            specialRequests: formData.specialRequests,
            checkIn: checkInDate.toISOString().split('T')[0],
            checkOut: checkOutDate.toISOString().split('T')[0],
            addons: selectedAddons, // This is now serializable
            totalPrice: calculateTotalPrice(),
        };

        // Save booking data to localStorage
        localStorage.setItem('bookingData', JSON.stringify(bookingData));

        // Redirect to the BookingConfirmationPage with booking data
        navigate('/booking-confirmation', { state: { booking: bookingData } });
    };

    // Handle check-in date change
    const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
        if (checkOutDate && date > checkOutDate) {
            // If the new check-in date is after the current check-out date, reset the check-out date
            setCheckOutDate(null);
        }
    };

    // Handle check-out date change
    const handleCheckOutDateChange = (date) => {
        if (checkInDate && date < checkInDate) {
            // If the new check-out date is before the current check-in date, do not allow it
            alert('Check-out date cannot be earlier than check-in date.');
            return;
        }
        setCheckOutDate(date);
    };

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
            className="booking-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Room Image */}
            <motion.div
                className="room-image-container"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <img src={room.image} alt={room.title} className="room-image" />
            </motion.div>

            {/* Booking Form */}
            <motion.div
                className="booking-form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <h1 className="booking-title">Book Your Stay</h1>

                {/* Guest Information */}
                <div className="form-group">
                    <label>Guest Name</label>
                    <input
                        type="text"
                        name="guestName"
                        value={formData.guestName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Special Requests</label>
                    <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                    />
                </div>

                {/* Date Selection */}
                <div className="form-group">
                    <label>Check-In Date</label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={handleCheckInDateChange}
                        minDate={new Date()}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Check-Out Date</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={handleCheckOutDateChange}
                        minDate={checkInDate || new Date()}
                        required
                    />
                </div>

                {/* Add-ons Selection */}
                <div className="addons-section">
                    <h3>Add-ons</h3>
                    <div className="addons-grid">
                        {addons.map((addon) => (
                            <motion.div
                                key={addon.id}
                                className={`addon-item ${
                                    selectedAddons.some((item) => item.id === addon.id) ? 'selected' : ''
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleAddonSelection(addon)}
                            >
                                {/* Render icons based on addon.id */}
                                {addon.id === 1 && <FaUtensils />}
                                {addon.id === 2 && <FaCar />}
                                {addon.id === 3 && <FaSpa />}
                                <span>{addon.name}</span>
                                <span>+${addon.price}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Total Price */}
                <div className="total-price">
                    <h3>Total Price</h3>
                    <p>${calculateTotalPrice().toFixed(2)}</p>
                </div>

                {/* Confirm Booking Button */}
                <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="confirm-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Confirm Booking
                </motion.button>
            </motion.div>
        </motion.div>
    );
}