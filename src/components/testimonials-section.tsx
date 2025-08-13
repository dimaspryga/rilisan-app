"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useLanguage } from "@/src/components/language-provider";

// Data testimonial diubah menjadi array of strings untuk setiap paragraf
const testimonials = [
  {
    id: 1,
    name: "— Aji",
    position: "CEO",
    company: "DayaLegal.com",
    avatar: "/placeholder.svg?height=80&width=80&text=BS",
    rating: 5,
    testimonial: {
      id: [
        "Mulai dari penulisan artikel, pemilihan media yang relevan, sampai akhirnya tayang di media nasional ternama—semuanya dibantu secara profesional dan cepat. Timnya responsif, prosesnya simpel, dan hasilnya jelas terasa.",
        "Sejak publikasi, semakin banyak calon klien yang bilang:‘Saya lihat DayaLegal di media, makanya saya tertarik pakai jasa ini.’",
        "RILISAN bukan sekadar jasa publikasi, tapi partner strategis dalam membangun reputasi brand kami.",
      ],
      en: [
        "From article writing and selecting relevant media, to finally publishing in a leading national media outlet—everything was handled professionally and quickly. The team was responsive, the process was simple, and the results were clearly visible.",
        "Since publication, more and more potential clients have said, 'I saw DayaLegal in the media, that's why I was interested in using this service.'",
        "RILISAN is not just a publication service, but a strategic partner in building our brand reputation.",
      ],
    },
  },
  // Anda bisa menambahkan testimonial lain di sini
  // {
  //   id: 2,
  //   name: "Sarah Williams",
  //   position: "Marketing Director",
  //   company: "Global Innovations",
  //   avatar: "/placeholder.svg?height=80&width=80&text=SW",
  //   rating: 5,
  //   testimonial: {
  //     id: [
  //       "Kerjasama dengan Rilisan.com memberikan dampak signifikan terhadap brand awareness perusahaan kami.",
  //       "Media coverage yang didapat sangat berkualitas dan tepat sasaran."
  //     ],
  //     en: [
  //       "Collaboration with Rilisan.com has had a significant impact on our company's brand awareness.",
  //       "The media coverage we received was very high quality and well-targeted."
  //     ],
  //   },
  // },
];

export default function TestimonialsSection() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-custom/20 via-background to-primary-custom/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold font-heading text-foreground mb-6">
            {t("testimonials.title")}
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Background Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary-custom" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Stars Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm md:text-xl text-gray-700 font-body leading-relaxed text-center mb-8 italic">
                  {currentTestimonial.testimonial[language].map(
                    (paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    )
                  )}
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <h4 className="font-bold font-heading text-foreground text-sm md:text-lg">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs md:text-base text-muted-foreground font-body">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
