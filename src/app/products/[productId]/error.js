"use client"
import Link from "next/link";

export default function ProductByIdError({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-2xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h2 className="mt-4 text-2xl font-semibold text-red-800">Unable to load product</h2>
        <p className="mt-2 text-sm text-red-700">{error?.message ?? "An unexpected error occurred."}</p>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => reset?.()}
            className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
          >
            Retry
          </button>

          <Link
            href="/products"
            className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
          >
            Back to products
          </Link>
        </div>
      </div>
    </div>
  );
}