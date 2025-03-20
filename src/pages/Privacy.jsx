import React from 'react';

export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-12 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4 text-gray-400">
                At Azure Shores Resort, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
            <p className="mb-4 text-gray-400">
                - Personal details such as name, email address, phone number, and payment information.<br />
                - Usage data, including IP addresses, browser type, and pages visited.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Data</h2>
            <p className="mb-4 text-gray-400">
                - To process bookings and reservations.<br />
                - To send updates, newsletters, and promotional offers (if opted in).<br />
                - To improve our services and user experience.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. Data Sharing</h2>
            <p className="mb-4 text-gray-400">
                We may share your data with trusted third-party service providers (e.g., payment processors) to fulfill your requests. We do not sell or rent your personal information to advertisers or other third parties.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">4. Cookies</h2>
            <p className="mb-4 text-gray-400">
                Our website uses cookies to enhance your browsing experience. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">5. Security Measures</h2>
            <p className="mb-4 text-gray-400">
                We implement industry-standard security measures to protect your data from unauthorized access, loss, or misuse.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">6. Contact Us</h2>
            <p className="mb-4 text-gray-400">
                For any privacy-related inquiries, please contact us at:
                <br />
                Email: <a href="mailto:info@azureshores.com" className="text-blue-400 hover:text-blue-500 transition-colors">info@azureshores.com</a>
                <br />
                Phone: +237 683-013-896
            </p>
        </div>
    );
}