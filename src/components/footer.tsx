"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/src/components/language-provider"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 md:py-12 relative z-10 overflow-x-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-custom to-button-custom rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm sm:text-lg font-heading">R</span>
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold font-heading">Rilisan.com</span>
                <div className="text-xs text-gray-400">Media Publication</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-body leading-relaxed">{t("footer.tagline")}</p>

            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 hover:bg-primary-custom rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold font-heading mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.services")}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400 font-body">
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("services.article.title")}
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("services.banner.title")}
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("services.video.title")}
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold font-heading mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.company")}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400 font-body">
              <li className="hover:text-primary-custom transition-colors cursor-pointer">{t("nav.home")}</li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">{t("nav.services")}</li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">{t("nav.about")}</li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">{t("nav.contact")}</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold font-heading mb-3 sm:mb-4 text-sm sm:text-base">{t("footer.contact")}</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 font-body">
                <Mail className="h-3 w-3 text-primary-custom flex-shrink-0" />
                <span className="break-all">paramamedianetwork@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 font-body">
                <Phone className="h-3 w-3 text-primary-custom flex-shrink-0" />
                <span>+62 812 250 52 380</span>
              </div>
              <div className="flex items-start space-x-2 text-xs sm:text-sm text-gray-400 font-body">
                <MapPin className="h-3 w-3 text-primary-custom flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">EightyEight@Kasablanka Tower A, Lt.10E, Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 sm:pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 sm:space-y-3 md:space-y-0">
            <p className="text-xs text-gray-400 font-body text-center md:text-left">
              &copy; 2025 Rilisan.com. {t("footer.rights")}.
            </p>
            <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4 text-xs text-gray-400 font-body">
              <a href="#" className="hover:text-primary-custom transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-custom transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-custom transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-primary-custom/5 rounded-full blur-2xl sm:blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-24 sm:h-24 bg-button-custom/5 rounded-full blur-2xl sm:blur-3xl"></div>
    </footer>
  )
}
