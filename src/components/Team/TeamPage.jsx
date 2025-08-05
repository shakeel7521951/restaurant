import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const chefs = [
    {
        name: 'Michael Johnson',
        role: 'Executive Chef',
        image: '/team/team (1).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'Emily Carter',
        role: 'Sous Chef',
        image: '/team/team (2).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'James Smith',
        role: 'Grill Chef',
        image: '/team/team (3).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'Olivia Brown',
        role: 'Pantry Chef',
        image: '/team/team (4).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'William Davis',
        role: 'Fish Chef',
        image: '/team/team (5).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'Sophia Martinez',
        role: 'Vegetable Chef',
        image: '/team/team (6).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'Daniel Wilson',
        role: 'Butcher Chef',
        image: '/team/team (7).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'Sarah Williams',
        role: 'Pastry Chef',
        image: '/team/team (8).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'David Lee',
        role: 'Tournant (Relief Chef)',
        image: '/team/team (9).jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },

    // 👇 Add more dummy data to test pagination
    
    // ...Array.from({ length: 5 }, (_, i) => ({
    //     name: `Chef ${i + 8}`,
    //     role: 'Assistant Chef',
    //     image: '/about/team1.jpg',
    //     socials: [
    //         { icon: FaFacebookF, color: '#1877F2', link: '#' },
    //         { icon: FaTwitter, color: '#000000', link: '#' },
    //         { icon: FaPinterestP, color: '#E60023', link: '#' },
    //         { icon: FaInstagram, color: '#E4405F', link: '#' },
    //     ],
    // })),
];

const TeamPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const totalPages = Math.ceil(chefs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentChefs = chefs.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <div>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-18 max-w-7xl mx-auto">
                        {currentChefs.map((chef, index) => (
                            <div className="relative group " key={index}>
                                <div className="text-center relative overflow-hidden rounded-xl">
                                    <img
                                        src={chef.image}
                                        alt={chef.name}
                                        className="object-cover group-hover:scale-110 ease-in-out transition-transform duration-400"
                                    />
                                    <div className="bg-[#0000004f] absolute h-full w-full top-0 left-0"></div>

                                    {/* Social Icons */}
                                    <div className="flex flex-col absolute z-50 bg-white rounded-l-xl justify-center gap-3 p-3 top-1/2 right-0 transform -translate-y-1/2 origin-right -rotate-y-90 group-hover:rotate-y-0 transition-transform duration-500 perspective-1000">
                                        {chef.socials.map((social, idx) => {
                                            const Icon = social.icon;
                                            return (
                                                <a
                                                    key={idx}
                                                    href={social.link}
                                                    className="cursor-pointer hover:scale-125 transition duration-300 text-lg"
                                                    style={{ color: social.color }}
                                                >
                                                    <Icon />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Name & Role */}
                                <div className="text-center bg-white shadow rounded-xl w-[70%] z-100 mx-auto py-4 absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                                    <h3 className="text-xl font-bold tracking-wide">{chef.name}</h3>
                                    <p className="text-[#e63946] text-lg">{chef.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-20 pt-20 gap-2 ">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        >
                            Prev
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-4 py-2 rounded  ${currentPage === i + 1
                                    ? 'bg-[#e63946] text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamPage;
