import Header from "@/src/components/header"
import HeroSection from "@/src/components/hero-section"
import ServicesSection from "@/src/components/services-section"
import NewsExamplesSection from "@/src/components/news-examples-section"
import MediaPartnersSection from "@/src/components/media-partners-section"
import TrustedBrandsSection from "@/src/components/trusted-brands-section"
import TestimonialsSection from "@/src/components/testimonials-section"
import StatsSection from "@/src/components/stats-section"
import AboutSection from "@/src/components/about-section"
import ContactSection from "@/src/components/contact-section"
import Footer from "@/src/components/footer"
import ScrollToTop from "@/src/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <NewsExamplesSection />
      <MediaPartnersSection />
      <TrustedBrandsSection />
      <TestimonialsSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
