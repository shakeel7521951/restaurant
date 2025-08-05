import React from 'react';
import { FaUtensils, FaLeaf, FaAward, FaUsers } from 'react-icons/fa';

const values = [
    {
        icon: <FaLeaf />,
        title: "Fresh Ingredients",
        description: "We source only the freshest, seasonal ingredients from local farmers and trusted suppliers."
    },
    {
        icon: <FaUtensils />,
        title: "Culinary Excellence",
        description: "Our chefs combine traditional techniques with innovative approaches to create memorable dishes."
    },
    {
        icon: <FaUsers />,
        title: "Exceptional Service",
        description: "We treat every guest like family, ensuring a dining experience that exceeds expectations."
    },
    {
        icon: <FaAward />,
        title: "Sustainability",
        description: "Committed to eco-friendly practices from kitchen operations to packaging and waste reduction."
    }
];

const Value = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        These principles guide everything we do, from selecting ingredients to serving our guests
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-400"
                        >
                            <div className="text-[#e63946] text-4xl mb-4 flex justify-center">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Value;
