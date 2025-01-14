import React from 'react'
import { motion } from 'framer-motion'
import { TechBackground } from './hero-section';

function TeamSection() {
    const teamMembers = [
        {
            name: "John Mulama",
            role: "CEO & Founder",
            image: "https://placehold.co/400x400/2a2a2a/white",
            description: "10+ years of tech leadership experience",
            socials: {
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Gideon Simiyu",
            role: "CTO & Co-Founder",
            image: "/images/team/gideon-simiyu.jpg",
            description: "5+ years of software engineering experience",
            socials: {
                linkedin: "#",
                github: "https://github.com/wandabi-gs",
                globe: "https://gideon-simiyu.vercel.app/"
            }
        },
        {
            name: "Mike Chen",
            role: "Lead Developer",
            image: "https://placehold.co/400x400/2a2a2a/white",
            description: "Full-stack development expert",
            socials: {
                github: "#",
                linkedin: "#"
            }
        }
    ];

    return (
        <div className='min-h-screen'>
            <TechBackground />
            <div className="absolute inset-0 overflow-hidden">
                <section className="py-20 relative">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
                                Meet Our Team
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-['Outfit']">
                                Passionate experts dedicated to delivering excellence
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                                    />
                                    <h3 className="text-xl font-bold text-white text-center mb-2">{member.name}</h3>
                                    <p className="text-app-primary-400 text-center mb-4">{member.role}</p>
                                    <p className="text-gray-300 text-center mb-6 font-['Outfit']">{member.description}</p>
                                    <div className="flex justify-center space-x-4">
                                        {Object.entries(member.socials).map(([platform, url]) => (
                                            <a
                                                key={platform}
                                                href={url}
                                                target='_blank'
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <i className={`${platform === "globe" ? "fa-solid" : "fa-brands"} fa-${platform} text-xl`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TeamSection