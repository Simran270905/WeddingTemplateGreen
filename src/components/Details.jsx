const detailsConfig = {
  id: "wedding-details-1",
  topTitle: "Details",
  topDescription: "Your presence means the world to us as we begin our life together. Find all the details and RSVP instructions inside this invitation. We can’t wait to celebrate with you!",
  bottomTitle: "Getting There",
  bottomDescription: "We are so grateful that you are traveling to celebrate with us!",
  map: {
    title: "Wedding Location",
    src: "https://www.google.com/maps?q=Umaid+Bhawan+Palace&output=embed",
  },
  mapCaption: "— It's all about the journey —",
};

const Details = () => {
  return (
    <section className="w-full">
      {/* TOP SPLIT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] lg:min-h-[360px]">
        {/* LEFT */}
        <div className="bg-right flex items-center justify-center px-6 py-10 lg:py-0 animate-details-left">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl text-gold text-center leading-tight font-chocolate">
            {detailsConfig.topTitle}
          </h2>
        </div>

        {/* RIGHT */}
        <div className="bg-left flex items-center justify-center px-8 sm:px-16 lg:px-24 py-10 lg:py-0 animate-details-right">
          <p className="serif text-2xl sm:text-3xl lg:text-4xl text-gold text-center leading-tight font-chocolate">
            {detailsConfig.topDescription}
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-[1200px] mx-auto py-24 lg:py-32 px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start bg-white">
        {/* TEXT CONTENT */}
        <div className="animate-details-up">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
            <h3 className="serif text-3xl sm:text-4xl lg:text-5xl text-gold font-chocolate font-bold leading-tight">
              {detailsConfig.bottomTitle}
            </h3>
            <span className="w-10 sm:w-16 h-[2px] bg-left" />
          </div>

          <p className="mb-4 font-basker">
            {detailsConfig.bottomDescription}
          </p>
        </div>

        {/* MAP CARD */}
        <div className="bg-right/95 p-6 sm:p-8 text-center shadow-2xl rounded-3xl animate-details-card">
          <div className="overflow-hidden rounded-2xl mb-6 group">
            <iframe
              title={detailsConfig.map.title}
              src={detailsConfig.map.src}
              className="w-full h-[220px] sm:h-[240px] lg:h-[260px] border-0 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>

          <p className="text-[11px] sm:text-xs tracking-[0.28em] italic text-gold uppercase">
            {detailsConfig.mapCaption}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
