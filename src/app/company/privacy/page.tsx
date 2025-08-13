"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";
import Breadcrumb from "@/src/components/breadcrumb";
import { Lock, Eye, Database, Shield } from "lucide-react";

export default function PrivacyPage() {
  const { t } = useLanguage();

  const privacySections = [
    {
      icon: Database,
      title: "Pengumpulan Data",
      content: [
        "Kami mengumpulkan informasi yang Anda berikan secara langsung",
        "Data penggunaan website untuk meningkatkan layanan",
        "Informasi kontak untuk komunikasi terkait layanan",
      ],
    },
    {
      icon: Eye,
      title: "Penggunaan Data",
      content: [
        "Memberikan layanan sesuai dengan permintaan Anda",
        "Komunikasi terkait layanan dan update penting",
        "Analisis untuk peningkatan kualitas layanan",
      ],
    },
    {
      icon: Shield,
      title: "Perlindungan Data",
      content: [
        "Enkripsi data sensitif dengan standar industri",
        "Akses terbatas hanya untuk tim yang berwenang",
        "Backup data secara berkala untuk keamanan",
      ],
    },
    {
      icon: Lock,
      title: "Hak Pengguna",
      content: [
        "Hak untuk mengakses data pribadi Anda",
        "Hak untuk memperbarui atau menghapus data",
        "Hak untuk menarik persetujuan penggunaan data",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: t("breadcrumb.home"), href: "/" },
              { label: t("breadcrumb.company"), href: "/company" },
              { label: t("company.privacy"), href: "/company/privacy" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-custom mb-4">
                {t("company.privacy")}
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
                Komitmen kami dalam melindungi privasi dan data pribadi Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary-custom" />
                    </div>
                    <h2 className="text-lg font-bold font-heading text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-muted-foreground font-body text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-8"
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-custom/10 to-button-custom/10">
                <h2 className="text-xl font-bold font-heading text-foreground mb-4">
                  Cookies dan Teknologi Serupa
                </h2>
                <p className="text-muted-foreground font-body mb-4">
                  Kami menggunakan cookies untuk meningkatkan pengalaman
                  pengguna dan menganalisis penggunaan website.
                </p>
                <ul className="space-y-2 text-muted-foreground font-body">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Cookies esensial untuk fungsi dasar website
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Cookies analitik untuk memahami penggunaan website
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Anda dapat mengatur preferensi cookies di browser
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold font-heading text-foreground mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-muted-foreground font-body mb-4">
                  Untuk pertanyaan mengenai kebijakan privasi atau penggunaan
                  data Anda:
                </p>
                <div className="space-y-2 text-muted-foreground font-body">
                  <p>Email: privacy@rilisan.com</p>
                  <p>Telepon: +62 21 1234 5678</p>
                  <p>Alamat: Jakarta, Indonesia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
