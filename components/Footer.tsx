"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

//interface FooterProps {
// currentPage: string;
// onNavigate: (page: string) => void;
//}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="2Care Foot Health Logo"
              width={200}
              height={80}
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-slate-300 mb-4">
              Professional foot health services for elderly patients, diabetic
              patients, athletes, and general foot care across Aberdeen and
              Aberdeenshire.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-secondary/20 text-secondary px-2 py-1 rounded text-xs">
                PRFHC Registered
              </span>
              <span className="text-slate-400 text-xs">PRFHC0090</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About & Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://dikidi.net/1756535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors block"
                >
                  Book Appointment
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+447300790349"
                  className="flex items-start gap-2 hover:text-secondary transition-colors"
                >
                  <Phone className="size-4 mt-0.5 shrink-0" />
                  <span>07300 790349</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:2carefoothealth@gmail.com"
                  className="flex items-start gap-2 hover:text-secondary transition-colors break-all"
                >
                  <Mail className="size-4 mt-0.5 shrink-0" />
                  <span>2carefoothealth@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/447300790349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-secondary transition-colors"
                >
                  <MessageCircle className="size-4 mt-0.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>11 School Crescent, Newburgh, Ellon AB41 6BH</span>
              </li>
            </ul>
          </div>

          {/* Hours & Service Areas */}
          <div>
            <h4 className="text-white mb-4">Studio Hours</h4>
            <div className="flex items-start gap-2 text-sm mb-6">
              <Clock className="size-4 mt-0.5 shrink-0" />
              <div>
                <p className="text-slate-300">Thursdays Only</p>
                <p className="text-xs text-slate-400 mt-1">
                  Home visits available daily
                </p>
              </div>
            </div>
            <h4 className="text-white mb-3">Service Areas</h4>
            <p className="text-sm text-slate-300">
              Aberdeen, Aberdeenshire & surrounding areas
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} 2Care Foot Health. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <span>Registered: PRFHC0090</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
