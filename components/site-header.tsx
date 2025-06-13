"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-4 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px] border-blue-900/20 bg-blue-950/90 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-6 pt-6">
              <Link href="/" className="text-lg font-bold tracking-tight text-white">
                Fibralink
              </Link>
              <div className="grid gap-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/case-studies", label: "Case Studies" },
                  { href: "/resources", label: "Resources" },
                  { href: "/contact", label: "Contact" },
                  { href: "/support", label: "Support" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center text-lg font-medium hover:text-blue-400",
                      pathname === item.href ? "text-blue-400" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <Link href="/contact">
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/client-portal">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-blue-700 text-white hover:bg-blue-900/20"
                  >
                    <User className="mr-2 h-4 w-4" /> Client Login
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-white">Fibralink</span>
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/case-studies", label: "Case Studies" },
            { href: "/resources", label: "Resources" },
            { href: "/contact", label: "Contact" },
            { href: "/support", label: "Support" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium hover:text-blue-400",
                pathname === item.href ? "text-blue-400" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="tel:+85212345678" className="hidden md:flex">
            <Button variant="outline" size="sm" className="hidden border-blue-900/20 hover:bg-blue-900/20 md:flex">
              <Phone className="mr-2 h-4 w-4" /> 2123 4567
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

