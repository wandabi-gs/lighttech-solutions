import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "fa-code",
      description: "Custom web applications built with modern technologies.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Development",
        "Performance Optimization"
      ],
      gradient: "from-blue-400 via-purple-400 to-pink-400"
    },
    {
      title: "Mobile Development",
      icon: "fa-mobile-screen",
      description: "Native and cross-platform mobile applications.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Mobile UI/UX Design"
      ],
      gradient: "from-purple-400 via-pink-400 to-red-400"
    },
    {
      title: "Cloud Solutions",
      icon: "fa-cloud",
      description: "Scalable cloud infrastructure and solutions.",
      features: [
        "Cloud Migration",
        "Serverless Architecture",
        "Auto-scaling Solutions",
        "Cloud Security",
        "Cost Optimization"
      ],
      gradient: "from-cyan-400 via-blue-400 to-green-400"
    },
    {
      title: "AI & Machine Learning",
      icon: "fa-brain",
      description: "Intelligent solutions powered by AI.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Systems",
        "AI Model Training",
        "Automated Decision Systems"
      ],
      gradient: "from-green-400 via-cyan-400 to-blue-400"
    },
    {
      title: "DevOps & Infrastructure",
      icon: "fa-server",
      description: "Streamline your development and operations.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure Automation",
        "Container Orchestration",
        "Monitoring & Logging",
        "Disaster Recovery"
      ],
      gradient: "from-orange-400 via-yellow-400 to-red-400"
    },
    {
      title: "Cybersecurity",
      icon: "fa-shield-halved",
      description: "Protect your digital assets and data.",
      features: [
        "Security Assessments",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response",
        "Security Training"
      ],
      gradient: "from-red-400 via-orange-400 to-yellow-400"
    }
  ];
  return (
    <>
    <section className="relative py-32 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/programming.avif"
            alt="Programming Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-app-primary-400/50 transition-all duration-300 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className={`text-3xl mb-4 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}
                >
                  <i className={`fas ${service.icon}`}></i>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-gray-300 mb-4"
                >
                  {service.description}
                </motion.p>
                
                {/* Features List */}
                <motion.ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1 + featureIndex * 0.1,
                        duration: 0.2
                      }}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          delay: index * 0.1 + featureIndex * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        className={`inline-block w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${service.gradient}`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
    </>
  )
}

export default Services