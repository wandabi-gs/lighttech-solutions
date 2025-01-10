import { motion } from "framer-motion";
import Footer from "~/components/Footer";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: "fa-globe",
      description: "Modern, responsive websites built with cutting-edge technology",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "Website Maintenance",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Software Development",
      icon: "fa-code",
      description: "Custom software solutions for your business needs",
      features: [
        "Desktop Applications",
        "Cloud Solutions",
        "API Development",
        "System Integration",
        "Legacy System Modernization"
      ],
      technologies: ["Python", "Java", "C#", ".NET", "Docker"]
    },
    {
      title: "Database Administration",
      icon: "fa-database",
      description: "Efficient database management and optimization",
      features: [
        "Database Design",
        "Performance Tuning",
        "Data Migration",
        "Backup & Recovery",
        "Security Implementation"
      ],
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle"]
    },
    {
      title: "Mobile Apps",
      icon: "fa-mobile",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-platform Apps",
        "App Maintenance",
        "UI/UX Design"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      title: "Blockchain",
      icon: "fa-chain",
      description: "Innovative blockchain solutions and smart contracts",
      features: [
        "Smart Contracts",
        "DApp Development",
        "Token Development",
        "Blockchain Integration",
        "Cryptocurrency Solutions"
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "Hardhat", "OpenZeppelin"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-app-primary-900 to-app-secondary-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 font-['Outfit']">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border-2 border-l-app-primary-400 border-t-app-primary-400 border-r-app-secondary-400 border-b-app-secondary-400"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Info */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <i className={`fa-solid ${service.icon} text-3xl text-app-primary-400`}></i>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-300 mb-8 font-['Outfit'] text-lg">
                      {service.description}
                    </p>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <i className="fa-solid fa-check text-app-primary-400 mr-3"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6">Technologies We Use</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {service.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-white/5 px-4 py-3 rounded-lg text-center backdrop-blur-sm border border-white/10"
                        >
                          <span className="text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <a
                        href={`/contact?service=${service.title.toLowerCase().replace(' ', '-')}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-app-primary-500 to-app-secondary-500 rounded-lg text-white font-semibold hover:from-app-primary-600 hover:to-app-secondary-600 transition-all duration-300"
                      >
                        Get Started
                        <i className="fa-solid fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
