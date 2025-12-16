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
            Ananya, a textile artist in Jaipur, saw the world in threads and dyes. Her small shop was a riot of color, filled with hand-woven tapestries that seemed to capture the very soul of the Rajasthani desert—vivid sunsets, deep indigo nights, and the subtle gold dust of the ancient city. Her hands, perpetually stained with turmeric and madder root, wove not just patterns, but memories. She lived a life of quiet creation, focused on perfecting the intricate ikkat and bandhani techniques passed down from her grandmother, convinced that her destiny was confined to the warp and weft of her loom. It was here, amidst the spools of silk and cotton, that she first encountered Rohan, a young, ambitious architect from Mumbai who had come to the city to study the structural elegance of its historical havelis.
          </p>

          {/* Text 2 */}
          <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-bold font-basker animate-story-right delay-150">
            Rohan’s world was one of blueprint and precision, of stone and steel, but he was instantly captivated by the fluid, organic chaos of Ananya’s workspace. He commissioned a tapestry for his new design studio, but what he truly sought was to unravel the mystery of the woman behind the loom. She found his detailed sketches of arches and domes to be cold and rigid, while he saw her work as beautiful but ultimately fragile. Their early conversations were delightful clashes—he argued for the permanence of granite; she championed the expressive soul of muslin. Yet, as they spent time together, a remarkable synergy emerged. Ananya began to see the soaring ambition in Rohan’s lines, the way his designs could frame light and air, and Rohan realized that Ananya's complex, interlocked patterns were the very essence of structural integrity. They fell in love not by changing their passions, but by learning to weave their disparate crafts together, proving that the softest thread could beautifully anchor the strongest pillar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
