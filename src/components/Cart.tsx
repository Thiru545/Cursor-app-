import React from 'react'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart()

  if (!isOpen) return null

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!')
    clearCart()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Cart ({itemCount})
            </h2>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some books to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.book.id} className="flex items-start space-x-4 border-b border-gray-100 pb-4">
                    {/* Book Image */}
                    <div className="h-16 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                      <img
                        src={item.book.image}
                        alt={item.book.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Book Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.book.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{item.book.author}</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {formatPrice(item.book.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.book.id)}
                          className="p-1 text-red-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 px-6 py-4">
              {/* Total */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Total:</span>
                <span className="text-lg font-bold text-gray-900">{formatPrice(total)}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleCheckout}
                  className="w-full btn btn-primary py-3 text-base font-medium"
                >
                  Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full btn btn-secondary py-2 text-sm"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}