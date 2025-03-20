import React from 'react';

export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-12 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4 text-gray-400">
                Welcome to Azure Shores Resort ("we," "us," or "our"). By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4 text-gray-400">
                By accessing or using our website, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. Booking and Cancellation Policies</h2>
            <p className="mb-4 text-gray-400">
                - All bookings are subject to availability and confirmation.<br />
                - Cancellations must be made at least 48 hours before the scheduled check-in date to receive a refund.<br />
                - Modifications to bookings may incur additional charges.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. Limitation of Liability</h2>
            <p className="mb-4 text-gray-400">
                To the fullest extent permitted by law, Azure Shores Resort is not liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">4. Governing Law</h2>
            <p className="mb-4 text-gray-400">
                These Terms of Service shall be governed by and construed in accordance with the laws of [Your Country/Region]. Any disputes will be resolved exclusively in the courts of [Your Jurisdiction].
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">5. Contact Us</h2>
            <p className="mb-4 text-gray-400">
                If you have any questions or concerns about these Terms, please contact us at:
                <br />
                Email: <a href="mailto:info@azureshores.com" className="text-blue-400 hover:text-blue-500 transition-colors">info@azureshores.com</a>
                <br />
                Phone: +237 683-013-896
            </p>
        </div>
    );
}