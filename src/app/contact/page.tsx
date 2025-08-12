"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ScrollToTop from "@/src/components/scroll-to-top";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "info@rilisan.com",
      description: "Kirim email untuk pertanyaan umum",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+62 21 1234 5678",
      description: "Hubungi kami untuk konsultasi langsung",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value: "Jakarta, Indonesia",
      description: "Kantor pusat Rilisan.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "09:00 - 18:00 WIB",
      description: "Senin - Jumat",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary-custom/10 to-button-custom/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-custom mb-4">
                {t("contact.hero.title")}
              </h1>
              <p className="text-xl text-muted-foreground font-body">
                {t("contact.hero.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading text-primary-custom">
                      Kirim Pesan
                    </CardTitle>
                    <p className="text-muted-foreground font-body">
                      Isi form di bawah ini dan kami akan menghubungi Anda
                      segera
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2 font-body">
                            Nama Lengkap *
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Masukkan nama lengkap"
                            required
                            className="font-body"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2 font-body">
                            Email *
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="nama@email.com"
                            required
                            className="font-body"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2 font-body">
                            Nomor Telepon
                          </label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+62 812 3456 7890"
                            className="font-body"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2 font-body">
                            Nama Perusahaan
                          </label>
                          <Input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="PT. Contoh Perusahaan"
                            className="font-body"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Layanan yang Diminati
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary-custom"
                        >
                          <option value="">Pilih layanan</option>
                          <option value="press-release">Press Release</option>
                          <option value="media-relations">
                            Media Relations
                          </option>
                          <option value="digital-marketing">
                            Digital Marketing
                          </option>
                          <option value="content-creation">
                            Content Creation
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2 font-body">
                          Pesan *
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Ceritakan kebutuhan Anda..."
                          rows={5}
                          required
                          className="font-body"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-button-custom hover:bg-button-custom/90 text-white font-body cursor-pointer"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                    Informasi Kontak
                  </h2>
                  <p className="text-muted-foreground font-body mb-8">
                    Hubungi kami melalui berbagai cara berikut untuk mendapatkan
                    informasi lebih lanjut
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-custom" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground font-heading">
                            {info.title}
                          </h3>
                          <p className="text-primary-custom font-medium font-body">
                            {info.value}
                          </p>
                          <p className="text-sm text-muted-foreground font-body">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* FAQ Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-12 p-6 rounded-xl bg-gradient-to-br from-primary-custom/10 to-button-custom/10"
                >
                  <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                    Pertanyaan Umum
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-foreground font-body">
                        Berapa lama proses publikasi?
                      </h4>
                      <p className="text-muted-foreground font-body">
                        Proses publikasi biasanya memakan waktu 3-7 hari kerja
                        tergantung paket yang dipilih.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-body">
                        Apakah ada garansi?
                      </h4>
                      <p className="text-muted-foreground font-body">
                        Ya, kami memberikan garansi sesuai dengan ketentuan yang
                        berlaku.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground font-body">
                        Bagaimana cara pembayaran?
                      </h4>
                      <p className="text-muted-foreground font-body">
                        Pembayaran dapat dilakukan melalui transfer bank atau
                        payment gateway yang tersedia.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
