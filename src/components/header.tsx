"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/src/components/language-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-10 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-3"
          >
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-primary-custom to-button-custom rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg font-heading">
                    R
                  </span>
                </div>
                {/* <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <Sparkles className="w-2 h-2 text-yellow-600" />
                </motion.div> */}
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-primary-custom">
                  Rilisan.com
                </span>
                <div className="text-xs text-muted-foreground font-body">
                  Media Publication
                </div>
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-foreground hover:text-primary-custom transition-all duration-300 font-body rounded-lg hover:bg-primary-custom/10 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                >
                  {t(item.key)}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-custom transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 rounded-full hover:bg-primary-custom/10 cursor-pointer focus:ring-2 focus:ring-primary-custom/20"
                >
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-40 bg-background/95 backdrop-blur-md border border-border/50 shadow-lg"
              >
                <DropdownMenuItem
                  onClick={() => setLanguage("id")}
                  className={`cursor-pointer font-body hover:bg-primary-custom/10 hover:text-primary-custom transition-colors ${
                    language === "id"
                      ? "bg-primary-custom/10 text-primary-custom"
                      : ""
                  }`}
                >
                  🇮🇩 Indonesia
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`cursor-pointer font-body hover:bg-primary-custom/10 hover:text-primary-custom transition-colors ${
                    language === "en"
                      ? "bg-primary-custom/10 text-primary-custom"
                      : ""
                  }`}
                >
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-10 h-10 rounded-full hover:bg-primary-custom/10 cursor-pointer focus:ring-2 focus:ring-primary-custom/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md rounded-b-lg"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary-custom hover:bg-primary-custom/10 transition-all duration-300 font-body rounded-lg mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                >
                  {t(item.key)}
                </button>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
