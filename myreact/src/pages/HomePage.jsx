import React from 'react';
import tour from '../tour.mp4';
import fb from '../fb.png';
import twitter from '../twit.png';
import tiktok from '../tiktok.png';
import insta from '../insta.png';

function HomePage() {
    return (
        <div className='relative h-screen overflow-hidden'>
            {/* Background Video */}
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                src={tour} 
                autoPlay 
                loop 
                muted 
            />

            {/* Overlay Content */}
            <div className='relative z-10 h-full flex flex-col justify-between'>
               

                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center pt-8 md:pt-16 space-y-8 md:space-y-0 md:space-x-16">

                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="text-4xl md:text-5xl font-bold text-white pb-4">
                            Explore the <span className="text-yellow-300 tracking-wider">World</span>
                        </p>
                        <p className="text-4xl md:text-5xl font-bold text-white pb-6">with Us</p>
                        <p className="text-white text-lg leading-relaxed">
                            Discover unforgettable adventures and breathtaking destinations. Let us guide you through your next journey with tailored experiences and scenic escapes.
                        </p>

                        <div className="mt-8">
                            <button className="relative overflow-hidden border-2 bg-blue-700 bg-opacity-70 backdrop-blur-lg rounded-3xl font-bold tracking-widest text-white text-sm px-6 py-3 transition-all duration-300 hover:bg-white hover:text-blue-700">
                                <span className="relative">Book Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="fixed bottom-0 right-0 p-6 flex space-x-4">
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={fb} className="w-10 h-10" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={twitter} className="w-10 h-10" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={tiktok} className="w-10 h-10" alt="TikTok" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={insta} className="w-10 h-10" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
