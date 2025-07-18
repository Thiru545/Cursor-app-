import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Book, CartItem } from '../types/book'

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Book }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.book.id === action.payload.id)
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.book.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.book.price * item.quantity, 0),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        }
      }
      
      const newItems = [...state.items, { book: action.payload, quantity: 1 }]
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.book.price * item.quantity, 0),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.book.id !== action.payload)
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.book.price * item.quantity, 0),
        itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
      }
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: action.payload.id })
      }
      
      const updatedItems = state.items.map(item =>
        item.book.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.book.price * item.quantity, 0),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      }
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0,
      }
    
    default:
      return state
  }
}

interface CartContextType extends CartState {
  addToCart: (book: Book) => void
  removeFromCart: (bookId: string) => void
  updateQuantity: (bookId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0,
  })

  const addToCart = (book: Book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book })
  }

  const removeFromCart = (bookId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: bookId })
  }

  const updateQuantity = (bookId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: bookId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}