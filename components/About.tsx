import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://www.dentistanocentro.com.br/wp-content/uploads/2023/01/Dentista-Maisa-2.jpeg"
                alt="Dra. Maísa Rossetto em seu consultório"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 hidden rounded-xl bg-gold px-5 py-3 text-center shadow-lg md:block">
              <span className="block font-serif text-2xl font-bold text-white">
                +20
              </span>
              <span className="text-xs font-medium text-white/90">
                anos de experiência
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-wider text-gold uppercase">
              Sobre a Doutora
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
              Dra. Maísa Rossetto
            </h2>
            <p className="mt-1 text-sm font-medium text-warm-gray">
              CRO-SP 84053 &middot; Cirurgiã-Dentista
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-warm-gray">
              <p>
                Sou apaixonada por transformar vidas e me envolver com a história de
                cada paciente. Me formei pela UNIP em 2006 e me pós-graduei em 2008 em
                endodontia (tratamento de canal). Desde sempre, direcionei minha
                formação acadêmica a tornar cada sorriso transformado na sua melhor
                versão.
              </p>
              <p>
                Especialista em endodontia, pós-graduada em Psicologia Positiva pela PUC
                Paraná e voltada para pacientes com fobia e ansiedade. Monitora em
                Odontologia Integrativa e Urgência Odontológica pela Plenitude Educação.
              </p>
              <p>
                No meu consultório aqui no centro de São Paulo, desde 2004, utilizo as
                melhores técnicas e os mais avançados equipamentos da Odontologia
                Digital — Invisalign, aparelhos autoligados, transparentes e confecção
                rápida de dentes. Me emociono com cada caso que finalizo e vibro junto
                com meus pacientes quando vemos o resultado almejado.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Endodontia", desc: "Especialista desde 2008" },
                { label: "Odontologia Digital", desc: "Invisalign e tecnologia" },
                { label: "Psicologia Positiva", desc: "PUC Paraná" },
                { label: "Atendimento Humanizado", desc: "Fobia e ansiedade" },
                { label: "Formação UNIP", desc: "Graduação em 2006" },
                { label: "Educação Continuada", desc: "Plenitude Educação" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-cream p-4">
                  <span className="text-sm font-semibold text-charcoal">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-warm-gray">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
            >
              Agende sua Consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
