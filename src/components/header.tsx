"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useLanguage } from "./language-provider";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "/", type: "link" },
    { key: "nav.services", href: "#services", type: "dropdown" },
    { key: "nav.company", href: "#company", type: "dropdown" },
    { key: "nav.contact", href: "#", type: "link" },
  ];

  // const serviceItems = [
  //   { key: "services.pressRelease", href: "/services/press-release" },
  //   { key: "services.mediaRelations", href: "/services/media-relations" },
  //   { key: "services.digitalMarketing", href: "/services/digital-marketing" },
  //   { key: "services.contentCreation", href: "/services/content-creation" },
  // ];

  const serviceItems = [
    { key: "services.pressRelease", href: "/services/press-release" },
    { key: "services.mediaRelations", href: "#" },
    { key: "services.digitalMarketing", href: "#" },
    { key: "services.contentCreation", href: "#" },
  ];

  // const companyItems = [
  //   { key: "company.about", href: "/company/about" },
  //   { key: "company.warranty", href: "/company/warranty" },
  //   { key: "company.terms", href: "/company/terms" },
  //   { key: "company.privacy", href: "/company/privacy" },
  // ];

  const companyItems = [
    { key: "company.about", href: "#" },
    { key: "company.warranty", href: "#" },
    { key: "company.terms", href: "#" },
    { key: "company.privacy", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container w-full mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-3"
          >
            <Link
              href="/"
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
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {item.type === "dropdown" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      {/* improved dropdown button styling with proper cursor and font */}
                      <button className="px-4 py-2 text-foreground hover:text-primary-custom transition-all duration-300 font-body rounded-lg hover:bg-primary-custom/10 relative group flex items-center gap-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20">
                        {t(item.key)}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-custom transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                      </button>
                    </DropdownMenuTrigger>
                    {/* enhanced dropdown content styling */}
                    <DropdownMenuContent
                      align="start"
                      className="w-56 mt-2 bg-background/95 backdrop-blur-md border border-border/50 shadow-lg"
                    >
                      {item.key === "nav.services"
                        ? serviceItems.map((service) => (
                            <DropdownMenuItem key={service.key} asChild>
                              <Link
                                href={service.href}
                                className="flex items-center px-3 py-2.5 text-sm hover:bg-primary-custom/10 hover:text-primary-custom transition-colors cursor-pointer font-body focus:bg-primary-custom/10 focus:text-primary-custom"
                              >
                                {t(service.key)}
                              </Link>
                            </DropdownMenuItem>
                          ))
                        : companyItems.map((company) => (
                            <DropdownMenuItem key={company.key} asChild>
                              <Link
                                href={company.href}
                                className="flex items-center px-3 py-2.5 text-sm hover:bg-primary-custom/10 hover:text-primary-custom transition-colors cursor-pointer font-body focus:bg-primary-custom/10 focus:text-primary-custom"
                              >
                                {t(company.key)}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary-custom transition-all duration-300 font-body rounded-lg hover:bg-primary-custom/10 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                  >
                    {t(item.key)}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-custom transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                )}
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
              {/* improved language dropdown styling */}
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
              <div key={item.key}>
                {item.type === "dropdown" ? (
                  <div>
                    {/* improved mobile dropdown button styling */}
                    <motion.button
                      onClick={() => {
                        if (item.key === "nav.services") {
                          setIsServicesOpen(!isServicesOpen);
                        } else {
                          setIsCompanyOpen(!isCompanyOpen);
                        }
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between w-full text-left py-3 px-4 text-foreground hover:text-primary-custom hover:bg-primary-custom/10 transition-all duration-300 font-body rounded-lg mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                    >
                      {t(item.key)}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          (item.key === "nav.services" && isServicesOpen) ||
                          (item.key === "nav.company" && isCompanyOpen)
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </motion.button>
                    {/* improved mobile dropdown content visibility logic */}
                    {((item.key === "nav.services" && isServicesOpen) ||
                      (item.key === "nav.company" && isCompanyOpen)) && (
                      <div className="ml-4 space-y-1">
                        {item.key === "nav.services"
                          ? serviceItems.map((service, serviceIndex) => (
                              <motion.div
                                key={service.key}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: serviceIndex * 0.05,
                                }}
                              >
                                <Link
                                  href={service.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary-custom hover:bg-primary-custom/10 transition-all duration-300 font-body rounded-lg mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                                >
                                  {t(service.key)}
                                </Link>
                              </motion.div>
                            ))
                          : companyItems.map((company, companyIndex) => (
                              <motion.div
                                key={company.key}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: companyIndex * 0.05,
                                }}
                              >
                                <Link
                                  href={company.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 px-4 text-sm text-muted-foreground hover:text-primary-custom hover:bg-primary-custom/10 transition-all duration-300 font-body rounded-lg mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                                >
                                  {t(company.key)}
                                </Link>
                              </motion.div>
                            ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left py-3 px-4 text-foreground hover:text-primary-custom hover:bg-primary-custom/10 transition-all duration-300 font-body rounded-lg mx-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
