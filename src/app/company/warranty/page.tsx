"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/components/language-provider";
import Breadcrumb from "@/src/components/breadcrumb";
import { Shield, CheckCircle, Clock, RefreshCw } from "lucide-react";

export default function WarrantyPage() {
  const { t } = useLanguage();

  const warrantyItems = [
    {
      icon: Shield,
      title: "Garansi Kualitas",
      description:
        "Kami menjamin kualitas layanan sesuai dengan standar profesional yang telah ditetapkan",
    },
    {
      icon: CheckCircle,
      title: "Garansi Distribusi",
      description:
        "Press release akan didistribusikan ke media partner sesuai dengan paket yang dipilih",
    },
    {
      icon: Clock,
      title: "Garansi Waktu",
      description:
        "Layanan akan diselesaikan sesuai dengan timeline yang telah disepakati",
    },
    {
      icon: RefreshCw,
      title: "Garansi Revisi",
      description:
        "Revisi konten hingga 3 kali untuk memastikan kepuasan klien",
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
              { label: t("company.warranty"), href: "/company/warranty" },
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
                {t("company.warranty")}
              </h1>
              <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
                Komitmen kami untuk memberikan layanan terbaik dengan jaminan
                kualitas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {warrantyItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-custom/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-custom" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-custom/10 to-button-custom/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                Ketentuan Garansi
              </h2>
              <div className="space-y-4 text-muted-foreground font-body">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    1. Periode Garansi
                  </h3>
                  <p>
                    Garansi berlaku selama 30 hari setelah layanan selesai
                    dilaksanakan.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    2. Cakupan Garansi
                  </h3>
                  <p>
                    Garansi mencakup kualitas konten, distribusi sesuai paket,
                    dan dukungan teknis.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    3. Pengajuan Klaim
                  </h3>
                  <p>
                    Klaim garansi dapat diajukan melalui email atau telepon
                    dengan menyertakan bukti layanan.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    4. Penyelesaian Klaim
                  </h3>
                  <p>
                    Klaim akan ditindaklanjuti dalam waktu maksimal 3 hari kerja
                    setelah diterima.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
