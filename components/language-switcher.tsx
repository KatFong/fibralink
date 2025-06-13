"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Check, ChevronDown, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
  {
    code: "zh-HK",
    name: "繁體中文",
    flag: "🇭🇰",
  },
  {
    code: "zh-CN",
    name: "简体中文",
    flag: "🇨🇳",
  },
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  // Initialize language based on URL or localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const lang = languages.find((l) => l.code === savedLanguage)
      if (lang) {
        setCurrentLanguage(lang)
        document.documentElement.lang = lang.code
      }
    }
  }, [])

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem("language", language.code)
    document.documentElement.lang = language.code

    // In a real implementation with i18n, you would use something like:
    // router.push(pathname, { locale: language.code })

    // For demo purposes, we'll reload the page to simulate language change
    // In a real app, you'd use a proper i18n library like next-i18next
    window.location.href = pathname
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-1 h-8 px-2 border-blue-900/20 hover:bg-blue-900/20"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{currentLanguage.name}</span>
          <span className="inline-block sm:hidden">{currentLanguage.flag}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-blue-900/20 bg-blue-950/90 backdrop-blur-md">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn(
              "flex items-center gap-2 cursor-pointer hover:bg-blue-900/30",
              currentLanguage.code === language.code && "bg-blue-900/40",
            )}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
            {currentLanguage.code === language.code && <Check className="h-4 w-4 ml-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

