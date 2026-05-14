'use client'

import React from 'react'
import Link from 'next/link'

const AuthHeader = ({children}) => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition">
            <div className="text-4xl font-black tracking-tight">⚡FLASH</div>
            <span className="text-sm font-semibold opacity-90">eCommerce</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-indigo-200 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-indigo-200 transition">
              Products
            </Link>
            <Link href="/contact" className="hover:text-indigo-200 transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function AuthLayout({ children }) {
  return (
    <div>
      <AuthHeader />
      <main>{children}</main>
    </div>
  )
}