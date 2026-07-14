import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 py-3 bg-(--color-bg-surface)/50 backdrop-blur-sm bg-opacity-5 border-b border-(--border-color)">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        {/* Wordmark */}
        <Link
          to="/"
          className="text-2xl tracking-widest uppercase hover:text-(--color-accent) transition-colors"
        >
          IronVest{' '}
        </Link>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {!isAuthenticated && (
          <Link to="/login" className="iron-btn">
            Sign In
          </Link>
        )}
        {isAuthenticated && location.pathname !== '/home' && (
          <Link to="/home" className="iron-btn">
            Dashboard
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
