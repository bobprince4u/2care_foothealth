"use client";

import { useState } from "react";
import { Phone, Mail, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

//interface HeaderProps {
// currentPage: string;
// onNavigate: (page: string) => void;
//}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPage = usePathname();

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/services", label: "Services" },
    { id: "/about", label: "About & Contact" },
  ];

  const handleNavClick = () => {
    //  onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:+447300790349"
              className="flex items-center gap-1 hover:underline"
              aria-label="Call us"
            >
              <Phone className="size-4" />
              <span>07300 790349</span>
            </a>
            <a
              href="mailto:2carefoothealth@gmail.com"
              className="hidden sm:flex items-center gap-1 hover:underline"
              aria-label="Email us"
            >
              <Mail className="size-4" />
              <span>2carefoothealth@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Serving Aberdeen, Aberdeenshire & surrounding areas
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Go to home page"
            >
              <Image
                src="/logo.jpeg"
                alt="2Care Foot Health Logo"
                width={200}
                height={80}
                className="h-12 sm:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={handleNavClick}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    currentPage === item.id
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                onClick={() =>
                  window.open("https://wa.me/447300790349", "_blank")
                }
                variant="outline"
                size="sm"
                className="gap-2"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="size-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </Button>
              <Button
                onClick={() =>
                  window.open("https://dikidi.net/1756535", "_blank")
                }
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav
              className="lg:hidden mt-4 pb-4 border-t border-border pt-4"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.id}
                    onClick={handleNavClick}
                    className={`text-left px-4 py-3 rounded-md transition-colors ${
                      currentPage === item.id
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-2 px-4">
                  <Button
                    onClick={() =>
                      window.open("https://wa.me/447300790349", "_blank")
                    }
                    variant="outline"
                    className="w-full gap-2"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={() =>
                      window.open("https://dikidi.net/1756535", "_blank")
                    }
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
