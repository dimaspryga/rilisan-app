"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { FileText, Monitor, Video } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t("services.article.title"),
      description: t("services.article.desc"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Monitor,
      title: t("services.banner.title"),
      description: t("services.banner.desc"),
      color: "text-primary-custom",
      bgColor: "bg-primary-custom/10",
    },
    {
      icon: Video,
      title: t("services.video.title"),
      description: t("services.video.desc"),
      color: "text-button-custom",
      bgColor: "bg-red-500/10",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 px-4">
            {t("services.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto px-4">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="w-full"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-3 sm:pb-4 p-4 sm:p-6">
                  <div
                    className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}
                  >
                    <service.icon
                      className={`h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8 ${service.color}`}
                    />
                  </div>
                  <CardTitle className="font-heading text-base sm:text-lg md:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-4 sm:p-6">
                  <CardDescription className="text-center font-body text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
