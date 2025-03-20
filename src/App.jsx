import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import { Navbar } from './pages/Navbar'; // Import Navbar component
import './pages/Navbar.css'; // Update the import path to match the actual location
import {HomePage} from './pages/HomePage'; // Default import
import { RoomsPage } from './pages/RoomsPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { BookingPage } from './pages/BookingPage';
import { BookingConfirmationPage } from './pages/BookingConfirmationPage';
import { OffersPage } from './pages/OffersPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivateRoute } from './components/PrivateRoute'; // Import PrivateRoute
import { Footer } from './pages/Footer.jsx'; // Import Footer
import Terms from './pages/Terms.jsx';
import Privacy from './pages/Privacy.jsx';
import Security from './pages/Security.jsx';



function App() {
    return (
        <>
            {/* Navbar must be outside of <Routes> */}
            <Navbar />

            {/* Define all routes */}
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/rooms" element={<RoomsPage />} />
                <Route path="/rooms/:id" element={<RoomDetailPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/security" element={<Security />} />

                {/* Protected Routes */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />

                {/* Catch-all 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            {/* Footer must also be outside of <Routes> */}
            <Footer />
        </>
    );
}

export default App;