"use client"

import { LanguageToggle } from "@/components/language-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Menu, Home, Calculator, ClipboardCheck, BarChart3, Info } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {
      href: "/evaluate",
      label: t("Evaluate Candidates", "उम्मीदवारों का मूल्यांकन करें"),
      icon: <ClipboardCheck className="w-4 h-4" />,
    },
    {
      href: "/results",
      label: t("View Results", "परिणामहरू हेर्नुहोस्"),
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      href: "/about",
      label: t("About", "बारेमा"),
      icon: <Info className="w-4 h-4" />,
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/images/nrlogo12.png" alt="Nepal Reforms" width={40} height={40} className="w-10 h-10" />
          <span className="font-semibold text-lg hidden sm:inline">Vote Becho</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t("Open menu", "मेनू खोलें")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">{t("Navigation", "नेविगेशन")}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
