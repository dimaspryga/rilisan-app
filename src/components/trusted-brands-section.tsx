"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";

const trustedBrands = [
  {
    id: 1,
    name: "Mebiso",
    logo: "./assets/trusted-brands-section/mebiso.png",
  },
  {
    id: 2,
    name: "Ixoora Eyewear",
    logo: "./assets/trusted-brands-section/ixoora.png",
  },
  {
    id: 3,
    name: "DayaLegal",
    logo: "./assets/trusted-brands-section/daya-legal.png",
  },
];

export default function TrustedBrandsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-background to-primary-custom/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-3 sm:mb-4 md:mb-6">
            {t("brands.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed px-4">
            {t("brands.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 ">
            {trustedBrands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center bg-transparent rounded-xl transition-all duration-300 p-4 sm:p-6 md:p-8 group"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="max-h-20 sm:max-h-24 md:max-h-32 lg:max-h-40 max-w-full object-contain bg-transparent filter transition-all duration-300 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
