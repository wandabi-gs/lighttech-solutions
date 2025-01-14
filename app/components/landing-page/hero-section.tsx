import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from '@radix-ui/react-alert-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { AlertDialogHeader, AlertDialogFooter } from '~/components/ui/alert-dialog'

export const TechBackground = () => (
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

function HeroSection() {
  const [open, setOpen] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 z-50 h-screen w-screen flex items-center justify-center bg-black/10">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-gradient-to-br from-app-primary-950 to-app-secondary-950 backdrop-blur-lg max-w-2xl p-5 rounded-xl shadow-2xl">
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
      </div>
      {/* Tech Background */}
      <TechBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-app-primary-950/50 via-app-secondary-950/50 to-app-accent-950/50"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />

        {/* Grid lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />

        {/* Enhanced Floating particles with more vibrant colors */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [
                Math.random() * 0.5 + 0.5,
                Math.random() * 1 + 0.8,
                Math.random() * 0.5 + 0.5,
              ]
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: `radial-gradient(circle, ${
                ['rgba(147, 51, 234, 0.3)', 'rgba(79, 70, 229, 0.3)', 'rgba(236, 72, 153, 0.3)'][Math.floor(Math.random() * 3)]
              } 0%, rgba(0,0,0,0) 70%)`,
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
            }}
          />
        ))}

        {/* Shooting stars effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute h-0.5 w-0.5 bg-white rounded-full"
            initial={{
              x: -100,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: window.innerWidth + 100,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            style={{
              boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </div>

      {/* Main hero content */}
      <AnimatePresence>
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Floating Tech Icons with enhanced animations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left side icons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-0 top-1/4"
            >
              <div className="relative">
                <motion.i 
                  className="fa-brands fa-react text-6xl text-app-primary-400/50 absolute -left-8 -top-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.i 
                  className="fa-brands fa-node-js text-5xl text-app-secondary-400/50 absolute left-8 top-8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.i 
                  className="fa-brands fa-python text-4xl text-app-accent-400/50 absolute -left-4 top-16"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
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
                <motion.i 
                  className="fa-brands fa-aws text-6xl text-app-primary-400/50 absolute -right-8 -top-8"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.i 
                  className="fa-brands fa-docker text-5xl text-app-secondary-400/50 absolute right-8 top-8"
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.i 
                  className="fa-brands fa-github text-4xl text-app-accent-400/50 absolute -right-4 top-16"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Tech words cloud with enhanced animations */}
            <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
              {[
                { text: "Innovation", x: "20%", y: "15%", size: "xl", color: "app-primary-400" },
                { text: "Cloud", x: "75%", y: "25%", size: "lg", color: "app-secondary-400" },
                { text: "AI", x: "15%", y: "65%", size: "2xl", color: "app-accent-400" },
                { text: "Blockchain", x: "80%", y: "60%", size: "xl", color: "app-primary-400" },
                { text: "IoT", x: "40%", y: "75%", size: "lg", color: "app-secondary-400" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className={`absolute text-${item.size} font-bold text-${item.color}`}
                  style={{ left: item.x, top: item.y }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [1, 1.1, 1],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute left-1/4 top-1/4 w-32 h-32"
                style={{
                  background: 'linear-gradient(45deg, rgba(79, 70, 229, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute right-1/4 bottom-1/4 w-32 h-32"
                style={{
                  background: 'linear-gradient(45deg, rgba(236, 72, 153, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
                  borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                }}
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1],
                  borderRadius: ['70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
                }}
                transition={{
                  duration: 8,
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
              <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-app-primary-400 via-app-secondary-400 to-app-accent-400 filter drop-shadow-lg">
                LightTech
                <br />
                <span className="bg-gradient-to-r from-app-accent-400 via-app-secondary-400 to-app-primary-400 bg-clip-text">Solutions</span>
              </h1>
            </motion.div>

            {/* Tagline and Description */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-100 font-['Outfit'] max-w-3xl mx-auto leading-relaxed"
              >
                Transforming Ideas into
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-app-primary-400 to-app-secondary-400 font-bold"> Digital Reality</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="max-w-3xl mx-auto space-y-4"
              >
                <p className="text-lg text-gray-100 font-['Outfit']">
                  Pioneering the future of technology with innovative solutions that drive business growth and digital transformation.
                </p>
                <div className="flex justify-center gap-8 py-6">
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-app-primary-400 to-app-secondary-400 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-gray-100">Years Experience</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-app-secondary-400 to-app-accent-400 bg-clip-text text-transparent">200+</div>
                    <div className="text-sm text-gray-100">Projects Delivered</div>
                  </motion.div>
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-app-accent-400 to-app-primary-400 bg-clip-text text-transparent">50+</div>
                    <div className="text-sm text-gray-100">Tech Experts</div>
                  </motion.div>
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

              <button
                onClick={() => {
                  setOpen(true)
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-app-primary-500 to-app-secondary-500 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-app-primary-500/20"
              >
                <span className="relative z-10 text-white">Start Your Project</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-app-secondary-500 to-app-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      'linear-gradient(to right, var(--app-secondary-500), var(--app-primary-500))',
                      'linear-gradient(to right, var(--app-primary-500), var(--app-secondary-500))',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </button>
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
                <span className="text-sm text-gray-100">Scroll to explore our services</span>
                <svg
                  className="w-6 h-6 text-gray-100"
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
    </motion.div>
  )
}

export default HeroSection