export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Welcome to Moure
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
        A modern web experience built with Next.js, TypeScript, and Tailwind CSS.
        Fast, accessible, and ready for production.
      </p>
      <div className="flex gap-4">
        <a
          href="#features"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Get Started
        </a>
        <a
          href="#about"
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
