"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "6281225052380"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Halo, saya tertarik dengan layanan publikasi media Rilisan.com. Bisakah saya mendapatkan informasi lebih lanjut?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 pt-8 pb-6 sm:pt-8 sm:pb-8 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-custom/5 via-transparent to-button-custom/5" />
      <div className="absolute top-2 sm:top-5 lg:top-10 left-1 sm:left-2 lg:left-5 h-20 w-20 sm:h-32 sm:w-32 lg:h-48 lg:w-48 bg-primary-custom/10 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-2 sm:bottom-5 lg:bottom-10 right-1 sm:right-2 lg:right-5 h-24 w-24 sm:h-40 sm:w-40 lg:h-64 lg:w-64 bg-button-custom/10 rounded-full blur-2xl sm:blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-primary-custom/10 rounded-full text-primary-custom text-xs sm:text-sm font-medium"
            >
              ✨ Media Publication Expert
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-muted-foreground font-body max-w-lg mx-auto lg:mx-0"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
            >
              <Button
                size="default"
                onClick={openWhatsApp}
                className="bg-button-custom hover:bg-button-custom/90 text-white font-body group w-full sm:w-auto cursor-pointer text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="default"
                variant="outline"
                onClick={scrollToServices}
                className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white font-body group bg-transparent w-full sm:w-auto cursor-pointer text-sm sm:text-base px-4 py-2.5 sm:px-6 sm:py-3"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t("hero.learn")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-4 lg:mt-0 w-full max-w-lg mx-auto md:max-w-md lg:max-w-none"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 shadow-xl bg-gradient-to-br from-primary-custom to-button-custom rounded-lg sm:rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <Image
                src="./assets/hero-section/hero-1.png"
                alt="Hero Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-2 sm:px-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold font-heading">
                    Rilisan.com
                  </h3>
                  <p className="text-white/80 font-body text-sm sm:text-base">
                    Media Publication Service
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
