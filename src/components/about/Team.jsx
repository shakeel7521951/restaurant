import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';

const chefs = [
    {
        name: 'Michael Johnson',
        role: 'Head Chef',
        image: '/about/team1.jpg',
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
        image: '/about/team2.jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
    {
        name: 'David Lee',
        role: 'Sous Chef',
        image: '/about/team3.jpg',
        socials: [
            { icon: FaFacebookF, color: '#1877F2', link: '#' },
            { icon: FaTwitter, color: '#000000', link: '#' },
            { icon: FaPinterestP, color: '#E60023', link: '#' },
            { icon: FaInstagram, color: '#E4405F', link: '#' },
        ],
    },
];

const Team = () => {
    return (
        <div>
            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-15">
                        <p className="text-4xl font-semibold mb-6">Meet Our Best Chef</p>
                        <p>
                            Dolor sit amet consectetur. Massa a of est sit commodo convallis auctor
                            aliquet ready works any more sem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-18 max-w-7xl mx-auto">
                        {chefs.map((chef, index) => (
                            <div className="relative group" key={index}>
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
                </div>
            </section>
        </div>
    );
};

export default Team;
