import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Our Story", id: "story" },
    { name: "Photo Gallery", id: "gallery" },
    { name: "The Big Day", id: "bigday" },
    { name: "Details", id: "details" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-[100] bg-gradient-to-r from-[#154935]/95 via-[#1a4f3a]/95 to-[#154935]/95 backdrop-blur-xl border-b border-[#20321E]/30 shadow-2xl shadow-[#0a1a0f]/50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">

        {/* LOGO */}
        <h1
          onClick={() => scrollTo("home")}
          className="font-bidena text-lg sm:text-xl lg:text-2xl text-[#d5c39b]
                     cursor-pointer touch-manipulation tracking-widest
                     bg-white/10 px-4 py-2 rounded-2xl border
                     border-[#d5c39b]/30 active:scale-95"
        >
          Ananya & Rohan
        </h1>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#f7f3e8] p-2 rounded-xl
                     hover:bg-white/10 active:scale-95
                     cursor-pointer touch-manipulation"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-6 text-sm font-basker">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[#f7f3e8] px-4 py-2 rounded-xl
                         hover:text-[#d5c39b] hover:bg-white/10
                         transition cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
        ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-2 px-4 pb-4 bg-[#154935]/95 backdrop-blur-xl">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left w-full px-4 py-3 rounded-xl
                         text-[#f7f3e8] hover:text-[#d5c39b]
                         hover:bg-white/10 transition
                         cursor-pointer touch-manipulation"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
