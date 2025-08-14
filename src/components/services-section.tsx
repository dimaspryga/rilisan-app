"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { FileText, Monitor, Video } from "lucide-react"
import { useLanguage } from "@/src/components/language-provider"

export default function ServicesSection() {
  const { t } = useLanguage()

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
  ]

  return (
    <section id="services" className="py-6 sm:py-8 md:py-12 lg:py-16 bg-secondary/30 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-heading mb-2 sm:mb-3 px-2">
            {t("services.title")}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-body max-w-2xl mx-auto px-2">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
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
                <CardHeader className="text-center pb-2 sm:pb-3 p-3 sm:p-4 md:p-5">
                  <div
                    className={`w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-14 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3`}
                  >
                    <service.icon className={`h-4 sm:h-5 md:h-6 lg:h-7 w-4 sm:w-5 md:w-6 lg:w-7 ${service.color}`} />
                  </div>
                  <CardTitle className="font-heading text-xs sm:text-sm md:text-base lg:text-lg">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-3 sm:p-4 md:p-5">
                  <CardDescription className="text-center font-body text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
