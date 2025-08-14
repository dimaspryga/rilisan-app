"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/src/components/language-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 overflow-x-hidden">
          <div className="flex items-center justify-between h-16 sm:h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2 sm:space-x-2 flex-shrink-0"
            >
              <button
                onClick={() => handleNavClick("#home")}
                className="flex items-center space-x-2 sm:space-x-2 cursor-pointer"
              >
                <div className="relative">
                  <div className="w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-primary-custom to-button-custom rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm sm:text-sm md:text-base font-heading">R</span>
                  </div>
                </div>
                <div className="min-w-0">
                  <span className="text-base sm:text-base md:text-lg lg:text-xl font-bold font-heading text-primary-custom truncate block">
                    Rilisan.com
                  </span>
                  <div className="text-xs text-muted-foreground font-body hidden sm:block">Media Publication</div>
                </div>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="px-3 lg:px-4 py-2 text-sm lg:text-base text-foreground hover:text-primary-custom transition-all duration-300 font-body rounded-lg hover:bg-primary-custom/10 relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20"
                  >
                    {t(item.key)}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary-custom transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              {/* Language Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full hover:bg-primary-custom/10 cursor-pointer focus:ring-2 focus:ring-primary-custom/20"
                  >
                    <Globe className="h-4 w-4 sm:h-4 sm:w-4" />
                    <span className="sr-only">Toggle language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-28 sm:w-32 bg-background/95 backdrop-blur-md border border-border/50 shadow-lg"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("id")}
                    className={`cursor-pointer font-body text-xs sm:text-sm hover:bg-primary-custom/10 hover:text-primary-custom transition-colors ${
                      language === "id" ? "bg-primary-custom/10 text-primary-custom" : ""
                    }`}
                  >
                    🇮🇩 Indonesia
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={`cursor-pointer font-body text-xs sm:text-sm hover:bg-primary-custom/10 hover:text-primary-custom transition-colors ${
                      language === "en" ? "bg-primary-custom/10 text-primary-custom" : ""
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
                className="lg:hidden w-8 h-8 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full hover:bg-primary-custom/10 cursor-pointer focus:ring-2 focus:ring-primary-custom/20"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4 sm:h-4 sm:w-4" />
                ) : (
                  <Menu className="h-4 w-4 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Menu Content */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 sm:top-16 md:top-18 lg:top-20 left-0 right-0 mx-3 sm:mx-4 lg:mx-8 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-2 sm:py-3 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base text-foreground hover:text-primary-custom hover:bg-primary-custom/10 transition-all duration-300 font-body cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom/20 focus:ring-inset border-b border-border/30 last:border-b-0"
                  >
                    {t(item.key)}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </>
  )
}
