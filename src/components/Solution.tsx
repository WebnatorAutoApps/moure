export default function Solution() {
  return (
    <section id="solution" className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            AI That Separates Real Threats From Noise
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Moure sits between your alarm sources and your operations team,
            analyzing every alert in real time to determine whether it requires
            human attention.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {/* Pipeline visualization */}
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-5 sm:gap-0">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-lg font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                1
              </div>
              <h3 className="mt-3 text-sm font-semibold">Alarm Ingestion</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                All alarms flow into Moure from your existing systems.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-4 sm:py-0">
              <svg
                className="h-6 w-6 rotate-90 text-gray-400 sm:rotate-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                2
              </div>
              <h3 className="mt-3 text-sm font-semibold">
                AI Analysis
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Machine learning models classify each alarm&rsquo;s
                authenticity.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-4 sm:py-0">
              <svg
                className="h-6 w-6 rotate-90 text-gray-400 sm:rotate-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-lg font-bold text-white">
                3
              </div>
              <h3 className="mt-3 text-sm font-semibold">
                Verified Alerts Only
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Your team receives only validated, actionable alerts.
              </p>
            </div>
          </div>
        </div>

        {/* Feature details */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
            <h3 className="text-lg font-semibold">Seamless Integration</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Connects to your existing alarm management platform, SIEM, or
              monitoring stack via standard APIs. No rip-and-replace required.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
            <h3 className="text-lg font-semibold">Continuous Learning</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              The AI model improves over time by learning from your
              team&rsquo;s feedback on alarm outcomes, getting smarter with
              every decision.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
            <h3 className="text-lg font-semibold">Transparent Decisions</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Every filtered alarm includes a confidence score and
              reasoning&mdash;so your team always understands why a decision
              was made.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-700">
            <h3 className="text-lg font-semibold">Human-in-the-Loop</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Operators can override any AI decision at any time. Moure
              assists your team&mdash;it never replaces human judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
