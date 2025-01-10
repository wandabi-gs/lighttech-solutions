import { motion } from "framer-motion";

const Footer = () => {
  const services = [
    "Web Development",
    "Software Development",
    "Database Administration",
    "Mobile Apps",
    "Blockchain"
  ];

  return (
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
                    key={service}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={`/services/${service.toLowerCase().replace(' ', '-')}`} 
                       className="text-gray-300 hover:text-white transition-colors flex items-center group">
                      <span className="h-1 w-0 bg-app-primary-400 mr-2 transition-all duration-300 group-hover:w-4"></span>
                      {service}
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
                  <i className="fa-solid fa-phone w-5 h-5 mr-3 text-app-primary-400 group-hover:scale-110 transition-transform"></i>
                  +1 (555) 123-4567
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-300 group"
                >
                  <i className="fa-solid fa-envelope w-5 h-5 mr-3 text-app-primary-400 group-hover:scale-110 transition-transform"></i>
                  contact@lighttech.com
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-300 group"
                >
                  <i className="fa-solid fa-location-dot w-5 h-5 mr-3 text-app-primary-400 group-hover:scale-110 transition-transform"></i>
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
              © {new Date().getFullYear()} LightTech Solutions. All rights reserved.
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
  );
};

export default Footer;
