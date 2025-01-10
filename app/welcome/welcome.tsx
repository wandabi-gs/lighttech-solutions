import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useSpring, useMotionValue } from "framer-motion";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "~/components/ui/alert-dialog";

const TechBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
    <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path
        d="M 10 0 L 10 10 M 0 10 L 20 10 M 5 10 L 5 20 M 15 0 L 15 20"
        stroke="url(#circuitGradient)"
        strokeWidth="0.5"
        fill="none"
      />
      <circle cx="10" cy="10" r="1.5" fill="url(#circuitGradient)" />
    </pattern>
    <rect x="0" y="0" width="100" height="100" fill="url(#circuit)" />
  </svg>
);

export function Welcome() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technology",
      icon: "fa-globe",
    },
    {
      title: "Software Development",
      description: "Custom software solutions for your business needs",
      icon: "fa-code",
    },
    {
      title: "Database Administration",
      description: "Efficient database management and optimization",
      icon: "fa-database",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: "fa-mobile",
    },
    {
      title: "Blockchain",
      description: "Web3 solutions and blockchain integration",
      icon: "fa-chain",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-app-primary-900 to-app-app-secondary-900 text-white  overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Tech Background */}
        <TechBackground />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid lines */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }}>
          </div>

          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-sm"
              style={{
                background: `radial-gradient(circle, rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.15) 0%, rgba(0,0,0,0) 70%)`,
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main hero content */}
        <AnimatePresence>
          <div className="relative z-10 container mx-auto px-4 text-center">
            {/* Floating Tech Icons */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left side icons */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-0 top-1/4"
              >
                <div className="relative">
                  <i className="fa-brands fa-react text-6xl text-app-primary-400/30 absolute -left-8 -top-8" />
                  <i className="fa-brands fa-node-js text-5xl text-app-secondary-400/30 absolute left-8 top-8" />
                  <i className="fa-brands fa-python text-4xl text-app-accent-400/30 absolute -left-4 top-16" />
                </div>
              </motion.div>

              {/* Right side icons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute right-0 top-1/3"
              >
                <div className="relative">
                  <i className="fa-brands fa-aws text-6xl text-app-primary-400/30 absolute -right-8 -top-8" />
                  <i className="fa-brands fa-docker text-5xl text-app-secondary-400/30 absolute right-8 top-8" />
                  <i className="fa-brands fa-github text-4xl text-app-accent-400/30 absolute -right-4 top-16" />
                </div>
              </motion.div>

              {/* Tech words cloud */}
              <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
                {[
                  { text: "Innovation", x: "20%", y: "15%", size: "xl" },
                  { text: "Cloud", x: "75%", y: "25%", size: "lg" },
                  { text: "AI", x: "15%", y: "65%", size: "2xl" },
                  { text: "Blockchain", x: "80%", y: "60%", size: "xl" },
                  { text: "IoT", x: "40%", y: "75%", size: "lg" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    className={`absolute text-${item.size} font-bold text-white/20`}
                    style={{ left: item.x, top: item.y }}
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.5,
                      repeat: Infinity,
                    }}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full border-2 border-app-primary-400/20"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute right-1/4 bottom-1/4 w-32 h-32 rounded-full border-2 border-app-secondary-400/20"
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Tech decoration */}
              <motion.div
                className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(100,149,237,0.3) 0%, rgba(0,0,0,0) 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main title */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 via-app-secondary-400 to-app-accent-400">
                  LightTech
                  <br />
                  Solutions
                </h1>
              </motion.div>

              {/* Tagline and Description */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl md:text-3xl text-gray-300 font-['Outfit'] max-w-3xl mx-auto leading-relaxed"
                >
                  Transforming Ideas into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-primary-400 to-app-secondary-400"> Digital Reality</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="max-w-3xl mx-auto space-y-4"
                >
                  <p className="text-lg text-gray-300 font-['Outfit']">
                    Pioneering the future of technology with innovative solutions that drive business growth and digital transformation.
                  </p>
                  <div className="flex justify-center gap-8 py-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-app-primary-400">10+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-app-secondary-400">200+</div>
                      <div className="text-sm text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-app-accent-400">50+</div>
                      <div className="text-sm text-gray-400">Tech Experts</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-6 mt-12"
              >
                <AlertDialog>
                  <AlertDialogTrigger>
                    <a
                      href="#"
                      className="group relative px-8 py-4 bg-gradient-to-r from-app-primary-500 to-app-secondary-500 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <span className="relative z-10">Start Your Project</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-app-secondary-500 to-app-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </a>

                    en</AlertDialogTrigger>
                  <AlertDialogContent className="bg-gray-900/95 border-2 border-app-primary-400/20 backdrop-blur-lg max-w-2xl">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
                        Let's Start Your Project
                      </AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-300">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">First Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Last Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white resize-none h-32"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>
                    </div>

                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction className="bg-gradient-to-r from-app-primary-500 to-app-secondary-500 text-white hover:from-app-primary-600 hover:to-app-secondary-600">
                        Send Message
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                {/* <a
                  href="/services"
                  className="px-8 py-4 border border-white/20 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </a> */}
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                  opacity: { delay: 1, duration: 1 },
                  y: { repeat: Infinity, duration: 1.5 }
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm text-gray-400">Scroll to explore our services</span>
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Services Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/programming.avif"
            alt="Programming Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-['Outfit']">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/10 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id={`pattern-${index}`} patternUnits="userSpaceOnUse" width="10" height="10" className="text-white/20">
                      <path d="M 0 10 L 10 0" strokeWidth="0.5" stroke="currentColor" fill="none" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10"
                >
                  <div className="text-3xl mb-6">
                    <i className={`fa-solid ${service.icon} text-app-primary-400`}></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 font-['Outfit'] text-lg mb-6">{service.description}</p>
                  {/* <a href={`/services/${service.title.toLowerCase().replace(' ', '-')}`} 
                       className="inline-flex items-center text-app-primary-400 hover:text-app-primary-300 transition-colors">
                      Learn more
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7m7 7V3"></path>
                      </svg>
                    </a> */}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
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
            {[
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
                highlight: "99.9% Security Rating"
              },
              {
                icon: "🎯",
                title: "Tailored Solutions",
                description: "Custom solutions designed specifically for your business needs and growth objectives.",
                highlight: "100% Custom Code"
              },
              {
                icon: "🔄",
                title: "Agile Process",
                description: "Flexible development methodology that adapts to changes and delivers continuous value.",
                highlight: "Weekly Updates"
              },
              {
                icon: "💡",
                title: "Innovation Focus",
                description: "Leveraging cutting-edge technologies to give your business a competitive advantage.",
                highlight: "Latest Tech Stack"
              },
              {
                icon: "🤝",
                title: "24/7 Support",
                description: "Round-the-clock technical support and maintenance for your peace of mind.",
                highlight: "15min Response Time"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border-2 border-l-app-primary-400 border-t-app-primary-400 border-r-app-secondary-400 border-b-app-secondary-400 overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-app-primary-400/10 to-app-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 font-['Outfit'] mb-4">{feature.description}</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-1 w-8 bg-gradient-to-r from-app-primary-400 to-app-secondary-400 rounded-full" />
                    <span className="text-sm text-app-primary-400">{feature.highlight}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={false}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  className="absolute inset-0 rounded-2xl transition-transform duration-300"
                />
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


      {/* Footer */}
      <footer className="relative pt-32 pb-16 bg-black">
        {/* Footer Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),rgba(0,0,0,0))]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
                  LightTech Solutions
                </h3>
                <p className="text-gray-300 font-['Outfit'] mt-4">
                  Empowering businesses through innovative technology solutions since 2015.
                  <i className="fa-brands fa-twitter"></i>
                </p>
                <div className="flex space-x-4 mt-6">
                  {[
                    {
                      name: "Twitter",
                      icon: "text-blue-600 fa-brands fa-twitter",
                      href: "https://twitter.com/lighttechsol"
                    },
                    {
                      name: "GitHub",
                      icon: "text-gray-400 fa-brands fa-github",
                      href: "https://github.com/LightTechSolutions"
                    },
                    {
                      name: "Instagram",
                      icon: "text-pink-600 fa-brands fa-instagram",
                      href: "https://www.instagram.com/lighttechsol/"
                    },
                    {
                      name: "Linkedin",
                      icon: "text-blue-600 fa-brands fa-linkedin",
                      href: "https://www.linkedin.com/company/lighttechsolutions/"
                    }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="text-2xl text-gray-400 hover:text-white transition-colors">
                        <i className={social.icon} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-4">
                  {services.map((service) => (
                    <motion.li
                      key={service.title}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-300 hover:text-white transition-colors flex items-center group">
                        <span className="h-1 w-0 bg-app-primary-400 mr-2 transition-all duration-300 group-hover:w-4"></span>
                        {service.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6">Company</h4>
                <ul className="space-y-4">
                  {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-300 hover:text-white transition-colors flex items-center group">
                        <span className="h-1 w-0 bg-app-secondary-400 mr-2 transition-all duration-300 group-hover:w-4"></span>
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                <ul className="space-y-4">
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 group"
                  >
                    <svg className="w-5 h-5 mr-3 text-app-primary-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +1 (555) 123-4567
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 group"
                  >
                    <svg className="w-5 h-5 mr-3 text-app-primary-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@lighttech.com
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-300 group"
                  >
                    <svg className="w-5 h-5 mr-3 text-app-primary-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    123 Tech Street, Silicon Valley, CA 94025
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                2025 LightTech Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <motion.a
                    key={item}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
