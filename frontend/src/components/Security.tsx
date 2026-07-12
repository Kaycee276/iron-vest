import { Link } from 'react-router-dom';

const Security = () => {
  return (
    <section
      id="security"
      className="w-full py-24 px-6 md:px-16 border-t border-[var(--border-color)] bg-[var(--color-bg-base)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: Visual/Specs */}
        <div className="flex-1 w-full relative">
          <div className="bg-[var(--color-bg-surface)] border-l border-[var(--color-accent)] relative p-8">
            <div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-accent)]" />

            <h3 className="text-xl text-[var(--color-text-primary)] font-['Orbitron'] uppercase tracking-widest mb-6 border-b border-[var(--border-color)] pb-4">
              Infrastructure Protocol
            </h3>

            <div className="space-y-6 font-['Orbitron'] text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-[var(--color-text-muted)] tracking-wider">
                  NETWORK TOPOLOGY
                </span>
                <span className="text-[var(--color-text-primary)] font-bold">
                  DECENTRALIZED AIR-GAPPED
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--color-text-muted)] tracking-wider">
                  CONSENSUS MECHANISM
                </span>
                <span className="text-[var(--color-text-primary)] font-bold">
                  BYZANTINE FAULT TOLERANT
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--color-text-muted)] tracking-wider">
                  THREAT MITIGATION
                </span>
                <span className="text-[var(--color-text-primary)] font-bold text-green-500">
                  AUTONOMOUS NEURAL NET
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--color-text-muted)] tracking-wider">
                  CUSTODIAL MODEL
                </span>
                <span className="text-[var(--color-text-primary)] font-bold">
                  MULTI-PARTY COMPUTATION (MPC)
                </span>
              </div>
            </div>

            {/* Decorative Data Stream */}
            <div className="mt-8 pt-6 border-t border-[var(--border-color)] overflow-hidden h-16 relative">
              <div className="absolute inset-0 flex items-center whitespace-nowrap text-[var(--color-accent)] opacity-30 text-xs font-mono animate-pulse">
                0x8F9A...4B2C // BLOCK_HEIGHT: 19482910 // HASH_RATE: OPTIMAL //
                ENCRYPTION: SHA-256 // 0x8F9A...4B2C // BLOCK_HEIGHT: 19482910
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-sm text-[var(--color-accent)] font-['Orbitron'] tracking-[0.2em] uppercase mb-4">
            Fortress Architecture
          </h2>
          <h3 className="text-3xl md:text-5xl text-[var(--color-text-primary)] font-['Orbitron'] uppercase tracking-widest mb-8 leading-tight">
            Security Without <br /> Compromise
          </h3>
          <p className="text-[var(--color-text-muted)] font-sans text-base sm:text-lg mb-8 leading-relaxed">
            We operate on the premise of absolute paranoia. Ironvest utilizes
            hardware security modules (HSMs) distributed globally, requiring
            multi-layered biometric and geographic authentication for any
            withdrawal over zero limits.
          </p>
          <ul className="space-y-4 mb-10 text-left font-sans text-[var(--color-text-muted)]">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-accent)]" />
              100% Reserve Ratio at all times
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-accent)]" />
              Automated smart contract auditing
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[var(--color-accent)]" />
              Insurance coverage up to $500M per account
            </li>
          </ul>
          <Link to="/register" className="iron-btn px-8 py-3 w-full sm:w-auto">
            Review Security Whitepaper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Security;
