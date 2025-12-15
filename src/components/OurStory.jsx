import story from "../assets/image/OurStory.jpg";
import bgimg from "../assets/image/Gallery1.jpg";

const OurStory = () => {
  return (
    <section className="relative w-full py-32 lg:py-40 overflow-hidden">
      {/* Background Image – LIGHT as you gave */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgimg})` }}
      />

      {/* Same soft light gradient overlay you used */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f4fbf8]/95 via-[#f4fbf8]/90 to-[#f4fbf8]/95" />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Heading */}
        <div className="flex items-center gap-4 sm:gap-6 mb-16 sm:mb-20 animate-story-heading">
          <h2 className="serif text-3xl sm:text-4xl text-gold tracking-wide font-chocolate font-bold">
            Our Story
          </h2>
          <span className="w-10 sm:w-14 h-[2px] bg-gold" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="flex flex-col items-center animate-story-left">
            <div className="bg-white/70 p-4 sm:p-6 shadow-xl rounded-3xl backdrop-blur-sm border border-white/60 group transition-transform duration-700 ease-out hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={story}
                  alt="Our Story"
                  className="w-[240px] sm:w-[260px] lg:w-[260px] h-[320px] sm:h-[340px] object-cover transform group-hover:scale-[1.04] group-hover:-translate-y-1 transition-transform duration-[1100ms] ease-out"
                />
                {/* soft light sweep */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-[900ms] ease-out" />
              </div>
            </div>

            <p className="mt-5 text-[10px] sm:text-xs tracking-[0.28em] text-gold italic uppercase animate-fade-up text-center">
              — Loving the journey —
            </p>
          </div>

          {/* Text 1 */}
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-bold font-basker animate-story-right">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>

          {/* Text 2 */}
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-bold font-basker animate-story-right delay-150">
            At Wix we’re passionate about making templates that allow you to
            build fabulous websites and it’s all thanks to the support and
            feedback from users like you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
