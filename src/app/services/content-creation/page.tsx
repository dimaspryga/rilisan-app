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
import { Check, PenTool, ImageIcon, Video, BookOpen } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";
import Breadcrumb from "@/src/components/breadcrumb";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ScrollToTop from "@/src/components/scroll-to-top";

export default function ContentCreationPage() {
  const { t } = useLanguage();

  const breadcrumbItems = [
    { label: t("breadcrumb.services"), href: "/#services" },
    { label: t("service.contentCreation.title") },
  ];

  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: t("service.contentCreation.feature1"),
      description: "Penulisan artikel dan blog berkualitas tinggi",
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: t("service.contentCreation.feature2"),
      description: "Desain infografis yang menarik dan informatif",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: t("service.contentCreation.feature3"),
      description: "Produksi video konten profesional",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("service.contentCreation.feature4"),
      description: "Storytelling yang kuat untuk brand",
    },
  ];

  const pricingPlans = [
    {
      name: t("pricing.basic"),
      price: "Rp 3.500.000",
      features: [
        "8 artikel per bulan",
        "4 infografis",
        "Basic copywriting",
        "Email support",
      ],
    },
    {
      name: t("pricing.professional"),
      price: "Rp 7.000.000",
      popular: true,
      features: [
        "16 artikel per bulan",
        "8 infografis",
        "2 video konten",
        "Brand storytelling",
        "Content strategy",
      ],
    },
    {
      name: t("pricing.enterprise"),
      price: "Custom",
      features: [
        "Unlimited artikel",
        "Custom infografis",
        "Video production",
        "Full brand narrative",
        "Content team",
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
                {t("service.contentCreation.title")}
              </h1>
              <p className="text-xl text-muted-foreground font-body mb-8 leading-relaxed">
                {t("service.contentCreation.subtitle")}
              </p>
              <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
                {t("service.contentCreation.description")}
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
                {t("service.contentCreation.features.title")}
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
