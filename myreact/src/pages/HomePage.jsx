import React from 'react';
import Character from '../pot1.png';
import plant1 from '../pl1.png';
import plant2 from '../pl2.png'; 
import fb from '../fb.png'; 
import twitter from '../twit.png'; 
import tiktok from '../tiktok.png'; 
import insta from '../insta.png'; 

function HomePage() {
    return (
        <div className='px-10 bg-gradient-to-r from-custom-dark via-custom-medium to-custom-light'>
            <div className="container text-left flex flex-col md:flex-row items-center pb-12 pt-8">

                {/* Left Content */}
                <div className="md:w-1/2 slide-in-left">
                    <p className="text-5xl font-bold text-[#F6F4EB] pb-1">
                        Bringing <span className="text-[#70e1ca] tracking-wider" style={{ letterSpacing: '0.2em' }}>Green</span>
                    </p>
                    <p className="text-5xl font-bold text-[#F6F4EB] pb-3">to your Space</p>
                    <p className="text-[#F6F4EB] -mx-25 pb-8" style={{ letterSpacing: '0.1em' }}>
                        Transform your living space into a vibrant sanctuary with Bloom
                    </p>

                    <div className="text-left">
                    <button className="relative overflow-hidden border-2 bg-[#243642] bg-opacity-70 backdrop-blur-lg rounded-3xl font-bold tracking-widest text-[#F6F4EB] text-sm px-5 py-2 transition-all duration-300 hover:bg-[#F6F4EB] hover:text-[#243642]">
                        <span className="relative">Shop now</span>
                    </button>

                    </div>
                </div>

                {/* Right Image */}
                <div className="pl-60 flex justify-center slide-in-right">
                    <img src={Character} className="w-full h-auto max-w-md bounce-on-hover" />
                </div>
            </div>

            <div className="flex items-center justify-between m-0">
                <div className="flex space-x-6 ml-8 items-end slide-in-left"> 
                    <div className="relative w-[200px] h-20">
                        <div className='bg-white bg-opacity-50 backdrop-blur-md h-full rounded-t-[40px]'></div>
                        <img src={plant1} alt="Image 1" className="absolute top-[-125px] left-1/2 transform -translate-x-1/2 h-auto" /> 
                    </div>

                    <div className="relative w-[200px] h-20">
                        <div className='bg-white bg-opacity-50 backdrop-blur-md h-full rounded-t-[40px]'></div>
                        <img src={plant2} alt="Image 2" className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 h-auto" /> 
                    </div>
                </div>

                <div className='bg-white bg-opacity-50 backdrop-blur-md rounded-t-full w-[400px] flex flex-col items-center h-20 mr-10 slide-in-right'>
                <ul className="flex justify-between space-x-6 m-0 pt-6">
                    <li className="flex items-center">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={fb} className="w-10 h-10" alt="Facebook" />
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={twitter} className="w-10 h-10" alt="Twitter" />
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={tiktok} className="w-10 h-10" alt="TikTok" />
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bounce-on-hover">
                            <img src={insta} className="w-10 h-10" alt="Instagram" />
                        </a>
                    </li>
                </ul>

                </div>
            </div>

        </div>
    );
}

export default HomePage;
