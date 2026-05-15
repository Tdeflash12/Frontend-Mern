
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dokan",
  description: "E-commerce website",
  keywords: ["e-commerce", "online shopping", "buy online", "sell online", "marketplace"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Dokan</Link>

            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <input
                type="search"
                placeholder="Search products"
                className="hidden sm:inline-block border rounded px-2 py-1 text-sm"
              />
              <Link href="/cart" className="text-gray-700 hover:text-gray-900">Cart</Link>
              <button className="md:hidden text-gray-700">Menu</button>
            </div>
          </div>
        </header>

        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>

        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Dokan. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
