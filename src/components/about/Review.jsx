import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Jennifer K.",
        role: "Regular Guest",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        text: "The flavors were incredible! Every dish was a work of art...",
    },
    {
        id: 2,
        name: "David L.",
        role: "First Time Visitor",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4,
        text: "Impressed by the service and the unique taste of every item.",
    },
    // {
    //     id: 3,
    //     name: "Maria S.",
    //     role: "Food Blogger",
    //     image: "https://randomuser.me/api/portraits/women/68.jpg",
    //     rating: 5,
    //     text: "A delightful culinary journey! The ambiance and service were top-notch.",
    // },
];


const Review = () => {
    return (
        <div>
            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Guests Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear from those who've experienced our hospitality
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {testimonials.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:translate-y-1 transition duration-300"
                            >
                                <div className="text-yellow-400 text-xl mb-4 flex">
                                    {Array(review.rating)
                                        .fill()
                                        .map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                </div>
                                <p className="text-gray-600 mb-6">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{review.name}</h4>
                                        <p className="text-gray-500 text-sm">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;
