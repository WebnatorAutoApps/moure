export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold">Moure</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              AI-powered false alarm detection
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="#problem"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              The Problem
            </a>
            <a
              href="#solution"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              Solution
            </a>
            <a
              href="#benefits"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              Benefits
            </a>
            <a
              href="#cta"
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Moure. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
