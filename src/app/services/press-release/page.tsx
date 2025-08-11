"use client";

import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Check, FileText, Globe, BarChart3, Users } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";
import Breadcrumb from "@/src/components/breadcrumb";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ScrollToTop from "@/src/components/scroll-to-top";

export default function PressReleasePage() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: t("breadcrumb.services"), href: "/#services" },
    { label: t("service.pressRelease.title") },
  ];

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("service.pressRelease.feature1"),
      description: "Jangkauan media yang luas untuk eksposur maksimal",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("service.pressRelease.feature2"),
      description: "Tim penulis berpengalaman dengan standar jurnalistik",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t("service.pressRelease.feature3"),
      description: "Tracking dan analisis performa distribusi",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("service.pressRelease.feature4"),
      description: "Komunikasi langsung dengan editor media",
    },
  ];

  const pricingPlans = [
    {
      name: t("pricing.basic"),
      price: "Rp 2.500.000",
      features: [
        "Distribusi ke 50+ media",
        "Penulisan press release",
        "Laporan distribusi basic",
        "Email support",
      ],
    },
    {
      name: t("pricing.professional"),
      price: "Rp 5.000.000",
      popular: true,
      features: [
        "Distribusi ke 150+ media",
        "Penulisan + editing profesional",
        "Laporan distribusi lengkap",
        "Follow-up media partner",
        "Phone support",
      ],
    },
    {
      name: t("pricing.enterprise"),
      price: "Custom",
      features: [
        "Distribusi ke 200+ media",
        "Tim dedicated writer",
        "Analytics mendalam",
        "Media monitoring",
        "Account manager",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-custom/10 to-secondary-custom/50">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                {t("service.pressRelease.title")}
              </h1>
              <p className="text-xl text-muted-foreground font-body mb-8 leading-relaxed">
                {t("service.pressRelease.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                {t("service.pressRelease.description")}
              </p>
              <Button
                size="lg"
                className="bg-button-custom hover:bg-button-custom/90 text-white"
              >
                {t("pricing.getStarted")}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                {t("service.pressRelease.features.title")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-custom/10 rounded-lg flex items-center justify-center text-primary-custom mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="font-heading">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-body">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-secondary-custom/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                {t("pricing.title")}
              </h2>
              <p className="text-xl text-muted-foreground font-body">
                {t("pricing.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <Card
                    className={`h-full ${
                      plan.popular
                        ? "border-primary-custom shadow-lg scale-105"
                        : ""
                    }`}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-custom text-white">
                        {t("pricing.popular")}
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="font-heading text-2xl">
                        {plan.name}
                      </CardTitle>
                      <div className="text-3xl font-bold text-primary-custom font-heading">
                        {plan.price}
                        {plan.price !== "Custom" && (
                          <span className="text-sm text-muted-foreground">
                            {t("pricing.month")}
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <Check className="w-5 h-5 text-primary-custom flex-shrink-0" />
                            <span className="font-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-button-custom hover:bg-button-custom/90"
                            : "bg-primary-custom hover:bg-primary-custom/90"
                        } text-white`}
                      >
                        {plan.price === "Custom"
                          ? t("pricing.contact")
                          : t("pricing.getStarted")}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
