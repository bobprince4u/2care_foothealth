"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, MessageCircle, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentPage = usePathname();

  const navItems = [
    { id: "/", label: "Home" },
    { id: "/services", label: "Services" },
    { id: "/about", label: "About & Contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

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
        <div className="max-w-7xl mx-auto px-6 h-28">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Go to home page"
            >
              <Image
                src="/logo-bg.png"
                alt="2Care Foot Health Logo"
                width={200}
                height={80}
                className="h-20 sm:h-24 w-auto"
                priority
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
        </div>
      </header>

      {/* Overlay — closes menu when tapped outside */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer — slides down from top, above overlay */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-xl rounded-b-3xl lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-28 border-b border-border">
          <Link href="/" onClick={handleNavClick}>
            <Image
              src="/logo-bg.png"
              alt="2Care Foot Health Logo"
              width={200}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              onClick={handleNavClick}
              className={`px-4 py-3 rounded-md transition-colors text-base font-medium ${
                currentPage === item.id
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-border mx-4" />

        {/* Action buttons */}
        <div className="flex flex-col gap-3 p-4">
          <Button
            onClick={() => {
              window.open("https://dikidi.net/1756535", "_blank");
              handleNavClick();
            }}
            className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            size="lg"
          >
            <Calendar className="size-4" />
            Book Appointment
          </Button>
          <Button
            onClick={() => {
              window.location.href = "tel:+447300790349";
              handleNavClick();
            }}
            variant="outline"
            className="w-full gap-2"
            size="lg"
          >
            <Phone className="size-4" />
            Call 07300 790349
          </Button>
          <Button
            onClick={() => {
              window.open("https://wa.me/447300790349", "_blank");
              handleNavClick();
            }}
            variant="outline"
            className="w-full gap-2"
            size="lg"
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </>
  );
}
