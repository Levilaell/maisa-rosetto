import Link from "next/link";

export default function Location() {
  return (
    <section id="contato" className="bg-beige py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">
            Localização & Contato
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
            Venha nos visitar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-warm-gray">
            Estamos no coração de São Paulo, com fácil acesso por metrô.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Address Card */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold/10 p-3 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-charcoal">
                    Endereço
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-warm-gray">
                    Rua Nova Barão, 37<br />
                    Ed. Barão 3, Sala 409 H<br />
                    Bairro República — CEP 01042-001<br />
                    São Paulo — SP
                  </p>
                  <p className="mt-2 text-xs text-warm-gray">
                    Próximo aos metrôs República, Anhangabaú e Teatro Municipal
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold/10 p-3 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-charcoal">
                    Horário de Atendimento
                  </h3>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-warm-gray">Segunda a Sexta</span>
                      <span className="font-medium text-charcoal">
                        08:00 — 20:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-warm-gray">Sábado</span>
                      <span className="font-medium text-charcoal">
                        11:00 — 16:00
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-warm-gray">Domingo</span>
                      <span className="text-warm-gray">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gold/10 p-3 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-charcoal">
                    Contato
                  </h3>
                  <div className="mt-2 space-y-1.5">
                    <a
                      href="tel:+551131299822"
                      className="block text-sm text-warm-gray transition-colors hover:text-gold"
                    >
                      Telefone: (11) 3129-9822
                    </a>
                    <a
                      href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-warm-gray transition-colors hover:text-gold"
                    >
                      WhatsApp: (11) 9.6536-0450
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gold p-5 text-lg font-semibold text-white shadow-lg shadow-gold/20 transition-all hover:bg-gold-dark hover:shadow-xl"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Consulta pelo WhatsApp
            </Link>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975826946097!2d-46.6423!3d-23.5436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584e8e94cdeb%3A0xf0f0f0f0f0f0f0f0!2sR.%20Nova%20Bar%C3%A3o%2C%2037%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001042-001!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="min-h-[400px] border-0 lg:min-h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório Dra. Maísa Rossetto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
