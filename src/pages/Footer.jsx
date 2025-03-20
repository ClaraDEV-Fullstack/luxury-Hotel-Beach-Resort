import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

export function Footer() {
    return (
        <footer className="custom-footer bg-gray-900 text-white py-12">
            {/* Spacer to create space before the footer */}
            <div className="spacer h-24 bg-transparent"></div>

            {/* Inner Wrapper */}
            <div className="custom-footer-inner container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Column 1: Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="custom-footer-section space-y-4"
                >
                    <h3 className="custom-footer-title text-lg font-semibold text-blue-400">About Azure Shores</h3>
                    <p className="custom-footer-text text-sm text-gray-400 leading-relaxed">
                        Experience luxury redefined at our exclusive beachfront resort. Immerse yourself in unparalleled comfort and service.
                    </p>
                </motion.div>

                {/* Column 2: Quick Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="custom-footer-section space-y-4"
                >
                    <h3 className="custom-footer-title text-lg font-semibold text-blue-400">Quick Links</h3>
                    <ul className="custom-footer-list space-y-2 text-sm text-gray-400 leading-relaxed">
                        <li><a href="/" className="custom-footer-link hover:text-blue-400 transition-colors">Home</a></li>
                        <li><a href="/rooms" className="custom-footer-link hover:text-blue-400 transition-colors">Rooms</a></li>
                        <li><a href="/offers" className="custom-footer-link hover:text-blue-400 transition-colors">Offers</a></li>
                        <li><a href="/offers" className="custom-footer-link hover:text-blue-400 transition-colors">Contact</a></li>
                        <li><a href="/offers" className="custom-footer-link hover:text-blue-400 transition-colors">Signup</a></li>
                        <li><a href="/offers" className="custom-footer-link hover:text-blue-400 transition-colors">Login</a></li>

                    </ul>


                </motion.div>

                {/* Column 3: Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="custom-footer-section space-y-4"
                >
                    <h3 className="custom-footer-title text-lg font-semibold text-blue-400">Contact Us</h3>
                    <ul className="custom-footer-list space-y-2 text-sm text-gray-400 leading-relaxed">
                        <li>📍 123 Paradise Beach Road</li>
                        <li>📞 +237 683-013-896</li>
                        <li>📧 info@azureshores.com</li>
                    </ul>
                </motion.div>

                {/* Column 4: Newsletter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="custom-footer-section space-y-4"
                >
                    <h3 className="custom-footer-title text-lg font-semibold text-blue-400">Stay Updated</h3>
                    <p className="custom-footer-text text-sm text-gray-400 mb-4 leading-relaxed">
                        Subscribe to our newsletter for exclusive offers and updates.
                    </p>
                    <form className="custom-footer-form space-y-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="custom-footer-input w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                        />
                        <button
                            type="submit"
                            className="custom-footer-button w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors text-sm"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Copyright Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="custom-footer-copyright mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
            >
                <p>© 2025 Azure Shores Resort. All rights reserved.</p>
            </motion.div>
        </footer>
    );
}

export default Footer;