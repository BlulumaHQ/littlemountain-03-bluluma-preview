import Seo from '@/components/Seo';
import HeroSection from '@/components/HeroSection';
import InsuranceSection from '@/components/InsuranceSection';
import WelcomeSection from '@/components/WelcomeSection';
import TrustSection from '@/components/TrustSection';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';
import CdcpSection from '@/components/CdcpSection';
import ReviewsSection from '@/components/ReviewsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <>
      <Seo
        title="Little Mountain Dental Centre | Family Dentist in Vancouver"
        description="Modern family dental care in Vancouver with online booking, direct billing, CDCP support, and clear communication for new and returning patients."
        canonicalPath="/"
      />
      <HeroSection />
      <InsuranceSection />
      <WelcomeSection />
      <TrustSection />
      <ServicesSection />
      <CdcpSection />
      <ReviewsSection />
      <TeamSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default Index;

