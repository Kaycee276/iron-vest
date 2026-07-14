import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const Hero = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 py-10 md:p-16 max-w-7xl mx-auto w-full gap-12 lg:gap-16">
      {/* Left side: Copy */}
      <div className="flex-1 text-center lg:text-left w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.1] text-(--color-text-primary) mb-6 uppercase tracking-widest">
          Institutional <br className="hidden sm:block" />
          <span className="text-(--color-accent)">Wealth Infrastructure</span>
        </h1>
        <p className="text-(--color-text-muted) max-w-xl mx-auto lg:mx-0 text-base sm:text-lg mb-10 leading-relaxed font-sans">
          Engineered for maximum security and optimal yield. Ironvest provides
          unyielding financial infrastructure for the modern, high-net-worth
          portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
          <Link
            to={isAuthenticated ? '/home' : '/register'}
            className="iron-btn px-8 py-3 w-full sm:w-auto text-center"
          >
            {isAuthenticated ? 'Go to Dashboard' : 'Open Account'}
          </Link>
          <a
            href="#plans"
            className="iron-btn bg-transparent border border-(--border-color) text-(--color-text-primary) hover:bg-(--color-bg-surface-elevated) px-8 py-3 w-full sm:w-auto"
          >
            Explore Yields
          </a>
        </div>
      </div>

      {/* Right side: Data Card */}
      <div className="iron-card flex-1 max-w-md w-full text-left border-t-4 border-(--color-accent) relative overflow-hidden">
        {/* Subtle grid background to look "machined" */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>

        <h2 className="text-(--color-text-primary) text-xl mb-6 uppercase tracking-widest border-b border-(--border-color) pb-4 relative z-10">
          Platform Metrics
        </h2>

        <div className="space-y-5 font-sans mb-8 relative z-10">
          <div className="flex justify-between items-center pb-3 border-b border-(--border-color)/30">
            <span className="text-(--color-text-muted)">
              Assets Under Management
            </span>
            <span className="text-(--color-text-primary) font-bold text-lg font-['Orbitron']">
              $15M+
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-(--border-color)/30">
            <span className="text-(--color-text-muted)">
              Target Annual Yield
            </span>
            <span className="text-green-500 font-bold text-lg font-['Orbitron']">
              8.5% - 12.4%
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-(--border-color)/30">
            <span className="text-(--color-text-muted)">Global Markets</span>
            <span className="text-(--color-text-primary) font-bold text-lg font-['Orbitron']">
              Active
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-(--color-text-muted)">Security Standard</span>
            <span className="text-(--color-accent) font-bold text-lg uppercase tracking-widest font-['Orbitron']">
              Ironclad
            </span>
          </div>
        </div>

        <Link
          to={isAuthenticated ? '/home' : '/register'}
          className="iron-btn w-full relative z-10 border border-(--color-accent) bg-transparent hover:bg-(--color-accent) hover:text-black"
        >
          {isAuthenticated ? 'View Dashboard' : 'View Live Markets'}
        </Link>
      </div>
    </main>
  );
};

export default Hero;
