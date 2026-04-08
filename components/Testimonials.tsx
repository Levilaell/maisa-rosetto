const testimonials = [
  {
    name: "Clodomiro de Toledo V. Júnior",
    text: "Vim pra fazer um trabalho de clareamento e outros serviços que eu precisava. Ela me indicou as facetas, gostei bastante do resultado. SUPER recomendo.",
    service: "Clareamento e Facetas",
    video:
      "https://www.dentistanocentro.com.br/wp-content/uploads/2023/01/video-depoimento.mp4",
  },
  {
    name: "Flávia",
    text: "O tratamento é excepcional. Parece um encontro entre amigas, que você sempre sai melhor. Moro em Paris e sempre que passo pelo Brasil, passo aqui na Dra. Maísa. Realmente é uma profissional excepcional.",
    service: "Estética e Botox",
    video:
      "https://www.dentistanocentro.com.br/wp-content/uploads/2023/01/Video-depoimento-2.mp4",
  },
  {
    name: "Soraia",
    text: "Eu e a minha família, a gente não abre mão de ser tratada aqui pela Dra. Maísa. Vim fazer uma limpeza e acabei fazendo um tratamento super completo. Minha irmã e minha irmã mais nova também fazem tratamento com ela.",
    service: "Tratamento Completo",
    video:
      "https://www.dentistanocentro.com.br/wp-content/uploads/2023/01/soraia_depoimento.mp4",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-wider text-gold uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
            O que nossos pacientes dizem
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-warm-gray">
            Histórias reais de pacientes que transformaram seus sorrisos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative flex flex-col rounded-2xl border border-charcoal/5 bg-cream p-7"
            >
              {/* Video */}
              <div className="mb-5">
                <video
                  controls
                  preload="none"
                  className="aspect-[9/16] w-full rounded-xl bg-charcoal/5 object-cover"
                  aria-label={`Depoimento de ${t.name}`}
                >
                  <source src={t.video} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>

              {/* Quote icon */}
              <svg
                className="mb-4 h-8 w-8 text-gold/30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151C7.547 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <p className="flex-1 text-sm leading-relaxed text-warm-gray italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-charcoal/5 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <span className="text-sm font-bold text-gold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-charcoal">
                    {t.name}
                  </span>
                  <span className="text-xs text-warm-gray">{t.service}</span>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
