const Details = () => {
  return (
    <section className="w-full">
      {/* TOP SPLIT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[280px] lg:min-h-[360px]">
        {/* LEFT */}
        <div className="bg-right flex items-center justify-center px-6 py-10 lg:py-0 animate-details-left">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl text-gold text-center leading-tight font-chocolate">
            Details
          </h2>
        </div>

        {/* RIGHT */}
        <div className="bg-left flex items-center justify-center px-8 sm:px-16 lg:px-24 py-10 lg:py-0 animate-details-right">
          <p className="serif text-2xl sm:text-3xl lg:text-4xl text-gold text-center leading-tight font-chocolate">
            I'm a paragraph. Click here to add your own text and edit me. Let
            your users get to know a little more about you.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-[1200px] mx-auto py-24 lg:py-32 px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start bg-white">
        {/* TEXT CONTENT */}
        <div className="animate-details-up">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
            <h3 className="serif text-3xl sm:text-4xl lg:text-5xl text-gold font-chocolate font-bold leading-tight">
              Getting There
            </h3>
            <span className="w-10 sm:w-16 h-[2px] bg-left" />
          </div>

          <p className="text-sm sm:text-base leading-loose text-soft font-semibold max-w-md">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>

        {/* MAP CARD */}
        <div className="bg-right/95 p-6 sm:p-8 text-center shadow-2xl rounded-3xl animate-details-card">
          <div className="overflow-hidden rounded-2xl mb-6 group">
            <iframe
              title="Wedding Location"
              src="https://www.google.com/maps?q=San+Francisco&output=embed"
              className="w-full h-[220px] sm:h-[240px] lg:h-[260px] border-0 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            ></iframe>
          </div>

          <p className="text-[11px] sm:text-xs tracking-[0.28em] italic text-gold uppercase">
            — It’s all about the journey —
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
