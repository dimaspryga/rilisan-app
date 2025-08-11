"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./language-provider";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-br from-primary-custom/5 via-transparent to-button-custom/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-4 md:mb-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto px-4">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-button-custom hover:bg-button-custom/90 text-white font-body sm:w-auto"
          >
            {t("contact.cta")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
