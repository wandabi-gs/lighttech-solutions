import { motion } from 'framer-motion'

function WhyUs() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gray-900"></div>
                <div className="absolute inset-0 opacity-90">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
                            Why Choose Us
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-['Outfit']">
                            Experience excellence in technology solutions with our innovative approach and dedicated team
                        </p>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { [
                        {
                            icon: "⚡",
                            title: "Fast Delivery",
                            description: "Quick turnaround times without compromising on quality. We understand time is crucial for your business.",
                            highlight: "Avg. 2-3 weeks delivery"
                        },
                        {
                            icon: "🛡️",
                            title: "Security First",
                            description: "Enterprise-grade security measures to protect your data and applications from modern threats.",
                            highlight: "Industry-standard security"
                        },
                        {
                            icon: "💡",
                            title: "Innovation",
                            description: "Cutting-edge solutions using the latest technologies and best practices.",
                            highlight: "Always ahead"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.2 }
                            }}
                            className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-app-primary-400/50 transition-colors duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="text-4xl mb-4"
                            >
                                {item.icon}
                            </motion.div>
                            <motion.h3 
                                className="text-xl font-bold mb-2 text-white"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.4 }}
                            >
                                {item.title}
                            </motion.h3>
                            <motion.p 
                                className="text-gray-300 mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                            >
                                {item.description}
                            </motion.p>
                            <motion.div
                                className="text-sm font-semibold text-app-primary-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.6 }}
                            >
                                {item.highlight}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mt-16"
            >
              <a 
                href="/about" 
                className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center text-lg font-semibold">
                  Learn More About Us
                  <motion.svg 
                    className="w-5 h-5 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7m7 7V3"></path>
                  </motion.svg>
                </span>
              </a>
            </motion.div> */}
            </div>
        </section>
    )
}

export default WhyUs