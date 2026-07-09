import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-[var(--color-bg-surface)]/50 backdrop-blur-sm bg-opacity-5 border-b border-[var(--border-color)]">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        {/* Wordmark */}
        <Link
          to="/"
          className="text-2xl tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors"
        >
          IronVest{' '}
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <Link to="/login" className="iron-btn">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
