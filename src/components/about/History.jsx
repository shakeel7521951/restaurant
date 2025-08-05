import React from 'react'
import { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";



const History = () => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <div> {/* History Section */}
            <section className=" bg-white space-y-2">
                <div className='py-16 px-5 lg:px-12'>
                    <div className="container mx-auto">
                        <p className='text-red-500 font-semibold'>WHY CHOOSE OUR ABOUT</p>
                        <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-12 ">
                            <div className="md:w-1/2 text-5xl md:text-6xl">
                                <p className='text-black font-bold mb-5'>Unlimited Better foods,</p>
                                <p className='text-gray-400'>All In One Place.</p>
                            </div>
                            <div className="md:w-1/2 text-xl text-gray-500">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Ut rutrum sed rhoncus amet phasellus lorem. Eget sodales urna arcu quis posuere egestas metus enim posuere mattis dignissim ullamcorper.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex p-2 justify-end w-full'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 w-full max-w-7xl ">

                        {/* First Column - Image or Video */}
                        <div className="relative text-end pr-4">
                            {!showVideo ? (
                                <div className="relative">
                                    <img
                                        src="../about/about (1).jpg"
                                        alt="Image 1"
                                        className="w-full h-full rounded-lg shadow-md object-cover"
                                    />
                                    {/* Animated Play Button */}
                                    <button
                                        onClick={() => setShowVideo(true)}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                        bg-red-600 p-5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
                                    >
                                        <FaPlay className="text-white text-2xl ml-1" />
                                    </button>
                                </div>
                            ) : (
                                <div className="relative w-full h-full">
                                    {/* YouTube Video */}
                                    <iframe
                                        className="w-full min-h-[250px] h-full rounded-lg shadow-md"
                                        width="560" height="315" src="https://www.youtube.com/embed/NC9KlaxtfLg?si=0ZTYTcn9wNWN05jb"
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                                    </iframe>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setShowVideo(false)}
                                        className="absolute top-0 right-0 cursor-pointer bg-opacity-60 text-white p-2 rounded-full hover:scale-110 transition-transform duration-200"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Second Column - Static Image */}
                        <div className="text-end pr-4">
                            <img
                                src="../about/about (2).jpg"
                                alt="Image 2"
                                className="w-full rounded-lg shadow-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default History