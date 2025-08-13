"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";
import Breadcrumb from "@/src/components/breadcrumb";
import { FileText, Users, CreditCard, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: "Ketentuan Umum",
      content: [
        "Dengan menggunakan layanan Rilisan.com, Anda menyetujui semua ketentuan yang berlaku",
        "Ketentuan ini dapat berubah sewaktu-waktu dengan pemberitahuan sebelumnya",
        "Pengguna bertanggung jawab untuk memahami dan mematuhi ketentuan yang berlaku",
      ],
    },
    {
      icon: Users,
      title: "Hak dan Kewajiban",
      content: [
        "Klien berhak mendapatkan layanan sesuai dengan paket yang dipilih",
        "Klien wajib memberikan informasi yang akurat dan lengkap",
        "Rilisan.com berhak menolak konten yang melanggar hukum atau etika",
      ],
    },
    {
      icon: CreditCard,
      title: "Pembayaran",
      content: [
        "Pembayaran dilakukan sesuai dengan invoice yang diterbitkan",
        "Layanan dimulai setelah pembayaran dikonfirmasi",
        "Refund dapat dilakukan sesuai dengan kebijakan yang berlaku",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Batasan Tanggung Jawab",
      content: [
        "Rilisan.com tidak bertanggung jawab atas dampak negatif dari konten klien",
        "Tanggung jawab terbatas pada nilai kontrak layanan",
        "Force majeure tidak termasuk dalam tanggung jawab perusahaan",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: t("breadcrumb.home"), href: "/" },
              { label: t("breadcrumb.company"), href: "/company" },
              { label: t("company.terms"), href: "/company/terms" },
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary-custom mb-4">
                {t("company.terms")}
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
                Ketentuan dan persyaratan penggunaan layanan Rilisan.com
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary-custom" />
                    </div>
                    <h2 className="text-xl font-bold font-heading text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-muted-foreground font-body"
                      >
                        <div className="w-2 h-2 bg-primary-custom rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 p-6 bg-gradient-to-br from-primary-custom/10 to-button-custom/10 rounded-2xl"
            >
              <h2 className="text-xl font-bold font-heading text-foreground mb-4">
                Kontak untuk Pertanyaan
              </h2>
              <p className="text-muted-foreground font-body mb-4">
                Jika Anda memiliki pertanyaan mengenai ketentuan layanan,
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-muted-foreground font-body">
                <p>Email: legal@rilisan.com</p>
                <p>Telepon: +62 21 1234 5678</p>
                <p>Alamat: Jakarta, Indonesia</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
