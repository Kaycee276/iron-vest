import { Link } from 'react-router-dom';
import plans from '../../../data/plans.json';

const InvestmentPlans = () => {
  return (
    <section
      id="plans"
      className="w-full py-24 px-6 md:px-16 border-t border-[var(--border-color)] bg-[var(--color-bg-base)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[var(--color-accent)] font-['Orbitron'] tracking-[0.2em] uppercase mb-4">
            Structured Products
          </h2>
          <h3 className="text-3xl md:text-5xl text-[var(--color-text-primary)] font-['Orbitron'] uppercase tracking-widest">
            Investment Protocols
          </h3>
          <p className="text-[var(--color-text-muted)] mt-6 max-w-2xl mx-auto font-sans">
            Deploy your capital into our proprietary algorithms. Principal and
            accumulated yield are guaranteed and distributed upon maturity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`iron-card flex flex-col relative transition-transform duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? 'bg-[var(--color-bg-surface-elevated)] border-[var(--color-accent)] shadow-[0_0_10px_rgba(139,69,19,0.15)]'
                  : 'bg-[var(--color-bg-base)] border-[var(--border-color)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-accent)]" />
              )}

              <div className="mb-8">
                <h4 className="text-xl text-[var(--color-text-primary)] font-['Orbitron'] uppercase tracking-widest mb-2">
                  {plan.name}
                </h4>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-4xl font-['Orbitron'] font-bold text-[var(--color-text-primary)]">
                    {plan.targetApy}
                  </span>
                  <span className="text-sm text-[var(--color-text-muted)] mb-1">
                    Target APY
                  </span>
                </div>

                <div className="space-y-3 font-sans text-sm mb-6 border-y border-[var(--border-color)]/30 py-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)]">
                      Min. Deposit
                    </span>
                    <span className="text-[var(--color-text-primary)] font-bold">
                      {plan.minInvestment}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)]">
                      Lock-up Period
                    </span>
                    <span className="text-[var(--color-text-primary)] font-bold">
                      {plan.lockup}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-text-muted)]">
                      Payout
                    </span>
                    <span className="text-[var(--color-text-primary)] font-bold">
                      {plan.payout}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 font-sans text-sm text-[var(--color-text-muted)]">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6">
                <Link
                  to="/register"
                  className={`w-full text-center flex items-center justify-center py-3 font-['Orbitron'] uppercase tracking-widest text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)]'
                      : 'bg-transparent border border-[var(--color-accent)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent)] hover:text-black'
                  }`}
                >
                  Deploy Capital
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
