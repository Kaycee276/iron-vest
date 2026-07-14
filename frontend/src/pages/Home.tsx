import { useAuthStore } from '../store/useAuthStore';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { user, isAuthenticated, logout } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 w-full">
      <div className="iron-card max-w-2xl w-full bg-(--color-bg-surface-elevated) border-t-4 border-t-(--color-accent) relative overflow-hidden text-center">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>

        <div className="relative z-10 py-12 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl text-(--color-text-primary) uppercase tracking-widest mb-4 font-['Orbitron']">
            Welcome, {user?.name}
          </h1>
          <p className="text-(--color-text-muted) font-sans text-lg mb-8">
            Your secure portfolio is ready.
          </p>
          <button
            onClick={logout}
            className="iron-btn bg-transparent border border-(--color-accent) hover:bg-(--color-bg-surface-elevated)"
          >
            Secure Sign Out
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
