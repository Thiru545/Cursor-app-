import React from 'react'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import { Book } from '../types/book'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'

interface BookCardProps {
  book: Book
  onViewDetails: (book: Book) => void
}

export const BookCard: React.FC<BookCardProps> = ({ book, onViewDetails }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (book.inStock) {
      addToCart(book)
    }
  }

  const handleViewDetails = () => {
    onViewDetails(book)
  }

  return (
    <div className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Book Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onClick={handleViewDetails}
        />
        
        {/* Discount Badge */}
        {book.originalPrice && book.originalPrice > book.price && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md">
            {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* Featured Badge */}
        {book.featured && (
          <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-md">
            Featured
          </div>
        )}

        {/* Out of Stock Overlay */}
        {!book.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button
              onClick={handleViewDetails}
              className="p-2 bg-white rounded-full text-gray-700 hover:text-primary-600 transition-colors shadow-md"
            >
              <Eye className="h-4 w-4" />
            </button>
            {book.inStock && (
              <button
                onClick={handleAddToCart}
                className="p-2 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors shadow-md"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Book Info */}
      <div className="p-4" onClick={handleViewDetails}>
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{book.author}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(book.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {book.rating} ({book.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(book.price)}
            </span>
            {book.originalPrice && book.originalPrice > book.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(book.originalPrice)}
              </span>
            )}
          </div>
          
          {book.inStock && (
            <button
              onClick={handleAddToCart}
              className="btn btn-primary px-3 py-1 text-sm md:hidden"
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* Category */}
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-medium text-primary-700 bg-primary-100 rounded-full">
            {book.category}
          </span>
        </div>
      </div>
    </div>
  )
}