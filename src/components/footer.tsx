"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-br w-full from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-custom to-button-custom rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-heading">
                  R
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold font-heading">
                  Rilisan.com
                </span>
                <div className="text-sm text-gray-400">Media Publication</div>
              </div>
            </div>
            <p className="text-gray-400 font-body leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-custom rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
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
            <h3 className="font-semibold font-heading mb-6 text-lg">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3 text-gray-400 font-body">
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                Press Release
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                Media Relations
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                Content Creation
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
            <h3 className="font-semibold font-heading mb-6 text-lg">
              {t("footer.company")}
            </h3>
            <ul className="space-y-3 text-gray-400 font-body">
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("footer.about")}
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("footer.warranty")}
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("footer.terms")}
              </li>
              <li className="hover:text-primary-custom transition-colors cursor-pointer">
                {t("footer.privacy")}
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold font-heading mb-6 text-lg">
              {t("footer.contact")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 font-body">
                <Mail className="h-4 w-4 text-primary-custom" />
                <span>hello@rilisan.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 font-body">
                <Phone className="h-4 w-4 text-primary-custom" />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 font-body">
                <MapPin className="h-4 w-4 text-primary-custom" />
                <span>Jakarta, Indonesia</span>
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
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-body text-center md:text-left">
              &copy; 2025 Rilisan.com. {t("footer.rights")}.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 font-body">
              <a
                href="#"
                className="hover:text-primary-custom transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-custom transition-colors"
              >
                Terms of Service
              </a>
              {/* <a
                href="#"
                className="hover:text-primary-custom transition-colors"
              >
                Cookie Policy
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-custom/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-button-custom/5 rounded-full blur-3xl"></div>
    </footer>
  );
}
