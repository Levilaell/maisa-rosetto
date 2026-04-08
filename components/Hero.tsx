import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center bg-cream"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-5 py-28 md:flex-row md:gap-16 md:py-20">
        {/* Text */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-block rounded-full bg-beige px-4 py-1.5 text-xs font-semibold tracking-wider text-gold uppercase">
            Dentista no Centro de SP
          </span>
          <h1 className="font-serif text-4xl leading-tight font-bold text-charcoal sm:text-5xl lg:text-6xl">
            Seu sorriso merece{" "}
            <span className="text-gold">cuidado especial</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-warm-gray">
            Há mais de 20 anos transformando sorrisos com tecnologia de ponta,
            acolhimento e excelência. Clínica odontológica premium no coração de
            São Paulo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://wa.me/5511965360450?text=Olá, gostaria de agendar uma consulta!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-gold/25 transition-all hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/30"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </Link>
            <Link
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border-2 border-charcoal/10 px-7 py-3.5 text-base font-semibold text-charcoal transition-all hover:border-gold hover:text-gold"
            >
              Ver Serviços
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-warm-gray">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium text-charcoal">5.0</span> no Google
            </div>
            <span className="h-4 w-px bg-warm-gray-light" />
            <span>+20 anos de experiência</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl shadow-charcoal/10 md:max-w-md">
            <Image
              src="/images/dra-maisa-hero.jpeg"
              alt="Dra. Maísa Rossetto - Dentista no Centro de São Paulo"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-gold/10" />
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-teal/10" />
        </div>
      </div>
    </section>
  );
}
