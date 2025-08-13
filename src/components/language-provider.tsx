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
    "nav.about": "Tentang",
    "nav.contact": "Kontak",

    // News Examples Section
    "news.title": "Contoh Pemberitaan Klien Rilisan",
    "news.subtitle":
      "Lihat bagaimana kami membantu klien mendapatkan eksposur media yang maksimal",
    "news.loadMore": "Lihat Selengkapnya",

    // Media Partners Section
    "partners.title": "Media Partner Kami",
    "partners.subtitle":
      "Dipercaya oleh berbagai media terkemuka untuk distribusi berita berkualitas",

    // Trusted Brands Section
    "brands.title": "Rilisan Dipercaya Oleh Brand Ternama",
    "brands.subtitle":
      "Rilisan.com telah digunakan oleh berbagai klien, mulai dari personal, organisasi, perusahaan nasional, hingga perusahaan multinasional.",

    // Testimonials Section
    "testimonials.title": "Apa Yang Mereka Katakan Tentang Rilisan?",
    "testimonials.subtitle":
      "Dengarkan pengalaman klien yang telah merasakan layanan terbaik kami",

    // Hero Section
    "hero.title": "Bikin Usaha Kamu Eksis Di Media Nasional",
    "hero.subtitle":
      "Dengan RILISAN kamu bisa publikasikan berita bisnismu cepat, terpercaya, dan tayang di media nasional ternama. Dari penulisan hingga tayang, semua kami urus!",
    "hero.cta": "Pesan Sekarang!",
    "hero.learn": "Pelajari Lebih Lanjut",

    // Services
    "services.title": "Layanan Rilisan",
    "services.subtitle":
      "Solusi publikasi media yang komprehensif untuk kebutuhan bisnis Anda",
    "services.article.title": "Iklan Artikel",
    "services.article.desc":
      "Iklan dalam bentuk artikel berita yang tayang pada website media nasional. Bikin usahamu eksis dan mudah ditemukan di mesin pencarian Google",
    "services.banner.title": "Digital Banner",
    "services.banner.desc":
      "Iklan dalam bentuk digital banner yang tayang pada media nasional. Tambah terus awareness usahamu dengan banner ke jutaan audiens.",
    "services.video.title": "Video on Warranty",
    "services.video.desc":
      "Eksis di Youtube media nasional kayak brand besar! Iklan usahamu dijahit dan ditayangkan di video channel Youtube grup media nasional. UMKM juga bisa!",

    // Stats
    "stats.title": "Pencapaian Kami",
    "stats.subtitle":
      "Angka-angka yang membuktikan dedikasi kami dalam memberikan layanan terbaik",
    "stats.clients": "Klien Puas",
    "stats.publications": "Publikasi Berhasil",
    "stats.media": "Media Partner",
    "stats.experience": "Tahun Pengalaman",

    // About
    "about.title": "Alasan Pilih RILISAN",
    "about.subtitle":
      "Kami adalah partner terpercaya untuk semua kebutuhan publikasi media Anda",
    "about.point1.title": "Bisa Mulai dari 1 Media Saja",
    "about.point1.desc": "Gak harus langsung paket besar",
    "about.point2.title": "Akses ke Puluhan Media Nasional Ternama",
    "about.point2.desc":
      "Dari Kompas, Tribun, hingga media niche industri—kami punya koneksi dan sistem publikasi langsung.",
    "about.point3.title": "Semua Event Bisa Dihandle",
    "about.point3.desc":
      "Punya event? Launching fitur baru? Peluncuran produk? Atau mau urus centang biru biar brand makin dipercaya publik? Bisa semua!",
    "about.point4.title": "Proses Cepat",
    "about.point4.desc":
      "Proses tayang bisa dalam hitungan hari. Kamu dapat bukti tayang resmi & bisa dipantau.",
    "about.point5.title": "Jejak Digital Lebih Kuat",
    "about.point5.desc":
      "Bisa Buat Jejak Digital Bisnismu Lebih Kuat. Bikin brand-mu lebih mudah ditemukan dan dipercaya calon klien.",

    // Contact
    "contact.title": "Siap Eksis di Media Nasional?",
    "contact.subtitle":
      "Konsultasi gratis dengan tim RILISAN dan dapatkan strategi publikasi media yang tepat untuk UMKM Anda",
    "contact.cta": "Hubungi Kami Sekarang",
    "contact.email": "Email",
    "contact.phone": "Telepon",
    "contact.address": "Alamat",

    "contact.questions.title": "Pertanyaan Umum",
    "contact.questions.one": "Berapa lama proses publikasi?",
    "contact.questions.descone":
      "Proses publikasi biasanya memakan waktu 3-7 hari kerja tergantung paket yang dipilih.",
    "contact.questions.two": "Apakah ada garansi?",
    "contact.questions.desctwo":
      "Ya, kami memberikan garansi sesuai dengan ketentuan yang berlaku.",
    "contact.questions.three": "Bagaimana cara pembayaran?",
    "contact.questions.descthree":
      "Pembayaran dapat dilakukan melalui transfer bank atau payment gateway yang tersedia.",

    // Footer
    "footer.tagline": "Partner terpercaya untuk publikasi media profesional",
    "footer.services": "Layanan",
    "footer.company": "Perusahaan",
    "footer.contact": "Kontak",
    "footer.about": "Tentang Kami",
    "footer.team": "Tim",
    "footer.career": "Karir",
    "footer.blog": "Blog",
    "footer.rights": "Hak Cipta Dilindungi",

    // Scroll to top
    "scroll.top": "Kembali ke Atas",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    // News Examples Section
    "news.title": "Client News Release Examples",
    "news.subtitle": "See how we help clients gain maximum media exposure",
    "news.loadMore": "See More",

    // Media Partners Section
    "partners.title": "Our Media Partners",
    "partners.subtitle":
      "Trusted by various leading media outlets for quality news distribution",

    // Trusted Brands Section
    "brands.title": "Releases Trusted by Leading Brands",
    "brands.subtitle":
      "Rilisan.com has been used by a variety of clients, from individuals and organizations to national companies and multinational corporations.",

    // Testimonials Section
    "testimonials.title": "What Are They Saying About Releases?",
    "testimonials.subtitle":
      "Hear the experiences of clients who have experienced our best service",

    // Hero Section
    "hero.title": "Make Your Business Visible in National Media",
    "hero.subtitle":
      "With RILISAN, you can publish your business news quickly, reliably, and get it published in leading national media. From writing to broadcast, we take care of everything!",
    "hero.cta": "Order Now!",
    "hero.learn": "Learn More",

    // Services
    "services.title": "Release Services",
    "services.subtitle":
      "Comprehensive media publication solutions for your business needs",
    "services.article.title": "Article Ads",
    "services.article.desc":
      "Advertisements in the form of news articles that appear on national media websites. Make your business visible and easily found on Google search engines",
    "services.banner.title": "Digital Banner",
    "services.banner.desc":
      "Advertisements in the form of digital banners that appear on National media. Continuously increase your business awareness with banners to millions of audiences.",

    "services.video.title": "Video on Warranty",
    "services.video.desc":
      "Be present on national media YouTube like a big brand! Your business ads are stitched and broadcast on national media group YouTube video channels. SMEs can too!",

    // Stats
    "stats.title": "Our Achievements",
    "stats.subtitle":
      "Numbers that prove our dedication to providing the best service",
    "stats.clients": "Satisfied Clients",
    "stats.publications": "Successful Publications",
    "stats.media": "Media Partner",
    "stats.experience": "Years of Experience",

    // About
    "about.title": "Reasons to Choose RILISAN",
    "about.subtitle":
      "We are a trusted partner for all your media publication needs",
    "about.point1.title": "You Can Start with Just One Media",
    "about.point1.desc": "No need for a package right away Big",
    "about.point2.title": "Access to Dozens of Leading National Media",
    "about.point2.desc":
      "From Kompas, Tribun, to niche industry media—we have direct connections and a publication system.",
    "about.point3.title": "All Events Can Be Handled",
    "about.point3.desc":
      "Have an event? Launching a new feature? Launching a product? Or do you want to get a blue tick to increase public trust in your brand? We can do it all!",
    "about.point4.title": "Fast Process",
    "about.point4.desc":
      "Going live can take a matter of days. You'll get official proof of broadcast and can be monitored.",
    "about.point5.title": "Stronger Digital Footprint",
    "about.point5.desc":
      "We can strengthen your business's digital footprint. Make your brand easier to find and trust for potential clients.",

    // Contact
    "contact.title": "Ready to Exist in National Media?",
    "contact.subtitle":
      "Consultation Get a free consultation with the RILISAN team and get the right media publication strategy for your UMKM.",

    "contact.cta": "Contact Us Now",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",

    "contact.questions.title": "Frequently Asked Questions",
    "contact.questions.one": "How long does the publication process take?",
    "contact.questions.descone":
      "The publication process usually takes 3-7 business days depending on the package selected.",
    "contact.questions.two": "Is there a guarantee?",
    "contact.questions.desctwo":
      "Yes, we provide a guarantee in accordance with applicable terms and conditions.",
    "contact.questions.three": "How do I pay?",
    "contact.questions.descthree":
      "Payment can be made via bank transfer or available payment gateways.",

    // Footer
    "footer.tagline": "Trusted partner for professional media publication",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.contact": "Contact",
    "footer.about": "About Us",
    "footer.team": "Team",
    "footer.career": "Career",
    "footer.blog": "Blog",
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
