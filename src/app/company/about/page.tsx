"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";
import Breadcrumb from "@/src/components/breadcrumb";
import { Users, Award, Target, Globe } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Users,
      title: "Tim Profesional",
      titleEn: "Professional Team",
      description:
        "Tim berpengalaman dengan keahlian di bidang media dan komunikasi",
      descriptionEn:
        "Experienced team with expertise in media and communication",
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      titleEn: "Quality Assured",
      description:
        "Standar kualitas tinggi dalam setiap layanan yang kami berikan",
      descriptionEn: "High quality standards in every service we provide",
    },
    {
      icon: Target,
      title: "Hasil Terukur",
      titleEn: "Measurable Results",
      description:
        "ROI yang jelas dengan laporan komprehensif dan analisis mendalam",
      descriptionEn:
        "Clear ROI with comprehensive reports and in-depth analysis",
    },
    {
      icon: Globe,
      title: "Jangkauan Luas",
      titleEn: "Wide Reach",
      description:
        "Akses ke media nasional dan internasional untuk eksposur maksimal",
      descriptionEn:
        "Access to national and international media for maximum exposure",
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
              { label: t("company.about"), href: "/company/about" },
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
                {t("company.about")}
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
                Rilisan.com adalah partner terpercaya untuk semua kebutuhan
                publikasi media profesional Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold font-heading text-foreground">
                  Visi Kami
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Menjadi platform publikasi media terdepan di Indonesia yang
                  menghubungkan bisnis dengan media partner terpercaya untuk
                  menciptakan dampak positif dan meningkatkan visibilitas brand.
                </p>
                <h2 className="text-2xl font-bold font-heading text-foreground">
                  Misi Kami
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Memberikan layanan publikasi media berkualitas tinggi dengan
                  pendekatan profesional, inovatif, dan hasil yang terukur untuk
                  membantu klien mencapai tujuan komunikasi mereka.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary-custom/10 to-button-custom/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                  Mengapa Memilih Kami?
                </h3>
                <ul className="space-y-3 text-muted-foreground font-body">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Pengalaman lebih dari 5 tahun di industri media
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Jaringan media partner 500+ nasional dan internasional
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Tim profesional dengan keahlian komunikasi dan media
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                    Laporan hasil yang komprehensif dan terukur
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-custom/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-custom" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
