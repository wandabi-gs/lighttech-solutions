import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Services from "~/components/landing-page/services";
import Footer from "~/components/Footer";
import WhyUs from "~/components/landing-page/why-us";
import HeroSection from "~/components/landing-page/hero-section";
import TeamSection from "~/components/landing-page/team";

const RevealSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="relative overflow-hidden"
    >
      {/* Modern reveal animation */}
      <motion.div
        initial={{ height: "100%" }}
        animate={isInView ? { height: "0%" } : { height: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-r from-app-primary-500/20 via-app-primary-400/30 to-app-primary-500/20 origin-top z-10"
        style={{
          backgroundSize: "200% 100%",
          animation: isInView ? "gradientFlow 2s ease-in-out infinite" : "none",
        }}
      />

      {/* Enhanced scanning line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 1 }}
        animate={isInView ? 
          { 
            scaleX: [0, 1, 1], 
            opacity: [1, 1, 0],
            x: ["0%", "0%", "100%"]
          } : 
          { scaleX: 0, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-app-primary-400 via-app-secondary-400 to-app-primary-400 origin-left z-10"
      />

      {children}
    </motion.div>
  );
};

const FloatingElement = ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  
  const parallaxY = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
        >
          <div className="relative">
            {/* Modern loading animation */}
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="w-20 h-20 relative"
            >
              <div className="absolute inset-0 border-4 border-app-primary-400 rounded-xl" 
                style={{ 
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  animation: "borderGlow 2s ease-in-out infinite"
                }}
              />
              <motion.div
                animate={{ 
                  background: [
                    "linear-gradient(45deg, var(--app-primary-400), var(--app-secondary-400))",
                    "linear-gradient(225deg, var(--app-primary-400), var(--app-secondary-400))",
                    "linear-gradient(45deg, var(--app-primary-400), var(--app-secondary-400))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-2 rounded-lg"
                style={{ 
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
        >
          <motion.div style={{ y: parallaxY }} className="relative">
            <HeroSection />
          </motion.div>

          <div className="space-y-24 pb-24">
            <RevealSection>
              <Services />
            </RevealSection>

            <RevealSection>
              <WhyUs />
            </RevealSection>

            <RevealSection>
              <TeamSection />
            </RevealSection>
          </div>

          <Footer />

          {/* Interactive floating elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden block md:hidden">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: `${Math.random() * 100}vw`, 
                  y: `${Math.random() * 100}vh` 
                }}
                animate={{
                  x: [
                    `${Math.random() * 100}vw`,
                    `${Math.random() * 100}vw`,
                    `${Math.random() * 100}vw`
                  ],
                  y: [
                    `${Math.random() * 100}vh`,
                    `${Math.random() * 100}vh`,
                    `${Math.random() * 100}vh`
                  ]
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div 
                  className="w-32 h-32 rounded-full"
                  style={{
                    background: `radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)`,
                    filter: "blur(8px)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
