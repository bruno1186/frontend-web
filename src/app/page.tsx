export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold text-brand">frontend-web</h1>
      <p className="max-w-md text-center text-gray-600">
        Aplicacao web construida com Next.js 14, React, TypeScript e Tailwind CSS.
      </p>
      <a
        href="https://github.com/bruno1186/frontend-web"
        className="rounded-lg bg-brand px-5 py-2 text-white transition hover:bg-brand-dark"
      >
        Ver no GitHub
      </a>
    </main>
  );
}
