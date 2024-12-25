import React, { useState } from 'react';
import Footer from "../components/Footer";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send form data to an API or email service)
        console.log('Form Submitted:', formData);
    };

    return ( 
        <div className=' min-h-screen flex flex-col justify-center items-center bg-[#E2F1E7] fade-in-up'>
            <div className="text-center text-[#1A3636] py-10">
                <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
                <p className="text-xl mb-4">We'd love to hear from you! Fill out the form below to get in touch.</p>
            </div>

            <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl mb-4 fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-md font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#1A3636]"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-md font-medium text-gray-700">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#1A3636]"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-md font-medium text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#1A3636]"
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 bg-[#E2F1E7] text-[#1A3636] font-semibold rounded-3xl shadow-md hover:bg-[#234949] focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-white"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default Contact;
