"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "MENU", href: "#menu" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="relative w-16 h-16">
          <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium text-sm tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="hidden md:block">
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors">
            RESERVE NOW
          </button>
        </Link>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md absolute top-full left-0 right-0 py-4 border-b border-border/50">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors mt-2">
                RESERVE NOW
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

