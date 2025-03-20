import React from 'react';

export default function Security() {
    return (
        <div className="container mx-auto px-4 py-12 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Security Terms</h1>
            <p className="mb-4 text-gray-400">
                At Azure Shores Resort, we prioritize the security of your data and transactions. Below are the measures we take to ensure your safety.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">1. Data Encryption</h2>
            <p className="mb-4 text-gray-400">
                All sensitive information (e.g., payment details) is encrypted during transmission using industry-standard protocols (SSL/TLS).
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. Account Security</h2>
            <p className="mb-4 text-gray-400">
                - Use strong, unique passwords for your account.<br />
                - Enable two-factor authentication (2FA) if available.<br />
                - Log out of shared devices after use.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. Fraud Prevention</h2>
            <p className="mb-4 text-gray-400">
                We monitor for suspicious activity and employ fraud detection systems to protect against unauthorized transactions.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">4. Reporting Issues</h2>
            <p className="mb-4 text-gray-400">
                If you encounter any security concerns or suspect unauthorized access, please contact us immediately:
                <br />
                Email: <a href="mailto:security@azureshores.com" className="text-blue-400 hover:text-blue-500 transition-colors">security@azureshores.com</a>
                <br />
                Phone: +237 683-013-896
            </p>
        </div>
    );
}