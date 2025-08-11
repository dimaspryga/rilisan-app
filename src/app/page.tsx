import AboutSection from "../components/about-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import ScrollToTop from "../components/scroll-to-top";
import ServicesSection from "../components/services-section";
import StatsSection from "../components/stats-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
