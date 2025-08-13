"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";

export default function ContactSection() {
  const { t } = useLanguage();

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
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-br from-primary-custom/5 via-transparent to-button-custom/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto px-4">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-custom/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 md:h-6 w-5 md:w-6 text-primary-custom" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-sm md:text-base">
                      {t("contact.email")}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base">
                      paramamedianetwork@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-custom/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 md:h-6 w-5 md:w-6 text-primary-custom" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-sm md:text-base">
                      {t("contact.phone")}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base">
                      +62 812 250 52 380
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-primary-custom/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 md:h-6 w-5 md:w-6 text-primary-custom" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading text-sm md:text-base">
                      {t("contact.address")}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm md:text-base">
                      EightyEight@Kasablanka Tower A, Lt. 10E, Jakarta,
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={openWhatsApp}
                className="bg-button-custom hover:bg-button-custom/90 text-white font-body group w-full sm:w-auto"
              >
                {t("contact.cta")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className=" p-6 rounded-xl bg-gradient-to-br from-primary-custom/10 to-button-custom/10"
            >
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                {t("contact.questions.title")}
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground font-body">
                    {t("contact.questions.one")}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    {t("contact.questions.descone")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-body">
                    {t("contact.questions.two")}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    {t("contact.questions.desctwo")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground font-body">
                    {t("contact.questions.three")}
                  </h4>
                  <p className="text-muted-foreground font-body">
                    {t("contact.questions.descthree")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
