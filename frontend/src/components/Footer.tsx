const Footer = () => {
  return (
    <footer className="w-full bg-(--color-bg-base) border-t border-(--border-color) py-12 px-6 md:px-16 mt-auto overflow-hidden flex flex-col items-center">
      {/* Top Section: Two Links */}
      <div className="w-full max-w-7xl mx-auto flex justify-center sm:justify-start gap-8 mb-16">
        <a
          href="#faq"
          className="text-(--color-text-primary) font-['Orbitron'] uppercase tracking-widest text-sm hover:text-(--color-accent) transition-colors"
        >
          FAQ
        </a>
        <a
          href="#"
          className="text-(--color-text-primary) font-['Orbitron'] uppercase tracking-widest text-sm hover:text-(--color-accent) transition-colors"
        >
          Privacy Policy
        </a>
      </div>

      {/* Middle Section: Giant Muted Brand Name */}
      <div className="w-full flex justify-center mb-16 select-none">
        <h1 className="text-[15vw] leading-none font-['Orbitron'] font-black tracking-wider w-full text-center whitespace-nowrap flex justify-center">
          {'IRONVEST'.split('').map((char, index) => (
            <span
              key={index}
              className="text-(--color-text-muted) opacity-10 hover:text-(--color-text-primary) hover:opacity-100 transition-all duration-300 cursor-default"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      {/* Bottom Section: Year & Status */}
      <div className="w-full max-w-7xl mx-auto pt-8 border-t border-(--border-color)/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-(--color-text-muted) font-sans">
        <p>
          &copy; {new Date().getFullYear()} Ironvest Financial Infrastructure.
          All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="font-['Orbitron']">SYSTEM NOMINAL</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
