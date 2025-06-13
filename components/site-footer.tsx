import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-blue-950/30 backdrop-blur-sm">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Fibralink</h3>
            <p className="text-sm text-muted-foreground">
              Professional enterprise fiber optic services providing high-speed, stable, and secure network
              infrastructure for businesses of all sizes
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#fiber-installation" className="text-muted-foreground hover:text-blue-400">
                  Professional Fiber Installation
                </Link>
              </li>
              <li>
                <Link href="/services#network-solutions" className="text-muted-foreground hover:text-blue-400">
                  Enterprise Network Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#technical-support" className="text-muted-foreground hover:text-blue-400">
                  24/7 Technical Support
                </Link>
              </li>
              <li>
                <Link href="/services#managed-services" className="text-muted-foreground hover:text-blue-400">
                  Network Management Services
                </Link>
              </li>
              <li>
                <Link href="/services#cloud-connectivity" className="text-muted-foreground hover:text-blue-400">
                  Cloud Connectivity Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/case-studies" className="text-muted-foreground hover:text-blue-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-blue-400">
                  Technical Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-blue-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-blue-400">
                  Enterprise Network Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">2123 4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">info@fibralink.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  39/F, Cambridge House, Taikoo Place, 979 King's Road, Quarry Bay, Hong Kong
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-900/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 Fibralink. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-blue-400">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

