import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
        Page not found
      </p>
      <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl">404</h1>
      <p className="mt-4 max-w-md text-base text-gray-600 sm:text-lg">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        Go back home
      </Link>
    </div>
  );
}