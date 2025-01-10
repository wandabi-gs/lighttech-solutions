import { motion } from "framer-motion";
import Footer from "~/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-app-primary-900 to-app-secondary-900">
      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 to-app-secondary-400">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 font-['Outfit']">
              Have a project in mind? Let's discuss how we can help your business grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-app-primary-400 text-white resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-app-primary-500 to-app-secondary-500 text-white rounded-lg font-semibold hover:from-app-primary-600 hover:to-app-secondary-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Office Location */}
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="text-app-primary-400 text-2xl">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Visit Our Office</h3>
                    <p className="text-gray-300 font-['Outfit']">
                      123 Tech Street<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="text-app-primary-400 text-2xl">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Contact Details</h3>
                    <p className="text-gray-300 font-['Outfit']">
                      Phone: +1 (555) 123-4567<br />
                      Email: contact@lighttech.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="text-app-primary-400 text-2xl">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300 font-['Outfit']">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="text-app-primary-400 text-2xl">
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-twitter text-2xl"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-linkedin text-2xl"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-github text-2xl"></i>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fa-brands fa-instagram text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
