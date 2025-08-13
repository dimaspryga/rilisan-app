"use client";

import { motion } from "framer-motion";
import { Card } from "@/src/components/ui/card";
import { Play, Network, Calendar, Clock, TrendingUp } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";

export default function AboutSection() {
  const { t } = useLanguage();

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
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4">
                {t("about.title")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body">
                {t("about.subtitle")}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 md:space-x-4"
                >
                  <div
                    className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon
                      className={`h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 ${feature.color}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold font-heading mb-1 md:mb-2">
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
            className="relative mt-6 sm:mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="space-y-2 sm:space-y-3 md:space-y-4"
              >
                <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-primary-custom/10 to-primary-custom/5">
                  <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                    📊
                  </div>
                  <h4 className="font-semibold font-heading text-xs sm:text-sm md:text-base">
                    Analytics
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body">
                    Real-time insights
                  </p>
                </Card>
                <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                  <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                    🎯
                  </div>
                  <h4 className="font-semibold font-heading text-xs sm:text-sm md:text-base">
                    Targeting
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body">
                    Precise audience
                  </p>
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
                className="space-y-2 sm:space-y-3 md:space-y-4 mt-4 sm:mt-6 md:mt-8"
              >
                <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-button-custom/10 to-red-500/5">
                  <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                    🚀
                  </div>
                  <h4 className="font-semibold font-heading text-xs sm:text-sm md:text-base">
                    Growth
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body">
                    Rapid expansion
                  </p>
                </Card>
                <Card className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                  <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                    💡
                  </div>
                  <h4 className="font-semibold font-heading text-xs sm:text-sm md:text-base">
                    Innovation
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body">
                    Creative solutions
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
