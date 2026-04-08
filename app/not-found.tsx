import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-5 text-center">
      <h1 className="font-serif text-6xl font-bold text-gold">404</h1>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-charcoal">
        Página não encontrada
      </h2>
      <p className="mt-3 max-w-md text-base text-warm-gray">
        A página que você está procurando não existe ou foi movida.
        Que tal voltar para a página inicial?
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
      >
        Voltar para o Início
      </Link>
    </div>
  );
}
