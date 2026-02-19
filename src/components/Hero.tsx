export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
      <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
        AI-Powered Alarm Intelligence
      </span>
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Stop False Alarms Before They Cost You Time and Money
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
        Moure uses machine learning to detect and filter false alarms in
        real time&mdash;so your security team can focus on genuine threats
        instead of chasing false positives.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="#cta"
          className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Request a Demo
        </a>
        <a
          href="#solution"
          className="rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900"
        >
          See How It Works
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
        <div>
          <p className="text-3xl font-bold text-blue-600">Up to 90%</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Fewer false alarms
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">60%</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Lower operational costs
          </p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">Real-Time</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Alarm analysis &amp; filtering
          </p>
        </div>
      </div>
    </section>
  );
}
