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

         
        </div>

       

        {/* RIGHT — CONTACT INFO */}
        <div className="text-soft text-sm leading-loose animate-contact-right">
          <p className="serif text-xl sm:text-2xl text-gold mb-4 sm:mb-6 font-basker">
            #RoAn
          </p>

          <p className="mb-4 font-basker">starxinnovation@gmail.com </p>
        </div>
      </div>

      {/* FOOTER */}
      <p className="text-center text-[11px] sm:text-xs text-soft mt-20 lg:mt-32 font-basker">
        © by StarX Innovations and IT Solution
      </p>
    </section>
  );
};

export default Contact;
