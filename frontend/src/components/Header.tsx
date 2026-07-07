import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-5 bg-[var(--color-bg-surface)] border-b border-[var(--border-color)]">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        {/* Monogram / Icon */}
        <div className="w-10 h-10 bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-bg-base)] text-2xl font-bold">
          IV
        </div>
        {/* Wordmark */}
        <div className="text-2xl tracking-widest uppercase">
          <span className="text-[var(--color-text-primary)]">Iron</span>
          <span className="text-[var(--color-accent)]">vest</span>
        </div>
      </div>

      {/* Center Navigation */}
      <Navbar />

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="text-[var(--color-text-primary)] text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
          Log In
        </button>
        <button className="iron-btn">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
