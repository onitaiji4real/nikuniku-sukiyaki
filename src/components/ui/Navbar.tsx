"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "path";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import clsx from "clsx";
import { brandInfo } from "@/lib/data";
import { Button } from "./Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "品牌故事", href: "#story" },
    { name: "美味極致", href: "#menu" },
    { name: "店鋪資訊", href: "#locations" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-sumi-950/90 backdrop-blur-md border-b border-sumi-800 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-sumi-50">
          黑岩家<span className="text-gold-500 text-sm ml-2 font-sans tracking-normal">Nikuniku</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sumi-200 hover:text-gold-500 transition-colors tracking-wider text-sm"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" onClick={() => window.open(brandInfo.bookingUrl, '_blank')}>
            立即訂位
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-sumi-50 hover:text-gold-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sumi-950/95 border-b border-sumi-800 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg text-sumi-50 hover:text-gold-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full" onClick={() => window.open(brandInfo.bookingUrl, '_blank')}>
            立即訂位
          </Button>
        </div>
      )}
    </nav>
  );
}
