import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

import Gallery1 from "../assets/image/Gallery1.jpg";
import Gallery2 from "../assets/image/Gallery2.jpg";
import Gallery3 from "../assets/image/Gallery3.jpg";
import Gallery4 from "../assets/image/Gallery1.jpg";
import Gallery5 from "../assets/image/Gallery2.jpg";
import Gallery6 from "../assets/image/Gallery3.jpg";
import Gallery7 from "../assets/image/Gallery1.jpg";
import Gallery8 from "../assets/image/Gallery2.jpg";
import Gallery9 from "../assets/image/Gallery3.jpg";
import Gallery10 from "../assets/image/Gallery1.jpg";
import Gallery11 from "../assets/image/Gallery2.jpg";
import Gallery12 from "../assets/image/Gallery3.jpg";
import Gallery13 from "../assets/image/Gallery1.jpg";
import Gallery14 from "../assets/image/Gallery2.jpg";
import Gallery15 from "../assets/image/Gallery3.jpg";
import Gallery16 from "../assets/image/Gallery1.jpg";

import bgimg1 from "../assets/image/bgimg1.jpg";

const CinematicPhotoGallery = () => {
  const topX = useMotionValue(0);
  const bottomX = useMotionValue(0);

  const SPEED = 0.25;

  useEffect(() => {
    let raf;
    const animate = () => {
      topX.set(topX.get() - SPEED);
      bottomX.set(bottomX.get() + SPEED);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const topImages = [
    Gallery1, Gallery2, Gallery3, Gallery4,
    Gallery5, Gallery6, Gallery7, Gallery8
  ];

  const bottomImages = [
    Gallery9, Gallery10, Gallery11, Gallery12,
    Gallery13, Gallery14, Gallery15, Gallery16
  ];

  const loopTop = [...topImages, ...topImages, ...topImages];
  const loopBottom = [...bottomImages, ...bottomImages, ...bottomImages];

  // Responsive hover animation variants
  const imageVariants = {
    initial: {
      scale: 1,
      brightness: 1,
      filter: "brightness(1) saturate(1)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    },
    hover: {
      scale: 1.03, // Reduced scale for mobile
      brightness: 1.15,
      filter: "brightness(1.15) saturate(1.2)",
      boxShadow: "0 35px 70px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 215, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  const goldBorderVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      pathLength: 0,
    },
    hover: {
      scale: [1, 1.02, 1],
      rotate: [0, 180],
      pathLength: 1,
      transition: {
        scale: {
          duration: 0.6,
          times: [0, 0.5, 1],
        },
        rotate: {
          duration: 2,
          ease: "linear",
        },
        pathLength: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden text-white bg-neutral-950 w-full"
      style={{
        backgroundImage: `url(${bgimg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark cinematic overlay - responsive opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 sm:from-black/80 via-black/65 sm:via-black/60 to-black/95 sm:to-black/90" />

      {/* Title - Fully responsive */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-32 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gold tracking-wide font-chocolate font-bold uppercase leading-tight">
          Our Moments
        </h2>
        <p className="mt-3 sm:mt-4 md:mt-6 text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.35em] text-white/60">
          memories • emotions • forever
        </p>
      </div>

      {/* TOP STRIP - Fully Responsive */}
      <div className="relative h-[120px] xs:h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] overflow-hidden mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-28 z-10 w-full">
        <motion.div
          style={{ x: topX }}
          className="absolute inset-0 flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full"
        >
          {loopTop.map((img, i) => (
            <motion.div
              key={i}
              className="shrink-0 w-[140px] h-[90px] xs:w-[160px] xs:h-[105px] sm:w-[180px] sm:h-[120px] md:w-[220px] md:h-[145px] lg:w-[280px] lg:h-[185px] xl:w-[340px] xl:h-[225px] 2xl:w-[380px] 2xl:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer touch-manipulation"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:saturate-110" 
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
              />
              
              {/* Gold Border Animation - Responsive stroke width */}
              <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                variants={goldBorderVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.path
                  d="M 3,3 L 97,3 L 97,97 L 3,97 Z"
                  stroke="#FFD700"
                  strokeWidth="1.5"
                  className="sm:strokeWidth-[2]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                />
              </motion.svg>

              {/* Gold Glow Effect - Responsive blur */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-yellow-300/8 to-yellow-400/15 rounded-2xl sm:rounded-3xl blur-sm sm:blur-md opacity-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM STRIP - Fully Responsive */}
      <div className="relative h-[120px] xs:h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] overflow-hidden z-10 w-full">
        <motion.div
          style={{ x: bottomX }}
          className="absolute inset-0 flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 flex-row-reverse w-full"
        >
          {loopBottom.map((img, i) => (
            <motion.div
              key={i}
              className="shrink-0 w-[140px] h-[90px] xs:w-[160px] xs:h-[105px] sm:w-[180px] sm:h-[120px] md:w-[220px] md:h-[145px] lg:w-[280px] lg:h-[185px] xl:w-[340px] xl:h-[225px] 2xl:w-[380px] 2xl:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer touch-manipulation"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:saturate-110" 
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
              />
              
              {/* Gold Border Animation */}
              <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                variants={goldBorderVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.path
                  d="M 3,3 L 97,3 L 97,97 L 3,97 Z"
                  stroke="#FFD700"
                  strokeWidth="1.5"
                  className="sm:strokeWidth-[2]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                />
              </motion.svg>

              {/* Gold Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-yellow-300/8 to-yellow-400/15 rounded-2xl sm:rounded-3xl blur-sm sm:blur-md opacity-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer text - Responsive */}
      <p className="relative z-10 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 text-center text-[8px] xs:text-[9px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-white/50 uppercase px-4">
        auto-playing memories
      </p>
    </section>
  );
};

export default CinematicPhotoGallery;
