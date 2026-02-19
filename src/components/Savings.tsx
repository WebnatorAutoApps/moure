export default function Savings() {
  return (
    <section id="savings" className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
            ROI
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            The Cost of Doing Nothing Adds Up
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            False alarms aren&rsquo;t just an annoyance&mdash;they have
            measurable financial impact on your organization.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-4xl font-bold text-blue-600">$1.5M+</p>
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Average annual cost
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              of false alarm dispatches for mid-size enterprises
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-4xl font-bold text-blue-600">80%</p>
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Of all alarms
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              in a typical security system are false positives
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-4xl font-bold text-blue-600">3,200+</p>
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Hours recovered
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              per year on average by eliminating false alarm investigations
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-4xl font-bold text-green-600">6 Months</p>
            <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
              Typical payback period
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Most customers recoup their investment within the first half year
            </p>
          </div>
        </div>

        {/* Before / After comparison */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="text-center text-xl font-semibold">
            Before &amp; After Moure
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
              <h4 className="font-semibold text-red-700 dark:text-red-400">
                Without Moure
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-red-500" aria-hidden="true">&#10005;</span>
                  Thousands of false alarms per week
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500" aria-hidden="true">&#10005;</span>
                  Operator burnout and high turnover
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500" aria-hidden="true">&#10005;</span>
                  Real threats lost in the noise
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500" aria-hidden="true">&#10005;</span>
                  Escalating dispatch and investigation costs
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
              <h4 className="font-semibold text-green-700 dark:text-green-400">
                With Moure
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="text-green-500" aria-hidden="true">&#10003;</span>
                  Up to 90% reduction in false alarms
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500" aria-hidden="true">&#10003;</span>
                  Focused team working on real threats
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500" aria-hidden="true">&#10003;</span>
                  Faster response to genuine incidents
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500" aria-hidden="true">&#10003;</span>
                  Significant reduction in operational costs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
