import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What is the minimum capital requirement?',
    answer:
      'Standard institutional accounts require a minimum deposit of $100,000. For bespoke algorithmic strategies, the threshold is $500,000.',
  },
  {
    question: 'How is custodial security maintained?',
    answer:
      'We employ a decentralized, air-gapped network topology using Multi-Party Computation (MPC). Private keys are never held in a single geographic location.',
  },
  {
    question: 'Are algorithmic yields guaranteed?',
    answer:
      'No yield is absolute. However, our proprietary quant-driven models are backtested and optimized for risk-adjusted, absolute returns across all market conditions.',
  },
  {
    question: 'Can I withdraw my funds at any time?',
    answer:
      'Yes. Standard liquidity pools allow for T+1 settlement. Specialized lock-up strategies require advanced notice as per the smart contract terms.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-24 px-6 md:px-16 border-t border-[var(--border-color)] bg-[var(--color-bg-surface)]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-[var(--color-accent)] font-['Orbitron'] tracking-[0.2em] uppercase mb-4">
            Knowledge Base
          </h2>
          <h3 className="text-3xl md:text-5xl text-[var(--color-text-primary)] font-['Orbitron'] uppercase tracking-widest">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="iron-card bg-[var(--color-bg-base)] border border-[var(--border-color)] overflow-hidden cursor-pointer group"
              onClick={() => toggleFaq(idx)}
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="text-lg text-[var(--color-text-primary)] font-['Orbitron'] uppercase tracking-wider group-hover:text-[var(--color-accent)] transition-colors">
                  {faq.question}
                </h4>
                <Plus
                  className={`text-[var(--color-accent)] transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-45' : ''}`}
                />
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-[var(--color-text-muted)] font-sans text-base leading-relaxed pt-4 border-t border-[var(--border-color)]/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
