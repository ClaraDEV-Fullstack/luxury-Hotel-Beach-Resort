import React from 'react';

export function ContactPage() {
    return (
        <div className="contact-page">
            {/* Hero Section with Background Image */}
            <div
                className="hero-section"
                style={{
                    backgroundImage: `url('https://img.freepik.com/premium-photo/man-showing-contact-us-message-paper_220873-12105.jpg')`, // Replace with your image path
                    backgroundSize: 'cover',
                    height:'80vh',
                    backgroundPosition: 'center',
                }}
            >

            </div>

            {/* Contact Content */}
            <div className="contact-content">
                {/* Contact Form */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>Feel free to reach out to us via email, phone, or visit our office.</p>
                    <ul>
                        <li>
                            <strong>Email:</strong> info@example.com
                        </li>
                        <li>
                            <strong>Phone:</strong> +1 (123) 456-7890
                        </li>
                        <li>
                            <strong>Address:</strong> 123 Main St, City, Country
                        </li>
                    </ul>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <h2>Our Location</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4f1c8e!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1633031234567!5m2!1sen!2sus"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Inline CSS for Styling */}
            <style>
                {`
          .contact-page {
            min-height: 100vh;
            background: #f9f9f9;
            font-family: 'Poppins', sans-serif;
          }

          /* Hero Section */
          .hero-section {
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
          }

          .hero-overlay {
            background: rgba(0, 0, 0, 0.5);
            padding: 2rem;
            border-radius: 1rem;
          }

          .hero-title {
            font-size: 3rem;
            font-weight: 800;
            color: white;
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            margin-top: 260px;
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.9);
          }

          /* Contact Content */
          .contact-content {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }

          /* Contact Form */
          .contact-form {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .contact-form h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          .form-group label {
            display: block;
            font-size: 1rem;
            color: #64748b;
            margin-bottom: 0.5rem;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            font-size: 1rem;
            color: #1e293b;
            transition: border-color 0.3s ease;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            border-color: #4f46e5;
            outline: none;
          }

          .form-group textarea {
            resize: vertical;
          }

          .submit-button {
            display: inline-block;
            background: linear-gradient(to right, #4f46e5, #9333ea);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .submit-button:hover {
            background: linear-gradient(to right, #4338ca, #7c3aed);
          }

          /* Contact Information */
          .contact-info {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .contact-info h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }

          .contact-info p {
            font-size: 1rem;
            color: #64748b;
            margin-bottom: 1.5rem;
          }

          .contact-info ul {
            list-style: none;
            padding: 0;
          }

          .contact-info ul li {
            font-size: 1rem;
            color: #1e293b;
            margin-bottom: 1rem;
          }

          .contact-info ul li strong {
            color: #4f46e5;
          }

          /* Map Section */
          .map-section {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
          }

          .map-section h2 {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 1.5rem;
          }
        `}
            </style>
        </div>
    );
}