const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="w-full sticky top-0 z-[100] bg-gradient-to-r from-[#154935]/95 via-[#1a4f3a]/95 to-[#154935]/95 backdrop-blur-xl border-b border-[#20321E]/30 shadow-2xl shadow-[#0a1a0f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center relative overflow-hidden">
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-[#d5c39b] to-[#f7f3e8] rounded-full animate-float1 blur-sm"></div>
          <div className="absolute top-12 right-8 w-1.5 h-1.5 bg-gradient-to-r from-[#d5c39b] to-[#f7f3e8] rounded-full animate-float2 blur-sm"></div>
          <div className="absolute bottom-6 left-12 w-2 h-2 bg-gradient-to-r from-[#d5c39b] to-[#f7f3e8] rounded-full animate-float3 blur-sm"></div>
        </div>

        {/* LOGO - Glassmorphic with magnetic hover */}
        <h1
          className="font-bidena text-lg sm:text-xl lg:text-2xl text-[#d5c39b] cursor-pointer tracking-[.1em] relative group bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl border border-[#d5c39b]/30 shadow-xl shadow-[#d5c39b]/10 hover:shadow-2xl hover:shadow-[#d5c39b]/30 transition-all duration-500 ease-out-hover hover:scale-105 hover:-rotate-1 active:scale-95 font-bold"
          onClick={() => scrollTo("home")}
        >
          <span className="relative z-10">Hayden & Melissa</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#d5c39b]/20 to-[#f7f3e8]/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-center blur-sm"></div>
        </h1>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#f7f3e8] p-2 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* LINKS - Desktop + Mobile Responsive */}
        <div className="hidden lg:flex gap-2 lg:gap-6 xl:gap-8 text-sm xl:text-base tracking-[.05em] font-basker">
          {[
            { name: "Home", id: "home" },
            { name: "Our Story", id: "story" },
            { name: "Photo Gallery", id: "gallery" },
            { name: "The Big Day", id: "bigday" },
            { name: "Details", id: "details" },
            { name: "Contact", id: "contact" },
          ].map((link, index) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="relative px-4 py-3 text-[#f7f3e8] hover:text-[#d5c39b] transition-all duration-500 ease-out-hover group bg-white/5 backdrop-blur-sm rounded-2xl border border-[#20321E]/30 hover:border-[#d5c39b]/40 hover:bg-[#d5c39b]/5 hover:shadow-2xl hover:shadow-[#d5c39b]/20 active:scale-[0.97] overflow-hidden font-medium"
              style={{ 
                animationDelay: `${index * 60}ms`,
                animation: 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Magnetic Ripple Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d5c39b]/30 to-[#f7f3e8]/30 scale-0 group-hover:scale-100 origin-center transition-all duration-500 blur-sm"></div>
              
              {/* Floating Orb */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#d5c39b] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow scale-0 group-hover:scale-100 transition-all duration-500"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
