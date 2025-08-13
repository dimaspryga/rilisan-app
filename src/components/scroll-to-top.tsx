"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <FloatingWhatsApp
        phoneNumber="6281225052380"
        accountName="Rilisan.com"
        avatar="/placeholder.svg?height=50&width=50"
        statusMessage="Online"
        chatMessage="Halo! 🤝 Ada yang bisa kami bantu?"
        placeholder="Ketik pesan..."
        allowEsc={false}
        allowClickAway={false}
        notification
        notificationSound
        className="z-40"
        buttonStyle={{
          bottom: "32px",
          right: "32px",
        }}
      />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-12 h-12 rounded-full bg-button-custom hover:bg-button-custom/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              title={t("scroll.top")}
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
