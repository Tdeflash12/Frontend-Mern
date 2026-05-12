import { useState } from 'react'
import { Link } from 'react-router'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className='site-header'>
      <div className='header-glow' aria-hidden='true' />
      <div className='header-inner'>
        <Link className='brand' to='/'>
          <span className='brand-mark'>FM</span>
          <span className='brand-text'>Frontend Market</span>
        </Link>

        <button
          type='button'
          className='menu-toggle'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle navigation menu'
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button type='button' className='header-cta'>
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header