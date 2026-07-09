const Hero = () => {
  return (
    <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 py-10 md:p-16 max-w-7xl mx-auto w-full gap-12 lg:gap-16">
      {/* Left side: Copy */}
      <div className="flex-1 text-center lg:text-left w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.1] text-[var(--color-text-primary)] mb-6 uppercase tracking-widest">
          Institutional <br className="hidden sm:block" />
          <span className="text-[var(--color-accent)]">
            Wealth Infrastructure
          </span>
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-xl mx-auto lg:mx-0 text-base sm:text-lg mb-10 leading-relaxed font-sans">
          Engineered for maximum security and optimal yield. Ironvest provides
          unyielding financial infrastructure for the modern, high-net-worth
          portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
          <button className="iron-btn px-8 py-3 w-full sm:w-auto">
            Open Account
          </button>
          <button className="iron-btn bg-transparent border border-[var(--border-color)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface-elevated)] px-8 py-3 w-full sm:w-auto">
            Explore Yields
          </button>
        </div>
      </div>

      {/* Right side: Data Card */}
      <div className="iron-card flex-1 max-w-md w-full text-left bg-[var(--color-bg-surface-elevated)] relative overflow-hidden">
        {/* Subtle grid background to look "machined" */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>

        <h2 className="text-[var(--color-text-primary)] text-xl mb-6 uppercase tracking-widest border-b border-[var(--border-color)] pb-4 relative z-10">
          Platform Metrics
        </h2>

        <div className="space-y-5 font-sans mb-8 relative z-10">
          <div className="flex justify-between items-center pb-3 border-b border-[var(--border-color)]/30">
            <span className="text-[var(--color-text-muted)]">
              Assets Under Management
            </span>
            <span className="text-[var(--color-text-primary)] font-bold text-lg font-['Orbitron']">
              $15M+
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-[var(--border-color)]/30">
            <span className="text-[var(--color-text-muted)]">
              Target Annual Yield
            </span>
            <span className="text-green-500 font-bold text-lg font-['Orbitron']">
              8.5% - 12.4%
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-[var(--border-color)]/30">
            <span className="text-[var(--color-text-muted)]">
              Global Markets
            </span>
            <span className="text-[var(--color-text-primary)] font-bold text-lg font-['Orbitron']">
              Active
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[var(--color-text-muted)]">
              Security Standard
            </span>
            <span className="text-[var(--color-accent)] font-bold text-lg uppercase tracking-widest font-['Orbitron']">
              Ironclad
            </span>
          </div>
        </div>

        <button className="iron-btn w-full relative z-10 border border-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] hover:text-black">
          View Live Markets
        </button>
      </div>
    </main>
  );
};

export default Hero;
