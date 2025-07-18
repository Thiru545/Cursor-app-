import React, { useState, useRef } from 'react'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoryFilter } from './components/CategoryFilter'
import { BookCard } from './components/BookCard'
import { Cart } from './components/Cart'
import { BookModal } from './components/BookModal'
import { books, categories } from './data/books'
import { Book } from './types/book'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)
  
  const booksRef = useRef<HTMLElement>(null)

  // Filter books based on search query and selected category
  const filteredBooks = books.filter(book => {
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = selectedCategory === null || book.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredBooks = books.filter(book => book.featured)

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
  }

  const handleCartClick = () => {
    setIsCartOpen(true)
  }

  const handleCartClose = () => {
    setIsCartOpen(false)
  }

  const handleBookClick = (book: Book) => {
    setSelectedBook(book)
    setIsBookModalOpen(true)
  }

  const handleBookModalClose = () => {
    setIsBookModalOpen(false)
    setSelectedBook(null)
  }

  const handleExploreBooksClick = () => {
    booksRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onSearchChange={handleSearchChange} onCartClick={handleCartClick} />
        
        <main>
          {/* Hero Section */}
          <Hero onExploreBooksClick={handleExploreBooksClick} />

          {/* Featured Books Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Featured Books
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover our hand-picked selection of must-read books
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onViewDetails={handleBookClick}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* All Books Section */}
          <section ref={booksRef} className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Browse All Books
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Explore our complete collection of books across all genres
                </p>
              </div>

              <div className="lg:flex lg:space-x-8">
                {/* Sidebar */}
                <div className="lg:w-1/4 mb-8 lg:mb-0">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>

                {/* Books Grid */}
                <div className="lg:w-3/4">
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-600">
                      Showing {filteredBooks.length} of {books.length} books
                      {searchQuery && (
                        <span className="ml-1">
                          for "<span className="font-medium">{searchQuery}</span>"
                        </span>
                      )}
                      {selectedCategory && (
                        <span className="ml-1">
                          in <span className="font-medium">
                            {categories.find(c => c.id === selectedCategory)?.name}
                          </span>
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Books Grid */}
                  {filteredBooks.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredBooks.map((book) => (
                        <BookCard
                          key={book.id}
                          book={book}
                          onViewDetails={handleBookClick}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📚</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No books found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Try adjusting your search or filter criteria
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('')
                          setSelectedCategory(null)
                        }}
                        className="btn btn-primary"
                      >
                        Clear Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <span className="text-xl font-bold">BookStore</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Your trusted partner for discovering and enjoying great books. 
                  We're passionate about connecting readers with their next favorite story.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Fiction</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Non-Fiction</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 BookStore. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Modals */}
        <Cart isOpen={isCartOpen} onClose={handleCartClose} />
        <BookModal 
          book={selectedBook} 
          isOpen={isBookModalOpen} 
          onClose={handleBookModalClose} 
        />
      </div>
    </CartProvider>
  )
}

export default App