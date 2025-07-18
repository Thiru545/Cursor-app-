import React, { useState } from 'react'
import { Search, ShoppingCart, Menu, X, BookOpen } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { cn } from '../lib/utils'

interface HeaderProps {
  onSearchChange: (query: string) => void
  onCartClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange, onCartClick }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { itemCount } = useCart()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">BookStore</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              Categories
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              Bestsellers
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              New Arrivals
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Bestsellers
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                New Arrivals
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                About
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}