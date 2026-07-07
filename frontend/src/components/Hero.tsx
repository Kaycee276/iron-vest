const Hero = () => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl md:text-6xl text-[var(--color-text-primary)] mb-6 uppercase tracking-widest">
        The <span className="text-[var(--color-accent)]">Midnight Forge</span>
      </h1>
      <p className="text-[var(--color-text-muted)] max-w-2xl text-lg mb-10 leading-relaxed font-sans">
        Welcome to Ironvest. Experience the raw power of unyielding financial security.
      </p>
      
      <div className="iron-card max-w-md w-full text-left">
        <h2 className="text-[var(--color-text-primary)] text-xl mb-4 uppercase tracking-wider">System Status</h2>
        <div className="flex justify-between items-center mb-2 font-sans">
          <span className="text-[var(--color-text-muted)]">Core Temp</span>
          <span className="text-[var(--color-text-primary)]">Optimal</span>
        </div>
        <div className="flex justify-between items-center mb-6 font-sans">
          <span className="text-[var(--color-text-muted)]">Security</span>
          <span className="text-[var(--color-text-primary)]">Ironclad</span>
        </div>
        <button className="iron-btn w-full">Initiate Sequence</button>
      </div>
    </main>
  );
};

export default Hero;
