import { Shield, TrendingUp, Lock, Globe } from 'lucide-react';

const features = [
  {
    title: 'Algorithmic Yield',
    description:
      'Proprietary trading algorithms optimized for absolute returns in all market conditions. Quant-driven and battle-tested.',
    icon: TrendingUp,
  },
  {
    title: 'Military-Grade Security',
    description:
      'Multi-signature custody, cold storage protocols, and real-time threat monitoring ensure your assets remain impenetrable.',
    icon: Shield,
  },
  {
    title: 'Cryptographic Audits',
    description:
      'Zero-knowledge proof verification of reserves. Absolute transparency maintained through cryptographic certainty.',
    icon: Lock,
  },
  {
    title: 'Global Access',
    description:
      'Unrestricted access to international markets, derivatives, and dark pool liquidity networks via our secure infrastructure.',
    icon: Globe,
  },
];

const Features = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 border-t border-(--border-color) bg-(--color-bg-surface) relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm text-(--color-accent) font-['Orbitron'] tracking-[0.2em] uppercase mb-4">
              Core Capabilities
            </h2>
            <h3 className="text-3xl md:text-5xl text-(--color-text-primary) font-['Orbitron'] uppercase tracking-widest max-w-2xl">
              Engineered for <br /> Uncompromising Performance
            </h3>
          </div>
          <a
            href="#security"
            className="iron-btn whitespace-nowrap bg-transparent border border-(--color-accent) hover:bg-(--color-accent) hover:text-black"
          >
            View Technical Specs
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="iron-card bg-(--color-bg-base) hover:bg-(--color-bg-surface-elevated) transition-colors duration-300 border border-(--border-color) group flex flex-col"
            >
              <div className="h-12 w-12 border border-(--border-color) flex items-center justify-center mb-6 bg-(--color-bg-surface) group-hover:border-(--color-accent) transition-colors">
                <feature.icon className="w-6 h-6 text-(--color-text-muted) group-hover:text-(--color-accent) transition-colors" />
              </div>
              <h4 className="text-lg text-(--color-text-primary) font-['Orbitron'] uppercase tracking-wider mb-3">
                {feature.title}
              </h4>
              <p className="text-(--color-text-muted) font-sans text-sm leading-relaxed flex-1">
                {feature.description}
              </p>

              <div className="mt-8 pt-4 border-t border-(--border-color) flex items-center justify-between text-xs text-(--color-text-muted) group-hover:text-(--color-accent) transition-colors font-['Orbitron']">
                <span>SYS_{idx + 1}</span>
                <span>ACTIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
