import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Hearing Aids", href: "/hearingaid" },
    { label: "Hearing Health", href: "/Health" },
    { label: "Book Appointment", href: "/Appointment" },
    { label: "Products", href: "/Products" },
  ];

  const products = [
    "Digital Hearing Aids",
    "Rechargeable Aids",
    "Invisible Aids",
    "Bluetooth Aids",
    "Tinnitus Solutions",
    "Accessories",
  ];

  const support = [
    { label: "Book Appointment", href: "/Appointment" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Sri Raga Pranitha
              </h2>
              <p className="text-blue-200 leading-relaxed max-w-md">
                India's leading hearing care provider, dedicated to bringing back
                the joy of hearing. We offer comprehensive hearing solutions with
                certified audiologists and cutting-edge technology.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-blue-300 mt-0.5 group-hover:text-blue-200 transition-colors" />
                <div>
                  <p className="text-blue-100 group-hover:text-white transition-colors">
                    +91 88012 29982
                  </p>
                  <p className="text-sm text-blue-300">Mon-Sat, 9AM - 7PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-blue-300 mt-0.5 group-hover:text-blue-200 transition-colors" />
                <p className="text-blue-100 group-hover:text-white transition-colors">
                  sriragapranitha@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 group-hover:text-blue-200 transition-colors" />
                <p className="text-blue-100 group-hover:text-white transition-colors max-w-xs">
                  D No-10-3-203c, Beside Prameela Hospital, Beside NTR Blood Bank,
                  Kotakommala Street, Reddy & Reddy Colony, Tirupati-517501,
                  Andhra Pradesh
                </p>
              </div>
            </div>

            {/* Social Media */}
            {/* <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-100">Follow Us</h3>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-blue-700/50 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 group"
                    >
                      <Icon className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
                    </a>
                  )
                )}
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-100 border-b border-blue-700/50 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group"
                  >
                    <span className="group-hover:underline">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-100 border-b border-blue-700/50 pb-2">
              Our Products
            </h3>
            <ul className="space-y-2.5">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-blue-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-100 border-b border-blue-700/50 pb-2">
              Support
            </h3>
            <ul className="space-y-2.5">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 group"
                  >
                    <span className="group-hover:underline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/50 bg-blue-950/50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm text-center md:text-left">
            © 2024 Sri Raga Pranitha. All rights reserved. | Bringing back the joy
            of hearing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-blue-700">|</span>
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-blue-700">|</span>
            <a
              href="#"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
              
            
          </div>
        </div>
      </div>
    </footer>
  );
}
