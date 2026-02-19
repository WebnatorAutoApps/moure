export default function CTA() {
  return (
    <section
      id="cta"
      className="border-t border-gray-200 bg-blue-600 dark:border-gray-800"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Eliminate False Alarms?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
          See how Moure can reduce your false alarm rate, cut costs, and give
          your security team their time back. Schedule a personalized demo with
          our team.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:contact@moure.ai"
            className="inline-block w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Schedule a Demo
          </a>
          <a
            href="mailto:contact@moure.ai"
            className="inline-block w-full rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Contact Sales
          </a>
        </div>
        <p className="mt-6 text-sm text-blue-200">
          No commitment required &middot; Free 30-day pilot available
        </p>
      </div>
    </section>
  );
}
