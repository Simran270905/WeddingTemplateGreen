import wedding from "../assets/image/weddingsetup.jpg";
import bgimg5 from "../assets/image/bgimg5.jpg";

const bigDayConfig = {
  id: "wedding-big-day-1",
  title: "Our Wedding Day",
  description: "We would be honored to have you with us as we say 'I do'",
  
  when: {
    title: "When",
    details: "Ceremony & Reception\nSunday, April 30, 2035\n5 – 11 PM",
  },
  
  where: {
    title: "Where",
    details: "Umaid Bhawan Palace\nCircuit House Rd, near Umaid Bhawan Museum, Cantt Area,\nJodhpur, Rajasthan 342006",
  },
  
  image: {
    src: wedding,
    alt: "Wedding setup",
  },
  
  imageCaption: "— Let's get this party started —",
  
  background: {
    src: bgimg5,
  },
};

const TheBigDay = () => {
  return (
    <section className="w-full">
      {/* TOP SPLIT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px] lg:min-h-[380px]">
        {/* LEFT – TITLE */}
        <div className="bg-right flex items-center justify-center px-6 py-10 lg:py-0 animate-bigday-left">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl text-gold text-center leading-tight font-chocolate">
            {bigDayConfig.title}
          </h2>
        </div>

        {/* RIGHT – DESCRIPTION */}
        <div className="bg-left flex items-center justify-center px-8 sm:px-16 lg:px-24 py-10 lg:py-0 animate-bigday-right">
          <p className="serif text-2xl sm:text-3xl lg:text-4xl text-gold text-center leading-tight font-chocolate">
            {bigDayConfig.description}
          </p>
        </div>
      </div>

      {/* WHEN & WHERE SECTION WITH BACKGROUND IMAGE */}
      <div
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${bigDayConfig.background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/85"></div>

        {/* CONTENT */}
        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-start">
          {/* WHEN */}
          <div className="animate-bigday-up">
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-3xl text-gold font-basker text-bold">
                {bigDayConfig.when.title}
              </h3>
              <span className="w-10 sm:w-14 h-[2px] bg-left"></span>
            </div>

            <p className="text-sm sm:text-base leading-loose text-soft">
              {bigDayConfig.when.details}
            </p>
          </div>

          {/* WHERE */}
          <div className="animate-bigday-up delay-150">
            <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-3xl text-gold font-basker text-bold">
                {bigDayConfig.where.title}
              </h3>
              <span className="w-10 sm:w-14 h-[2px] bg-left"></span>
            </div>

            <p className="text-sm sm:text-base leading-loose text-soft">
              {bigDayConfig.where.details}
            </p>
          </div>

          {/* IMAGE CARD */}
          <div className="bg-right/90 p-6 sm:p-8 text-center shadow-2xl rounded-3xl animate-bigday-card">
            <div className="overflow-hidden rounded-2xl mb-6 group">
              <img
                src={bigDayConfig.image.src}
                alt={bigDayConfig.image.alt}
                className="w-full h-[220px] sm:h-[240px] lg:h-[260px] object-cover transform group-hover:scale-[1.05] group-hover:-translate-y-1 transition-transform duration-[900ms] ease-out"
              />
            </div>

            <p className="text-[11px] sm:text-xs tracking-[0.28em] text-gold italic uppercase">
              {bigDayConfig.imageCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBigDay;
