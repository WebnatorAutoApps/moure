"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Moure
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-medium text-gray-600 md:flex dark:text-gray-400">
          <Link
            href="#problem"
            className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
          >
            The Problem
          </Link>
          <Link
            href="#solution"
            className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
          >
            Solution
          </Link>
          <Link
            href="#benefits"
            className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
          >
            Benefits
          </Link>
          <Link
            href="#savings"
            className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
          >
            Cost Savings
          </Link>
        </nav>

        <a
          href="#cta"
          className="hidden rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:inline-block"
        >
          Request a Demo
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-gray-200 px-6 py-4 md:hidden dark:border-gray-800">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
            <Link
              href="#problem"
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              The Problem
            </Link>
            <Link
              href="#solution"
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              Solution
            </Link>
            <Link
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              Benefits
            </Link>
            <Link
              href="#savings"
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-gray-900 dark:hover:text-gray-100"
            >
              Cost Savings
            </Link>
            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="inline-block rounded-full bg-blue-600 px-5 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Request a Demo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
