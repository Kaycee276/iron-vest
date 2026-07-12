const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-() text-sm tracking-widest uppercase">
      <a href="#" className="hover:text-() transition-colors">
        Dashboard
      </a>
      <a href="#" className="hover:text-() transition-colors">
        Markets
      </a>
      <a href="#" className="text-() relative">
        Portfolio
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-()"></span>
      </a>
    </nav>
  );
};

export default Navbar;
