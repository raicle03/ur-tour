import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function Destination() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch("https://dummyjson.com/posts");
            const data = await response.json();
            // Modify each blog to reflect unique travel destinations
            const travelBlogs = data.posts.map((blog, index) => ({
                ...blog,
                title: getUniqueBlogTitle(index), // Call to get unique title for each blog
                body: getUniqueBlogContent(index), // Call to get unique content for each blog
            }));
            setBlogs(travelBlogs);
        };

        fetchBlogs();
    }, []);

    // Function to provide unique titles based on index
    const getUniqueBlogTitle = (index) => {
        switch (index) {
            case 0:
                return "Kyoto, Japan";
            case 1:
                return "Maldives";
            case 2:
                return "Prague, Czech Republic";
            case 3:
                return "Swiss Alps, Switzerland";
            case 4:
                return "Costa Rica";
            case 5:
                return "New Orleans, USA";
            case 6:
                return "Santorini, Greece";
            case 7:
                return "Machu Picchu, Peru";
            case 8:
                return "Serengeti, Tanzania";
            case 9:
                return "Rome, Italy";
            default:
                return "A Wonderful Destination";
        }
    };

    // Function to provide unique content based on index
    const getUniqueBlogContent = (index) => {
        switch (index) {
            case 0:
                return "Join me on an unforgettable adventure through the beautiful city of Kyoto, Japan. Experience its rich culture, stunning temples, and vibrant geisha districts. From the peaceful Zen gardens to the bustling streets filled with lanterns, Kyoto is a destination that will transport you back in time.";
            case 1:
                return "I recently visited the breathtaking beaches of the Maldives, and I can’t stop dreaming about it! Crystal-clear water, overwater bungalows, and vibrant coral reefs make this tropical paradise a must-see. I’ll share everything from the best resorts to the most serene beaches that will make you fall in love with this place.";
            case 2:
                return "In the heart of Europe, Prague awaits with its fairy-tale architecture, cobblestone streets, and historical landmarks. Whether you’re wandering through the Old Town Square, crossing the Charles Bridge, or enjoying a beer at a local pub, Prague offers an unforgettable mix of history, culture, and charm.";
            case 3:
                return "The Swiss Alps are not just for skiing—they are an outdoor lover's dream. From hiking through lush valleys to paragliding over snow-capped peaks, Switzerland is an adventure lover's paradise. Join me as I explore alpine villages, pristine lakes, and breathtaking views that will make you want to pack your bags and head to the mountains!";
            case 4:
                return "If you're a nature lover, Costa Rica should be at the top of your list. A haven for wildlife enthusiasts, this Central American country boasts rainforests, volcanic landscapes, and some of the most pristine beaches in the world. I spent my days hiking through jungles, ziplining over canyons, and spotting wildlife like monkeys and sloths!";
            case 5:
                return "I took a road trip across the United States, and my first stop was New Orleans. Known for its lively music scene, incredible food, and rich history, this city has an energy like no other. Join me as I dive into the vibrant culture of New Orleans, from its famous jazz clubs to the delicious Cajun cuisine and historic French Quarter.";
            case 6:
                return "A visit to the magical island of Santorini, Greece, is a dream come true. With its iconic whitewashed buildings, stunning sunsets, and crystal-blue waters, it’s no wonder that this island is one of the most photographed destinations in the world. I spent my days exploring charming villages, relaxing on volcanic beaches, and enjoying Mediterranean cuisine.";
            case 7:
                return "Machu Picchu, the lost city of the Incas, is a place I’ve always dreamed of visiting. Nestled in the Peruvian Andes, this ancient ruin offers a breathtaking view of history, culture, and natural beauty. I’ll share my experience hiking the Inca Trail, reaching the top, and taking in the awe-inspiring view of the ruins and the surrounding mountains.";
            case 8:
                return "The Serengeti in Tanzania is a wildlife lover’s dream. On my safari adventure, I had the incredible opportunity to see the Big Five—lions, elephants, buffaloes, leopards, and rhinos—up close in their natural habitat. From the vast savannahs to the Maasai Mara, join me as I explore one of Africa’s most iconic national parks.";
            case 9:
                return "Rome, Italy, is a city that combines ancient history with modern culture. From the Colosseum to the Vatican, the city is brimming with historical landmarks. I spent my days marveling at ancient ruins, enjoying authentic Italian cuisine, and wandering through narrow streets filled with centuries of stories.";
            default:
                return "Join me on a journey to an incredible destination filled with rich culture, breathtaking landscapes, and unforgettable experiences. Whether you're hiking through mountains, strolling along beaches, or immersing yourself in local traditions, every journey offers new adventures and memories.";
        }
    };

    return (
        <div className="bg-[#E2F1E7] fade-in-up">
            <h1 className="text-2xl mb-6 pl-10 pt-4 font-bold text-[#243642]">Travel Blogs</h1>
            <div className="grid grid-cols-4 gap-4 mx-10 pb-6 fade-in-up">
                {blogs.map((blog) => {
                    return (
                        <div key={blog.id} className="bg-[#16423C] bg-opacity-70 rounded-lg shadow-2xl p-4">
                            <div className="text-white text-md">
                                <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
                                <p className="text-sm">{blog.body}</p>
                            </div>

                            <div className="flex justify-between px-4 pb-3 text-white text-lg">
                                <div className="font-bold">Read More</div>
                                <div className="text-md">
                                    <a href="#" className="text-[#FCF596] font-bold rounded-full pl-4 mr-3">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <a href="#" className="text-[#FF4545] font-bold rounded-full">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default Destination;
