import Hero from '../components/Hero';
import Features from '../components/Features';
import Security from '../components/Security';
import InvestmentPlans from '../components/InvestmentPlans';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <InvestmentPlans />
      <Security />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
