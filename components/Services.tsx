const services = [
  {
    title: "Estética Dental",
    description:
      "Facetas de porcelana, lentes de contato dentais e clareamento para um sorriso perfeito.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "Ortodontia",
    description:
      "Invisalign, aparelhos metálicos, autoligados e transparentes. Diagnóstico e tratamento completo.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "Implantes Dentários",
    description:
      "Reposição rápida de dentes perdidos com implantes modernos. Evite problemas estéticos e de mordida.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 5.07m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
    highlight: true,
  },
  {
    title: "Harmonização Facial",
    description:
      "Botox, preenchimento, lifting facial, correção de sorriso gengival e bichectomia.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Clareamento a Laser",
    description:
      "Clareamento profissional para dentes escurecidos com resultados rápidos e duradouros.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Endodontia",
    description:
      "Tratamento de canal com técnicas avançadas. Especialidade da Dra. Maísa.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Prótese Dentária",
    description:
      "Próteses fixas e removíveis de alta qualidade para recuperar a função e estética.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Clínica Geral",
    description:
      "Check-up odontológico, limpezas, restaurações e cuidados preventivos.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Odontopediatria",
    description:
      "Acompanhamento especializado para crianças e gestantes em ambiente acolhedor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Periodontia",
    description:
      "Tratamento da gengiva para saúde bucal completa e prevenção de doenças.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Cirurgia Oral",
    description:
      "Extração de molar incluso e procedimentos cirúrgicos com segurança.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 5.07m-5.1 5.1H21M3 3v18" />
      </svg>
    ),
    highlight: false,
  },
  {
    title: "Bruxismo",
    description:
      "Diagnóstico e tratamento do bruxismo com placas e acompanhamento personalizado.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">
            Tratamentos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-warm-gray">
            Oferecemos um atendimento completo, das técnicas mais avançadas da
            odontologia digital à harmonização facial. Cada tratamento é
            personalizado para suas necessidades.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                service.highlight
                  ? "border-2 border-gold/20 bg-white shadow-md"
                  : "border border-charcoal/5 bg-white hover:border-gold/20"
              }`}
            >
              <div
                className={`inline-flex rounded-xl p-3 ${
                  service.highlight
                    ? "bg-gold/10 text-gold"
                    : "bg-beige text-warm-gray group-hover:bg-gold/10 group-hover:text-gold"
                } transition-colors`}
              >
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-charcoal">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {service.description}
              </p>
              {service.highlight && (
                <span className="mt-3 inline-block text-xs font-semibold text-gold">
                  Destaque ★
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Emergency Banner */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-charcoal p-8 text-center md:p-10">
          <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Atendimento de Urgência
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-warm-gray-light">
            Dor de dente, fratura dental, prótese quebrada ou solta, abscesso?
            Não espere! Entre em contato imediatamente para atendimento emergencial.
          </p>
          <a
            href="https://wa.me/5511965360450?text=Olá, preciso de atendimento de urgência!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Urgência pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
