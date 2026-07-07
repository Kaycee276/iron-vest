const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-[var(--color-text-muted)] text-sm tracking-widest uppercase">
      <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">
        Dashboard
      </a>
      <a href="#" className="hover:text-[var(--color-text-primary)] transition-colors">
        Markets
      </a>
      <a href="#" className="text-[var(--color-accent)] relative">
        Portfolio
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[var(--color-accent)]"></span>
      </a>
    </nav>
  );
};

export default Navbar;
