import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-semibold text-white">
              Dra. Maísa Rossetto
            </span>
            <p className="mt-1 text-sm text-warm-gray-light">
              CRO-SP 84053 &middot; Cirurgiã-Dentista
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-warm-gray-light/70">
              Clínica odontológica premium no Centro de São Paulo. Mais de 20 anos
              de experiência em estética, ortodontia, implantes e harmonização facial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white">Links Rápidos</h4>
            <nav className="mt-4 flex flex-col gap-2.5">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-warm-gray-light/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contato</h4>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-warm-gray-light/70">
              <a
                href="tel:+551131299822"
                className="transition-colors hover:text-gold"
              >
                (11) 3129-9822
              </a>
              <a
                href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                WhatsApp: (11) 9.6536-0450
              </a>
              <span>
                Rua Nova Barão, 37, Sala 409 H<br />
                República — São Paulo, SP
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-warm-gray-light/50">
          <p>
            &copy; {new Date().getFullYear()} Consultório Dra. Maísa Rossetto.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
