"use client";

import { motion } from "framer-motion";
import { FileText, Users, Megaphone, PenTool } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useLanguage } from "./language-provider";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t("services.press.title"),
      description: t("services.press.desc"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Users,
      title: t("services.media.title"),
      description: t("services.media.desc"),
      color: "text-primary-custom",
      bgColor: "bg-primary-custom/10",
    },
    {
      icon: Megaphone,
      title: t("services.digital.title"),
      description: t("services.digital.desc"),
      color: "text-button-custom",
      bgColor: "bg-red-500/10",
    },
    {
      icon: PenTool,
      title: t("services.content.title"),
      description: t("services.content.desc"),
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-secondary/30 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">
            {t("services.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto px-4">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-14 md:w-16 h-14 md:h-16 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}
                  >
                    <service.icon
                      className={`h-7 md:h-8 w-7 md:w-8 ${service.color}`}
                    />
                  </div>
                  <CardTitle className="font-heading text-lg md:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center font-body text-sm md:text-base leading-relaxed">
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
