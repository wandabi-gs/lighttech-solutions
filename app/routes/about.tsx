import { motion } from "framer-motion";
import Footer from "~/components/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://placehold.co/400x400/2a2a2a/white",
      description: "20+ years of tech leadership experience",
      socials: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://placehold.co/400x400/2a2a2a/white",
      description: "Former Google & Microsoft engineer",
      socials: {
        linkedin: "#",
        github: "#"
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

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" }
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
              About LightTech Solutions
            </h1>
            <p className="text-xl text-gray-300 font-['Outfit']">
              Transforming businesses through innovative technology solutions since 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6 font-['Outfit']">
                At LightTech Solutions, we're committed to delivering cutting-edge technology solutions that empower businesses to thrive in the digital age. Our mission is to transform complex challenges into elegant, efficient solutions.
              </p>
              <p className="text-gray-300 font-['Outfit']">
                We believe in innovation, excellence, and creating lasting partnerships with our clients. Our team of experts works tirelessly to ensure that every project exceeds expectations and delivers real business value.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-app-primary-400">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <i className={`fa-brands fa-${platform} text-xl`}></i>
                    </a>
                  ))}
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
