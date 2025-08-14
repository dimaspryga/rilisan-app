"use client"

import { motion } from "framer-motion"
import { Card } from "@/src/components/ui/card"
import { Play, Network, Calendar, Clock, TrendingUp } from "lucide-react"
import { useLanguage } from "@/src/components/language-provider"

export default function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Play,
      title: t("about.point1.title"),
      description: t("about.point1.desc"),
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Network,
      title: t("about.point2.title"),
      description: t("about.point2.desc"),
      color: "text-primary-custom",
      bgColor: "bg-primary-custom/10",
    },
    {
      icon: Calendar,
      title: t("about.point3.title"),
      description: t("about.point3.desc"),
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Clock,
      title: t("about.point4.title"),
      description: t("about.point4.desc"),
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: TrendingUp,
      title: t("about.point5.title"),
      description: t("about.point5.desc"),
      color: "text-button-custom",
      bgColor: "bg-red-500/10",
    },
  ]

  return (
    <section id="about" className="py-6 sm:py-8 md:py-12 lg:py-16 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading mb-2 sm:mb-3">
                {t("about.title")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body">{t("about.subtitle")}</p>
            </div>

            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2 sm:space-x-3"
                >
                  <div
                    className={`w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon className={`h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 ${feature.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-heading mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-3 sm:mt-4 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="space-y-1.5 sm:space-y-2 md:space-y-3"
              >
                <Card className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-primary-custom/10 to-primary-custom/5">
                  <div className="text-sm sm:text-base md:text-lg mb-1">📊</div>
                  <h4 className="font-semibold font-heading text-sm sm:text-base">Analytics</h4>
                  <p className="text-sm text-muted-foreground font-body">Real-time insights</p>
                </Card>
                <Card className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                  <div className="text-sm sm:text-base md:text-lg mb-1">🎯</div>
                  <h4 className="font-semibold font-heading text-sm sm:text-base">Targeting</h4>
                  <p className="text-sm text-muted-foreground font-body">Precise audience</p>
                </Card>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="space-y-1.5 sm:space-y-2 md:space-y-3 mt-2 sm:mt-3 md:mt-4"
              >
                <Card className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-button-custom/10 to-red-500/5">
                  <div className="text-sm sm:text-base md:text-lg mb-1">🚀</div>
                  <h4 className="font-semibold font-heading text-sm sm:text-base">Growth</h4>
                  <p className="text-sm text-muted-foreground font-body">Rapid expansion</p>
                </Card>
                <Card className="p-2 sm:p-3 md:p-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                  <div className="text-sm sm:text-base md:text-lg mb-1">💡</div>
                  <h4 className="font-semibold font-heading text-sm sm:text-base">Innovation</h4>
                  <p className="text-sm text-muted-foreground font-body">Creative solutions</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
