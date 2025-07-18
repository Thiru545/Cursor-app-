export interface Book {
  id: string
  title: string
  author: string
  price: number
  originalPrice?: number
  image: string
  description: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
}

export interface CartItem {
  book: Book
  quantity: number
}

export interface Category {
  id: string
  name: string
  icon: string
}