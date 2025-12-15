const Contact = () => {
  return (
    <section className="bg-right py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 px-6 sm:px-10 lg:px-16">
        {/* LEFT — TITLE & RSVP */}
        <div className="animate-contact-left">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
            <h2 className="serif text-3xl sm:text-4xl text-gold font-basker">
              Contact
            </h2>
            <span className="w-10 sm:w-16 h-[2px] bg-left"></span>
          </div>

          <p className="text-soft text-sm leading-loose max-w-xs mb-8 sm:mb-12 font-basker">
            Feel free to write us some words of advice, ask us a question, or
            send us your best wishes!
          </p>

          <button className="bg-left text-gold serif tracking-[0.25em] px-8 sm:px-10 py-3 hover:opacity-90 hover:translate-y-0.5 transition-all duration-300 font-basker text-xs sm:text-sm uppercase">
            RSVP
          </button>
        </div>

        {/* CENTER — FORM */}
        <form className="space-y-6 animate-contact-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-[11px] text-soft tracking-wide">
                First name *
              </label>
              <input
                className="w-full bg-white/95 px-4 py-3 outline-none text-sm font-basker border border-transparent focus:border-gold transition-colors"
              />
            </div>
            <div>
              <label className="block mb-1 text-[11px] text-soft tracking-wide">
                Last name *
              </label>
              <input
                className="w-full bg-white/95 px-4 py-3 outline-none text-sm font-basker border border-transparent focus:border-gold transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[11px] text-soft tracking-wide">
              Email *
            </label>
            <input
              className="w-full bg-white/95 px-4 py-3 outline-none text-sm font-basker border border-transparent focus:border-gold transition-colors"
            />
          </div>

          <div>
            <label className="block mb-1 text-[11px] text-soft tracking-wide">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full bg-white/95 px-4 py-3 outline-none resize-none text-sm font-basker border border-transparent focus:border-gold transition-colors"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-left text-gold serif tracking-[0.25em] py-3 hover:opacity-90 hover:translate-y-0.5 transition-all duration-300 font-basker font-bold text-xs sm:text-sm uppercase"
          >
            Submit
          </button>
        </form>

        {/* RIGHT — CONTACT INFO */}
        <div className="text-soft text-sm leading-loose animate-contact-right">
          <p className="serif text-xl sm:text-2xl text-gold mb-4 sm:mb-6 font-basker">
            #Haylissa
          </p>

          <p className="mb-4 font-basker">info@mysite.com</p>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-[11px] sm:text-xs text-soft mt-20 lg:mt-32 font-basker">
        ©2035 by Hayden & Melissa.
      </p>
    </section>
  );
};

export default Contact;
