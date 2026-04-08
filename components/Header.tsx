"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="#inicio" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-charcoal">
            Dra. Maísa Rossetto
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-warm-gray transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Agendar Consulta
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-white px-5 pb-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-warm-gray transition-colors hover:bg-beige hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  );
}
