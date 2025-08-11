"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./language-provider";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0 lg:pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-custom/5 via-transparent to-button-custom/5" />
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-primary-custom/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-button-custom/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 md:px-4 py-2 bg-primary-custom/10 rounded-full text-primary-custom text-xs md:text-sm font-medium"
            >
              ✨ Media Publication Expert
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground font-body max-w-lg mx-auto lg:mx-0"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-button-custom hover:bg-button-custom/90 text-white font-body group w-full sm:w-auto"
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact" passHref>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-custom text-primary-custom hover:bg-primary-custom hover:text-white font-body group bg-transparent w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {t("hero.contact")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gradient-to-br from-primary-custom to-button-custom rounded-2xl overflow-hidden mx-auto max-w-md lg:max-w-none shadow-xl">
              <div className="absolute inset-0 bg-black/20" />
              <Image
                src="/assets/hero.png"
                alt="Hero Image"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
