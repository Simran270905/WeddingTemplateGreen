import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

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

const galleryConfig = {
  id: "wedding-gallery-1",
  background: bgimg1,
  caption: "auto-playing memories",
  viewMoreButton: {
    showMore: "View More",
    showLess: "View Less",
  },
  images: [
    Gallery1, Gallery2, Gallery3, Gallery4,
    Gallery5, Gallery6, Gallery7, Gallery8,
    Gallery9, Gallery10, Gallery11, Gallery12,
    Gallery13, Gallery14, Gallery15, Gallery16
  ],
};

const CinematicPhotoGallery = () => {
  const topX = useMotionValue(0);
  const bottomX = useMotionValue(0);
  const [viewMore, setViewMore] = useState(false);

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

  const topImages = galleryConfig.images.slice(0, 8);
  const bottomImages = galleryConfig.images.slice(8, 16);
  const allImages = galleryConfig.images;

  const loopTop = [...topImages, ...topImages, ...topImages];
  const loopBottom = [...bottomImages, ...bottomImages, ...bottomImages];

  return (
    <>
      {/* SCROLL SECTION */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden text-white bg-neutral-950 w-full"
        style={{
          backgroundImage: `url(${galleryConfig.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/95" />

        {/* TOP STRIP */}
        <div className="relative z-10 h-[200px] overflow-hidden mb-16">
          <motion.div style={{ x: topX }} className="absolute inset-0 flex gap-6">
            {loopTop.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                className="w-[300px] h-[200px] object-cover rounded-2xl" 
                alt={`Gallery image ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="relative z-10 h-[200px] overflow-hidden">
          <motion.div style={{ x: bottomX }} className="absolute inset-0 flex gap-6 flex-row-reverse">
            {loopBottom.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                className="w-[300px] h-[200px] object-cover rounded-2xl" 
                alt={`Gallery image ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>

        <p className="relative z-10 mt-20 text-center text-xs tracking-widest text-white/50">
          {galleryConfig.caption}
        </p>

        {/* VIEW MORE BUTTON */}
        <div className="relative z-10 mt-8 text-center">
          <button
            onClick={() => setViewMore(!viewMore)}
            className="px-6 py-2 text-xs tracking-widest uppercase border border-white/40 text-white/70 hover:bg-white/10 transition"
          >
            {viewMore ? galleryConfig.viewMoreButton.showLess : galleryConfig.viewMoreButton.showMore}
          </button>
        </div>
      </section>

      {/* GRID GALLERY */}
      {viewMore && (
        <section className="bg-black py-20 px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {allImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-full object-cover rounded-xl shadow-xl hover:scale-105 transition"
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default CinematicPhotoGallery;
