import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaDownload, FaCheckCircle, FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './BookingConfirmationPage.css';

export function BookingConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const booking = location.state?.booking;

    // Extract the username from the booking details (or use a fallback if not available)
    const username = booking?.guestName?.split(' ')[0] || 'Guest';

    // State for payment form
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    // State for showing the success modal
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // State for showing the spinner
    const [isProcessing, setIsProcessing] = useState(false);

    // State for showing the help modal
    const [showHelpModal, setShowHelpModal] = useState(false);

    if (!booking) {
        return <p className="text-center text-red-500 text-lg font-medium">Invalid booking details.</p>;
    }

    // Handle payment form changes
    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    // Handle payment submission
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        // Simulate payment processing
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setShowSuccessModal(true);
        }, 2000); // Simulate a 2-second delay
    };

    // Handle closing the success modal and redirect to HomePage
    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate('/'); // Redirect to HomePage
    };

    // Handle opening the help modal
    const handleContactSupport = () => {
        setShowHelpModal(true);
    };

    // Handle closing the help modal
    const handleCloseHelpModal = () => {
        setShowHelpModal(false);
    };

    return (
        <div className="BookingConfirmationPage">
            {/* Hero Section */}
            <section
                className="hero-section"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, // Replace with your image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-overlay"></div>
                <motion.div
                    className="hero-content"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >

                    <p className="hero-subtitle font-weight= bolder">
                        You've successfully reached the booking confirmation page. Here, you can review your booking
                        details, complete your payment, and download your confirmation.
                    </p>
                </motion.div>
            </section>

            {/* Container */}
            <div className="container pt-20">
                <h1 className="text-4xl font-bold mb-8 text-center">Booking Confirmed!</h1>

                {/* Booking Summary */}
                <motion.div
                    className="bg-white rounded-lg shadow-lg p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center">
                        <FaCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">Thank you for your booking!</h2>
                        <p className="text-gray-600 mb-6">Here are your booking details:</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span className="font-medium">Booking ID:</span>
                            <span>{booking.bookingId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Room:</span>
                            <span>{booking.roomTitle}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Guest Name:</span>
                            <span>{booking.guestName}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>{booking.email}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Phone:</span>
                            <span>{booking.phone}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Check-In Date:</span>
                            <span>{booking.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Check-Out Date:</span>
                            <span>{booking.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Total Price:</span>
                            <span>${booking.totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Payment Form */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Complete Payment</h3>
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                        {/* Payment form fields */}
                        <div>
                            <label className="block mb-2">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                value={paymentDetails.cardNumber}
                                onChange={handlePaymentChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">Expiry Date</label>
                                <input
                                    type="month"
                                    name="expiryDate"
                                    value={paymentDetails.expiryDate}
                                    onChange={handlePaymentChange}
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    placeholder="123"
                                    value={paymentDetails.cvv}
                                    onChange={handlePaymentChange}
                                    required
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
                        >
                            {isProcessing ? (
                                <div className="spinner"></div> // Spinner while processing
                            ) : (
                                'Pay Now'
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* Help Assistant Section */}
                <motion.div
                    className="mt-8 bg-blue-50 rounded-lg shadow-lg p-8 border border-blue-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center">
                        <FaQuestionCircle size={48} className="text-blue-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                        <p className="text-gray-600 mb-6">
                            If you encounter any issues during the payment process or have questions about your booking,
                            our support team is here to help.
                        </p>
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition flex items-center justify-center"
                            onClick={handleContactSupport}
                        >
                            <FaEnvelope size={20} className="mr-2" />
                            <span>Contact Support</span>
                        </button>
                    </div>
                </motion.div>

                {/* Download Confirmation Button */}
                <motion.button
                    className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const content = `
                Booking Confirmation
                ------------------------
                Booking ID: ${booking.bookingId}
                Room: ${booking.roomTitle}
                Guest Name: ${booking.guestName}
                Email: ${booking.email}
                Phone: ${booking.phone}
                Check-In Date: ${booking.checkIn}
                Check-Out Date: ${booking.checkOut}
                Total Price: $${booking.totalPrice.toFixed(2)}
              `;
                        const blob = new Blob([content], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `booking_${booking.bookingId}.txt`;
                        link.click();
                    }}
                >
                    <FaDownload size={20} className="inline-block mr-2" />
                    <span>Download Confirmation</span>
                </motion.button>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">Payment Successful!</h2>
                        <p className="text-gray-600 mb-4">
                            Thank you for completing your booking. We are excited to welcome you and ensure you have an
                            unforgettable experience.
                        </p>
                        <p className="text-gray-600 mb-6">
                            A confirmation email has been sent to{' '}
                            <span className="highlight-email">{booking.email}</span> with all the details.
                        </p>
                        <button
                            onClick={handleCloseSuccessModal}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Help Modal */}
            {showHelpModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaEnvelope size={48} className="text-blue-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-4">Message Received!</h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for reaching out. Our support team will get back to you as soon as possible.
                        </p>
                        <button
                            onClick={handleCloseHelpModal}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}