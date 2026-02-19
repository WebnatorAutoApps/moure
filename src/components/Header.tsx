import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Moure
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="#features" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
            Features
          </Link>
          <Link href="#about" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
            About
          </Link>
          <Link href="#contact" className="transition-colors hover:text-gray-900 dark:hover:text-gray-100">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
