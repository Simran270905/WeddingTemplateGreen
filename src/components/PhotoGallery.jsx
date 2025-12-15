import Gallery1 from "../assets/image/Gallery1.jpg";
import Gallery2 from "../assets/image/Gallery2.jpg";
import Gallery3 from "../assets/image/Gallery3.jpg";
import bgimg1 from "../assets/image/bgimg1.jpg";

const PhotoGallery = () => {
  const images = [Gallery1, Gallery2, Gallery3, Gallery1, Gallery2, Gallery3];

  return (
    <section className="relative w-full py-32 lg:py-40 bg-[#f7fcfa] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-105"
        style={{ backgroundImage: `url(${bgimg1})` }}
      />

      {/* Light overlay (same feel you had) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fcfa]/85 via-[#f7fcfa]/78 to-[#f7fcfa]/85" />

      {/* Soft vignette for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.12),transparent_60%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.08),transparent_60%)] opacity-40" />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 mb-16 lg:mb-20 animate-gallery-heading">
          <div className="flex items-center gap-4 sm:gap-6">
            <h2 className="font-chocolate text-3xl sm:text-4xl text-gold tracking-wide">
              Photo Gallery
            </h2>
            <span className="w-10 sm:w-14 h-[2px] bg-gold" />
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto scroll-smooth no-scrollbar">
          <div className="flex items-center gap-10 sm:gap-16 lg:gap-20 px-8 sm:px-16 lg:px-24 snap-x snap-mandatory">
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[360px] lg:min-w-[520px] snap-center flex justify-center"
              >
                <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-3xl shadow-[0_26px_90px_rgba(0,0,0,0.45)] group animate-gallery-card">
                  {/* subtle glass edge */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/45 via-white/10 to-white/0 pointer-events-none" />
                  {/* image */}
                  <img
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded-3xl transform group-hover:scale-[1.06] group-hover:-translate-y-1 transition-transform duration-[900ms] ease-out"
                    loading="lazy"
                  />
                  {/* light sweep */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[900ms] ease-out" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <p className="mt-10 text-center text-[11px] sm:text-xs tracking-[0.28em] text-gold italic uppercase animate-gallery-hint">
          ← Scroll horizontally →
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
