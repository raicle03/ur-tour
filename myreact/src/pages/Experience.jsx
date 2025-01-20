import React, { useState } from 'react';
import Footer from "../components/Footer";
import travel from "../travel.jpg"; // Replace with your actual image path

function Experience() {
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
        <div className='min-h-screen flex flex-col justify-between bg-[#E2F1E7] fade-in-up'>
            {/* Introduction Section */}
            <div className="text-center text-[#1A3636] py-10">
                <h1 className="text-4xl font-extrabold mb-4">Tour and Experience</h1>
                <p className="text-xl mb-4">Join us on unforgettable adventures and immerse yourself in breathtaking destinations. Contact us to start your journey!</p>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-4xl mx-auto mb-8">
                <img src={travel} alt="Tour Destination" className="w-full rounded-lg shadow-lg" />
            </div>

            {/* Tour Details Section */}
            <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl mb-8 mx-auto fade-in-up">
                <h2 className="text-2xl font-bold mb-4 text-center">Explore Our Tours</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Discover a variety of tours crafted to suit your tastes, from thrilling adventures to peaceful retreats. Whether you're looking for a guided city tour or a serene nature escape, we have something for everyone.
                </p>
            </div>

            {/* Feedback Section */}
            <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-xl mb-8 mx-auto fade-in-up">
                <h2 className="text-2xl font-bold mb-4 text-center">What Our Customers Say</h2>
                <div className="space-y-4">
                    <blockquote className="text-lg text-gray-700 italic">
                        "The best tour experience I've ever had! The destinations were breathtaking, and the service was exceptional."
                        <span className="block text-right font-bold">- Alex D.</span>
                    </blockquote>
                    <blockquote className="text-lg text-gray-700 italic">
                        "Highly recommended! The guides were knowledgeable, and every detail was perfectly planned."
                        <span className="block text-right font-bold">- Jamie L.</span>
                    </blockquote>
                    <blockquote className="text-lg text-gray-700 italic">
                        "A seamless and memorable journey. I will definitely book another tour soon!"
                        <span className="block text-right font-bold">- Morgan S.</span>
                    </blockquote>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl mb-8 mx-auto fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold text-center mb-4">Get in Touch</h3>

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

export default Experience;
