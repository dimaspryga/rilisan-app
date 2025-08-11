"use client";

import { motion } from "framer-motion";
import { Award, Network, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "./language-provider";

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t("about.experience.title"),
      description: t("about.experience.desc"),
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      icon: Network,
      title: t("about.network.title"),
      description: t("about.network.desc"),
      color: "text-primary-custom",
      bgColor: "bg-primary-custom/10",
    },
    {
      icon: TrendingUp,
      title: t("about.results.title"),
      description: t("about.results.desc"),
      color: "text-button-custom",
      bgColor: "bg-red-500/10",
    },
  ];

  return (
    <section id="about" className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">
                {t("about.title")}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-body">
                {t("about.subtitle")}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
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
                    className={`w-10 md:w-12 h-10 md:h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <feature.icon
                      className={`h-5 md:h-6 w-5 md:w-6 ${feature.color}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold font-heading mb-1 md:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
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
            className="relative mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="space-y-3 md:space-y-4"
              >
                <Card className="p-4 md:p-6 bg-gradient-to-br from-primary-custom/10 to-primary-custom/5">
                  <div className="text-xl md:text-2xl mb-2">📊</div>
                  <h4 className="font-semibold font-heading text-sm md:text-base">
                    Analytics
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-body">
                    Real-time insights
                  </p>
                </Card>
                <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
                  <div className="text-xl md:text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold font-heading text-sm md:text-base">
                    Targeting
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-body">
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
                className="space-y-3 md:space-y-4 mt-6 md:mt-8"
              >
                <Card className="p-4 md:p-6 bg-gradient-to-br from-button-custom/10 to-red-500/5">
                  <div className="text-xl md:text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold font-heading text-sm md:text-base">
                    Growth
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-body">
                    Rapid expansion
                  </p>
                </Card>
                <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                  <div className="text-xl md:text-2xl mb-2">💡</div>
                  <h4 className="font-semibold font-heading text-sm md:text-base">
                    Innovation
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-body">
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
