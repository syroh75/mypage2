import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  onOpenAdmin: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'VIDEO PORTFOLIO', href: '#portfolio' },
    { name: 'CREATIVE PROJECTS', href: '#projects' },
    { name: 'CREATIVE NOTES', href: '#notes' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090b]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#home" className="flex items-center space-x-2.5 group">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse group-hover:scale-125 transition-transform" />
          <span className="font-extrabold text-sm md:text-base tracking-tighter text-white uppercase group-hover:text-accent transition-colors">
            CREATIVE DIRECTION
          </span>
          <Badge variant="outline" className="hidden sm:inline-flex text-[10px] py-0 px-2 text-zinc-400">
            AI PRODUCTION
          </Badge>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-tight text-zinc-300 hover:text-accent transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action button & Admin access */}
        <div className="hidden sm:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenAdmin}
            className="text-xs text-zinc-400 hover:text-accent flex items-center gap-1.5 px-2.5"
            title="관리자 패널"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>CMS</span>
          </Button>

          <Button
            size="sm"
            className="text-xs font-bold gap-1.5 px-4"
            onClick={() => {
              const el = document.getElementById('contact')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span>협업 문의</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-200 hover:text-accent"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f12] border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-tight text-zinc-300 hover:text-accent transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenAdmin()
              }}
              className="text-xs gap-1.5"
            >
              <Shield className="w-3.5 h-3.5 text-accent" />
              <span>CMS 관리자</span>
            </Button>

            <Button
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false)
                const el = document.getElementById('contact')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-xs font-bold"
            >
              협업 문의
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
