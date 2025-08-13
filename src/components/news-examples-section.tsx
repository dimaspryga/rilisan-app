"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { useLanguage } from "@/src/components/language-provider";
import Masonry from "react-masonry-css";

const newsImages = [
  {
    id: 1,
    src: "./assets/news-example-section/news-1-neraca.png",
    alt: "Ixoora Eyewear Ingin Jadi Market Leader Produk Kacamata di Indonesia - neraca.co.id",
    height: "h-64",
  },
  {
    id: 2,
    src: "./assets/news-example-section/news-2-kompas.png",
    alt: "Deteksi Plagiarisme Logo dan Gambar Kini Bisa lewat WhatsApp berkat AI Mebiso - kilasumkm.kompas.com",
    height: "h-80",
  },
  {
    id: 3,
    src: "./assets/news-example-section/news-3-tribunnewsjogja.png",
    alt: "Dukung Orisinalitas Kreator & Brand, Mebiso Rilis Inovasi AI Image Protection di Acara AIRONI UGM - jogja.tribunnews.com",
    height: "h-56",
  },
  {
    id: 4,
    src: "./assets/news-example-section/news-4-wartaekonomi.png",
    alt: "Lewat Satu Pintu, Daya Legal Siap Bantu Mengurus Izin Usahamu! - wartaekonomi.co.id",
    height: "h-72",
  },
  {
    id: 5,
    src: "./assets/news-example-section/news-5-investor.png",
    alt: "3 Hal Administratif Legal yang Sering Diabaikan dalam Merintis Usaha - investor.id",
    height: "h-60",
  },
  {
    id: 6,
    src: "./assets/news-example-section/news-6-industry.png",
    alt: "Ini 3 Hal Administratif Legal yang Sering Diabaikan dalam Merintis Usaha - industry.co.id",
    height: "h-68",
  },
  {
    id: 7,
    src: "./assets/news-example-section/news-7-swa.png",
    alt: "Tiga Hal Ini Wajib Diperhatikan dalam Membangun Usaha - swa.co.id",
    height: "h-76",
  },
  {
    id: 8,
    src: "./assets/news-example-section/news-8-medcom.png",
    alt: "3 Hal Administratif Harus Diperhatikan Pelaku Usaha - medcom.id",
    height: "h-64",
  },
  {
    id: 9,
    src: "./assets/news-example-section/news-9-industry.png",
    alt: "Ixoora Eyewear Target Pemimpin Pasar Penjualan Kacamata - industry.co.id",
    height: "h-72",
  },
  {
    id: 10,
    src: "./assets/news-example-section/news-10-kompas.png",
    alt: "Deteksi Plagiarisme Logo dan Gambar Kini Bisa lewat WhatsApp berkat AI Mebiso - tekno.kompas.com",
    height: "h-58",
  },
  {
    id: 11,
    src: "./assets/news-example-section/news-11-swa.png",
    alt: "Kacamata Ixoora Eyewear Menembus Pasar 5 Negara - swa.co.id",
    height: "h-76",
  },
  {
    id: 12,
    src: "./assets/news-example-section/news-12-investor.png",
    alt: "Tembus Pasar Ekspor, Bran Kacamata Asal Surabaya Ini Pasang Target Besar - investor.id",
    height: "h-68",
  },
];

export default function NewsExamplesSection() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? newsImages : newsImages.slice(0, 8);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary-custom/20 to-background">
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
            {t("news.title")}
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            {t("news.subtitle")}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4 group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-300 group-hover:shadow-2xl">
                  <div className={`${image.height} overflow-hidden`}>
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-body font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {/* Load More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(true)}
              className="bg-button-custom hover:bg-button-custom/90 text-white px-8 py-3 rounded-full font-body font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("news.loadMore")}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
