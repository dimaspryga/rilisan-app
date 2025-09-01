"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";
import Marquee from "react-fast-marquee";

const mediaPartners = [
  {
    id: 1,
    name: "Kontan",
    logo: "./assets/media-partner-section/kontan.png",
  },
  {
    id: 2,
    name: "Kompas TV",
    logo: "./assets/media-partner-section/kompas-tv.png",
  },
  {
    id: 3,
    name: "Kompas.com",
    logo: "./assets/media-partner-section/kompas-com.png",
  },
  {
    id: 4,
    name: "Intisari",
    logo: "./assets/media-partner-section/intisari.png",
  },
  {
    id: 5,
    name: "Suar",
    logo: "./assets/media-partner-section/suar.png",
  },
  {
    id: 6,
    name: "Wiken",
    logo: "./assets/media-partner-section/wiken.png",
  },
  {
    id: 7,
    name: "Kompasiana",
    logo: "./assets/media-partner-section/kompasiana.png",
  },
  {
    id: 8,
    name: "Sonora.id",
    logo: "./assets/media-partner-section/sonora.png",
  },
  {
    id: 9,
    name: "Tribun Medan",
    logo: "./assets/media-partner-section/tribun-medan.png",
  },
  {
    id: 10,
    name: "Tribun Jogja",
    logo: "./assets/media-partner-section/tribun-jogja.png",
  },
  {
    id: 11,
    name: "Tribun Jabar",
    logo: "./assets/media-partner-section/tribun-jabar.png",
  },
  {
    id: 12,
    name: "Tribun Jakarta",
    logo: "./assets/media-partner-section/tribun-jakarta.png",
  },
  {
    id: 13,
    name: "Otoseken",
    logo: "./assets/media-partner-section/otoseken.png",
  },
  {
    id: 14,
    name: "Hai Online",
    logo: "./assets/media-partner-section/hai.png",
  },
  {
    id: 15,
    name: "IDEA",
    logo: "./assets/media-partner-section/idea.png",
  },
  {
    id: 16,
    name: "Otomania",
    logo: "./assets/media-partner-section/otomania.png",
  },
  {
    id: 17,
    name: "Nakita",
    logo: "./assets/media-partner-section/nakita.png",
  },
  {
    id: 18,
    name: "Nova",
    logo: "./assets/media-partner-section/nova.png",
  },
  {
    id: 19,
    name: "GridKids",
    logo: "./assets/media-partner-section/kids.png",
  },
  {
    id: 20,
    name: "Cewek Banget",
    logo: "./assets/media-partner-section/cewekbanget.png",
  },
  {
    id: 21,
    name: "Parapuan",
    logo: "./assets/media-partner-section/parapuan.png",
  },
  {
    id: 22,
    name: "Bola Sport",
    logo: "./assets/media-partner-section/bolasport.png",
  },
  {
    id: 23,
    name: "Motor Plus",
    logo: "./assets/media-partner-section/motorplusonline.png",
  },
  {
    id: 24,
    name: "Industry.co.id",
    logo: "./assets/media-partner-section/industry.png",
  },
  {
    id: 25,
    name: "Neraca",
    logo: "./assets/media-partner-section/neraca.png",
  },
  {
    id: 26,
    name: "Sindo News ",
    logo: "./assets/media-partner-section/sindo.png",
  },
  {
    id: 27,
    name: "Warta Ekonomi",
    logo: "./assets/media-partner-section/warta.png",
  },
  {
    id: 28,
    name: "Pikiran Rakyat",
    logo: "./assets/media-partner-section/pikiran.png",
  },
  {
    id: 29,
    name: "Suara Merdeka",
    logo: "./assets/media-partner-section/suara-merdeka.png",
  },
  {
    id: 30,
    name: "Kabar Bisnis",
    logo: "./assets/media-partner-section/kabarbisnis.png",
  },
  {
    id: 31,
    name: "Koran Jakarta",
    logo: "./assets/media-partner-section/koran-jakarta.png",
  },
  {
    id: 32,
    name: "Media Indonesia",
    logo: "./assets/media-partner-section/media-indonesia.png",
  },
  {
    id: 33,
    name: "Republika",
    logo: "./assets/media-partner-section/republika.png",
  },
  {
    id: 34,
    name: "Investor",
    logo: "./assets/media-partner-section/investor.png",
  },
];

// Split partners into two rows
const firstRowPartners = mediaPartners.slice(0, 17);
const secondRowPartners = mediaPartners.slice(17, 34);

export default function MediaPartnersSection() {
  const { t } = useLanguage();

  // Marquee settings - customizable as requested
  const marqueeSettings = {
    speed: 50, // px/s
    delay: 0, // seconds
    loop: 0, // infinite
    gradientColor: "rgb(249, 250, 251)", // matches secondary-custom color
    gradientWidth: 100, // px
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            {t("partners.title")}
          </h2>
          <p className="text-md font-body sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t("partners.subtitle")}
          </p>
        </motion.div>

        {/* First Row - Left Direction */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 sm:mb-6 md:mb-8 w-full"
        >
          <div className="overflow-hidden">
            <Marquee
              direction="left"
              speed={marqueeSettings.speed}
              delay={marqueeSettings.delay}
              loop={marqueeSettings.loop}
              gradient={true}
              gradientColor={marqueeSettings.gradientColor}
              gradientWidth={marqueeSettings.gradientWidth}
              pauseOnHover={false}
              className="py-2 sm:py-3 md:py-4 [&>div]:!overflow-hidden"
              style={{
                overflow: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {firstRowPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="mx-8 flex items-center justify-center h-16 w-24 md:w-48 md:h-32 transition-all duration-500 transform hover:scale-110 bg-transparent"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-10 sm:max-h-20 md:max-h-24 max-w-full object-contain filter transition-all duration-300 bg-transparent"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Second Row - Right Direction */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="overflow-hidden">
            <Marquee
              direction="right"
              speed={marqueeSettings.speed}
              delay={marqueeSettings.delay}
              loop={marqueeSettings.loop}
              gradient={true}
              gradientColor={marqueeSettings.gradientColor}
              gradientWidth={marqueeSettings.gradientWidth}
              pauseOnHover={false}
              className="py-2 sm:py-3 md:py-4 [&>div]:!overflow-hidden"
              style={{
                overflow: "hidden",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {secondRowPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="mx-8 flex items-center justify-center h-16 w-24 md:w-48 md:h-32 transition-all duration-500 transform hover:scale-110 bg-transparent"
                >
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="max-h-10 sm:max-h-20 md:max-h-24 max-w-full object-contain filter transition-all duration-300 bg-transparent"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
