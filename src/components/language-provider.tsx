"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.company": "Perusahaan",
    "nav.contact": "Kontak",

    "services.pressRelease": "Press Release",
    "services.mediaRelations": "Media Relations",
    "services.digitalMarketing": "Digital Marketing",
    "services.contentCreation": "Content Creation",

    "company.about": "Tentang Kami",
    "company.warranty": "Ketentuan Garansi",
    "company.terms": "Persyaratan Layanan",
    "company.privacy": "Kebijakan Privasi",

    "breadcrumb.home": "Beranda",
    "breadcrumb.services": "Layanan",
    "breadcrumb.company": "Perusahaan",

    "service.pressRelease.title": "Press Release",
    "service.pressRelease.subtitle":
      "Distribusi press release profesional ke media nasional dan internasional",
    "service.pressRelease.description":
      "Layanan press release kami membantu Anda menyebarkan berita penting tentang perusahaan, produk, atau layanan Anda ke berbagai media partner. Dengan jaringan media yang luas dan pengalaman bertahun-tahun, kami memastikan pesan Anda sampai ke target audience yang tepat.",
    "service.pressRelease.features.title": "Fitur Layanan",
    "service.pressRelease.feature1": "Distribusi ke 200+ media nasional",
    "service.pressRelease.feature2": "Penulisan press release profesional",
    "service.pressRelease.feature3": "Laporan distribusi lengkap",
    "service.pressRelease.feature4": "Follow-up dengan media partner",

    "service.mediaRelations.title": "Media Relations",
    "service.mediaRelations.subtitle":
      "Membangun hubungan strategis dengan media partner untuk eksposur maksimal",
    "service.mediaRelations.description":
      "Layanan media relations kami fokus pada membangun dan memelihara hubungan jangka panjang dengan jurnalis dan media partner. Kami membantu Anda mendapatkan liputan media yang berkualitas dan berkelanjutan.",
    "service.mediaRelations.features.title": "Fitur Layanan",
    "service.mediaRelations.feature1": "Database media partner 500+",
    "service.mediaRelations.feature2": "Media monitoring & analisis",
    "service.mediaRelations.feature3": "Press conference management",
    "service.mediaRelations.feature4": "Crisis communication support",

    "service.digitalMarketing.title": "Digital Marketing",
    "service.digitalMarketing.subtitle":
      "Kampanye digital terintegrasi untuk meningkatkan brand awareness",
    "service.digitalMarketing.description":
      "Layanan digital marketing kami menggabungkan strategi konten, media sosial, dan publikasi online untuk menciptakan kampanye yang efektif. Kami membantu brand Anda hadir kuat di dunia digital.",
    "service.digitalMarketing.features.title": "Fitur Layanan",
    "service.digitalMarketing.feature1": "Social media management",
    "service.digitalMarketing.feature2": "Content marketing strategy",
    "service.digitalMarketing.feature3": "Influencer collaboration",
    "service.digitalMarketing.feature4": "Performance analytics",

    "service.contentCreation.title": "Content Creation",
    "service.contentCreation.subtitle":
      "Pembuatan konten berkualitas tinggi untuk berbagai platform media",
    "service.contentCreation.description":
      "Tim kreatif kami menghasilkan konten yang engaging dan relevan untuk berbagai kebutuhan publikasi Anda. Dari artikel, infografis, hingga video content, kami pastikan setiap konten selaras dengan brand identity Anda.",
    "service.contentCreation.features.title": "Fitur Layanan",
    "service.contentCreation.feature1": "Article & blog writing",
    "service.contentCreation.feature2": "Infographic design",
    "service.contentCreation.feature3": "Video content production",
    "service.contentCreation.feature4": "Brand storytelling",

    "pricing.title": "Paket Layanan",
    "pricing.subtitle": "Pilih paket yang sesuai dengan kebutuhan bisnis Anda",
    "pricing.basic": "Basic",
    "pricing.professional": "Professional",
    "pricing.enterprise": "Enterprise",
    "pricing.month": "/bulan",
    "pricing.contact": "Hubungi Kami",
    "pricing.getStarted": "Mulai Sekarang",
    "pricing.popular": "Terpopuler",

    // Hero Section
    "hero.title": "Publikasi Media Profesional untuk Brand Anda",
    "hero.subtitle":
      "Tingkatkan visibilitas dan kredibilitas bisnis Anda dengan layanan publikasi media terpercaya dari Rilisan.com",
    "hero.cta": "Mulai Sekarang",
    "hero.contact": "Kontak Kami",

    // Services
    "services.title": "Layanan Kami",
    "services.subtitle":
      "Solusi publikasi media yang komprehensif untuk kebutuhan bisnis Anda",
    "services.press.title": "Press Release",
    "services.press.desc":
      "Distribusi press release ke media nasional dan internasional",
    "services.media.title": "Media Relations",
    "services.media.desc": "Membangun hubungan strategis dengan media partner",
    "services.digital.title": "Digital Marketing",
    "services.digital.desc":
      "Kampanye digital terintegrasi untuk maksimal exposure",
    "services.content.title": "Content Creation",
    "services.content.desc":
      "Pembuatan konten berkualitas tinggi untuk berbagai platform",

    // Stats
    "stats.title": "Pencapaian Kami",
    "stats.subtitle":
      "Angka-angka yang membuktikan dedikasi kami dalam memberikan layanan terbaik",
    "stats.clients": "Klien Puas",
    "stats.publications": "Publikasi Berhasil",
    "stats.media": "Media Partner",
    "stats.experience": "Tahun Pengalaman",

    // About
    "about.title": "Mengapa Memilih Rilisan.com?",
    "about.subtitle":
      "Kami adalah partner terpercaya untuk semua kebutuhan publikasi media Anda",
    "about.experience.title": "Pengalaman Terpercaya",
    "about.experience.desc": "Lebih dari 5 tahun melayani berbagai industri",
    "about.network.title": "Jaringan Media Luas",
    "about.network.desc":
      "Akses ke 500+ media partner nasional dan internasional",
    "about.results.title": "Hasil Terukur",
    "about.results.desc": "ROI yang jelas dengan laporan komprehensif",

    // Contact
    "contact.title": "Siap Meningkatkan Visibilitas Brand Anda?",
    "contact.subtitle": "Hubungi kami sekarang untuk konsultasi gratis",
    "contact.cta": "Hubungi Kami",
    "contact.email": "Email",
    "contact.phone": "Telepon",
    "contact.address": "Alamat",
    "contact.hero.title": "Hubungi Kami",
    "contact.hero.subtitle": "Konsultasi gratis untuk kebutuhan publikasi Anda",

    // Footer
    "footer.tagline": "Partner terpercaya untuk publikasi media profesional",
    "footer.services": "Layanan",
    "footer.company": "Perusahaan",
    "footer.contact": "Kontak",
    "footer.about": "Tentang Kami",
    "footer.warranty": "Ketentuan Garansi",
    "footer.terms": "Persyaratan Layanan",
    "footer.privacy": "Kebijakan Privasi",
    "footer.rights": "Hak Cipta Dilindungi",

    // Scroll to top
    "scroll.top": "Kembali ke Atas",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.company": "Company",
    "nav.contact": "Contact",

    "services.pressRelease": "Press Release",
    "services.mediaRelations": "Media Relations",
    "services.digitalMarketing": "Digital Marketing",
    "services.contentCreation": "Content Creation",

    "company.about": "About Us",
    "company.warranty": "Warranty Terms",
    "company.terms": "Terms of Service",
    "company.privacy": "Privacy Policy",

    "breadcrumb.home": "Home",
    "breadcrumb.services": "Services",
    "breadcrumb.company": "Company",

    "service.pressRelease.title": "Press Release",
    "service.pressRelease.subtitle":
      "Professional press release distribution to national and international media",
    "service.pressRelease.description":
      "Our press release service helps you spread important news about your company, products, or services to various media partners. With our extensive media network and years of experience, we ensure your message reaches the right target audience.",
    "service.pressRelease.features.title": "Service Features",
    "service.pressRelease.feature1": "Distribution to 200+ national media",
    "service.pressRelease.feature2": "Professional press release writing",
    "service.pressRelease.feature3": "Complete distribution reports",
    "service.pressRelease.feature4": "Follow-up with media partners",

    "service.mediaRelations.title": "Media Relations",
    "service.mediaRelations.subtitle":
      "Building strategic relationships with media partners for maximum exposure",
    "service.mediaRelations.description":
      "Our media relations service focuses on building and maintaining long-term relationships with journalists and media partners. We help you get quality and sustainable media coverage.",
    "service.mediaRelations.features.title": "Service Features",
    "service.mediaRelations.feature1": "500+ media partner database",
    "service.mediaRelations.feature2": "Media monitoring & analysis",
    "service.mediaRelations.feature3": "Press conference management",
    "service.mediaRelations.feature4": "Crisis communication support",

    "service.digitalMarketing.title": "Digital Marketing",
    "service.digitalMarketing.subtitle":
      "Integrated digital campaigns to increase brand awareness",
    "service.digitalMarketing.description":
      "Our digital marketing service combines content strategy, social media, and online publication to create effective campaigns. We help your brand have a strong presence in the digital world.",
    "service.digitalMarketing.features.title": "Service Features",
    "service.digitalMarketing.feature1": "Social media management",
    "service.digitalMarketing.feature2": "Content marketing strategy",
    "service.digitalMarketing.feature3": "Influencer collaboration",
    "service.digitalMarketing.feature4": "Performance analytics",

    "service.contentCreation.title": "Content Creation",
    "service.contentCreation.subtitle":
      "High-quality content creation for various media platforms",
    "service.contentCreation.description":
      "Our creative team produces engaging and relevant content for all your publication needs. From articles, infographics, to video content, we ensure every content aligns with your brand identity.",
    "service.contentCreation.features.title": "Service Features",
    "service.contentCreation.feature1": "Article & blog writing",
    "service.contentCreation.feature2": "Infographic design",
    "service.contentCreation.feature3": "Video content production",
    "service.contentCreation.feature4": "Brand storytelling",

    "pricing.title": "Service Packages",
    "pricing.subtitle": "Choose the package that suits your business needs",
    "pricing.basic": "Basic",
    "pricing.professional": "Professional",
    "pricing.enterprise": "Enterprise",
    "pricing.month": "/month",
    "pricing.contact": "Contact Us",
    "pricing.getStarted": "Get Started",
    "pricing.popular": "Most Popular",

    // Hero Section
    "hero.title": "Professional Media Publication for Your Brand",
    "hero.subtitle":
      "Increase your business visibility and credibility with trusted media publication services from Rilisan.com",
    "hero.cta": "Get Started",
    "hero.contact": "Contact Us",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "Comprehensive media publication solutions for your business needs",
    "services.press.title": "Press Release",
    "services.press.desc":
      "Distribution of press releases to national and international media",
    "services.media.title": "Media Relations",
    "services.media.desc":
      "Building strategic relationships with media partners",
    "services.digital.title": "Digital Marketing",
    "services.digital.desc":
      "Integrated digital campaigns for maximum exposure",
    "services.content.title": "Content Creation",
    "services.content.desc":
      "High-quality content creation for various platforms",

    // Stats
    "stats.title": "Our Achievements",
    "stats.subtitle":
      "Numbers that prove our dedication to providing the best service",
    "stats.clients": "Happy Clients",
    "stats.publications": "Successful Publications",
    "stats.media": "Media Partners",
    "stats.experience": "Years Experience",

    // About
    "about.title": "Why Choose Rilisan.com?",
    "about.subtitle":
      "We are your trusted partner for all media publication needs",
    "about.experience.title": "Trusted Experience",
    "about.experience.desc": "More than 5 years serving various industries",
    "about.network.title": "Wide Media Network",
    "about.network.desc":
      "Access to 500+ national and international media partners",
    "about.results.title": "Measurable Results",
    "about.results.desc": "Clear ROI with comprehensive reporting",

    // Contact
    "contact.title": "Ready to Boost Your Brand Visibility?",
    "contact.subtitle": "Contact us now for a free consultation",
    "contact.cta": "Contact Us",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle": "Free consultation for your publication needs",

    // Footer
    "footer.tagline": "Trusted partner for professional media publication",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.about": "About Us",
    "footer.warranty": "Warranty Terms",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
    "footer.rights": "All Rights Reserved",

    // Scroll to top
    "scroll.top": "Back to Top",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "id" || saved === "en")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["id"]] || key
    );
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
