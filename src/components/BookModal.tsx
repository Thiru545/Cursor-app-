import React from 'react'
import { X, Star, ShoppingCart } from 'lucide-react'
import { Book } from '../types/book'
import { useCart } from '../context/CartContext'
import { formatPrice, cn } from '../lib/utils'

interface BookModalProps {
  book: Book | null
  isOpen: boolean
  onClose: () => void
}

export const BookModal: React.FC<BookModalProps> = ({ book, isOpen, onClose }) => {
  const { addToCart } = useCart()

  if (!isOpen || !book) return null

  const handleAddToCart = () => {
    if (book.inStock) {
      addToCart(book)
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Book Image */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full bg-gray-100">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {book.originalPrice && book.originalPrice > book.price && (
                    <div className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-md">
                      {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                    </div>
                  )}
                  {book.featured && (
                    <div className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-md">
                      Featured
                    </div>
                  )}
                </div>

                {/* Out of Stock Overlay */}
                {!book.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold text-2xl">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
              <div>
                {/* Title and Author */}
                <div className="mb-6">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {book.title}
                  </h1>
                  <p className="text-lg text-gray-600">by {book.author}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(book.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium text-gray-900">{book.rating}</span>
                  <span className="text-gray-600">({book.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(book.price)}
                  </span>
                  {book.originalPrice && book.originalPrice > book.price && (
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(book.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
                    {book.category}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{book.description}</p>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-auto">
                {book.inStock ? (
                  <button
                    onClick={handleAddToCart}
                    className="w-full btn btn-primary py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-4 text-lg font-semibold bg-gray-100 text-gray-400 rounded-md cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}