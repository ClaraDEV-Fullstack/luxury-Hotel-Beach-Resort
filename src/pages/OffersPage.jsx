import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OffersPage.css'; // Import a CSS file for styling

export function OffersPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate login state
    const navigate = useNavigate();

    // Sample offers data
    const offers = [
        {
            id: 1,
            title: 'Weekend Getaway',
            description:
                'Escape the hustle and bustle with our weekend package. Enjoy a 2-night stay, complimentary breakfast, and access to our spa facilities.',
            price: '$199',
            image: '/images/luxury-suite.jpg', // Replace with your image path
        },
        {
            id: 5,
            title: 'Family Vacation Package',
            description:
                'Perfect for families! Includes a 3-night stay, free meals for kids, and access to our kids’ club and pool.',
            price: '$499',
            image: '/images/city-apartment.jpg', // Replace with your image path
        },
        {
            id: 2,
            title: 'Romantic Escape',
            description:
                'Celebrate love with a romantic getaway. Includes a candlelit dinner, champagne, and a couples’ massage.',
            price: '$299',
            image: '/images/cozy-bungalow.jpg', // Replace with your image path
        },
        {
            id: 12,
            title: 'Seasonal Discount',
            description:
                'Book now and save 20% on your stay! Valid for stays during the off-season. Limited availability.',
            price: '20% Off',
            image: '/images/desert-oasis.jpg', // Replace with your image path
        },
    ];

    // Handle "Book Now" button click
    const handleBookNow = () => {
        if (isLoggedIn) {
            navigate('/booking'); // Redirect to booking page
        } else {
            navigate('/signup'); // Redirect to signup page
        }
    };

    return (
        <div className="offers-page">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                </div>
            </div>

            {/* Offers Grid */}
            <div className="offers-container">
                <div className="offers-grid">
                    {offers.map((offer) => (
                        <div key={offer.id} className="offer-card">
                            {/* Offer Image */}
                            <div
                                className="offer-image"
                                style={{ backgroundImage: `url(${offer.image})` }}
                            >
                                {/* Overlay with Zoom Animation */}
                                <div className="offer-overlay">
                                    <p className="offer-overlay-text">{offer.title}</p>
                                </div>
                            </div>
                            {/* Offer Details */}
                            <div className="offer-details">
                                <h2 className="offer-title">{offer.title}</h2>
                                <p className="offer-description">{offer.description}</p>
                                <p className="offer-price">{offer.price}</p>
                                <button onClick={handleBookNow} className="offer-button">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}