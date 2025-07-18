# 📚 BookStore App

A modern, responsive bookstore application built with React, TypeScript, and Tailwind CSS. Features a beautiful UI, shopping cart functionality, search and filtering capabilities, and a mobile-first design.

![BookStore App](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=400&fit=crop)

## ✨ Features

- **📱 Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **🛒 Shopping Cart**: Add/remove items, adjust quantities, view total
- **🔍 Search & Filter**: Search by title, author, or description; filter by category
- **📖 Book Details**: View detailed information in a beautiful modal
- **⭐ Featured Books**: Highlighted selection of recommended books
- **🏷️ Categories**: Browse books by genre (Fiction, Science, Technology, etc.)
- **💰 Pricing**: Support for original prices and discounts
- **📊 Ratings**: Star ratings and review counts
- **🎨 Modern UI**: Clean, professional design with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd bookstore-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API with useReducer
- **Development**: Hot Module Replacement (HMR)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation and search
│   ├── Hero.tsx        # Landing section
│   ├── BookCard.tsx    # Individual book display
│   ├── BookModal.tsx   # Book details modal
│   ├── Cart.tsx        # Shopping cart sidebar
│   └── CategoryFilter.tsx # Category filtering
├── context/            # React context providers
│   └── CartContext.tsx # Shopping cart state management
├── data/              # Sample data
│   └── books.ts       # Book and category data
├── lib/               # Utility functions
│   └── utils.ts       # Helper functions
├── types/             # TypeScript type definitions
│   └── book.ts        # Book-related interfaces
├── App.tsx            # Main application component
├── index.css          # Global styles and Tailwind
└── main.tsx           # Application entry point
```

## 🎯 Key Components

### 📚 BookCard
- Displays book information with cover image
- Shows pricing, ratings, and availability
- Hover effects with action buttons
- Responsive design for all screen sizes

### 🛒 Shopping Cart
- Add/remove items with quantity controls
- Real-time total calculation
- Persistent cart state
- Smooth slide-out panel

### 🔍 Search & Filter
- Real-time search across title, author, and description
- Category filtering with visual indicators
- Clear filters functionality
- Results count display

### 📱 Responsive Design
- Mobile-first approach
- Collapsible navigation menu
- Optimized layouts for different screen sizes
- Touch-friendly interactions

## 🎨 Customization

### Adding New Books

Edit `src/data/books.ts` to add new books:

```typescript
{
  id: 'unique-id',
  title: 'Book Title',
  author: 'Author Name',
  price: 19.99,
  originalPrice: 24.99, // Optional for discounts
  image: 'https://example.com/book-cover.jpg',
  description: 'Book description...',
  category: 'fiction',
  rating: 4.5,
  reviews: 1234,
  inStock: true,
  featured: false // Optional
}
```

### Adding New Categories

Update the `categories` array in `src/data/books.ts`:

```typescript
{
  id: 'category-id',
  name: 'Category Name',
  icon: '📚' // Emoji or icon
}
```

### Styling

The app uses Tailwind CSS with a custom color palette defined in `tailwind.config.js`. You can modify the primary colors by updating the configuration.

## 📸 Screenshots

### Desktop View
- Clean, professional layout
- Easy navigation and search
- Detailed product cards

### Mobile View
- Optimized for touch interactions
- Collapsible menu
- Responsive grid layout

### Shopping Cart
- Slide-out cart panel
- Quantity controls
- Real-time total updates

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Netlify/Vercel

1. Connect your repository to your hosting platform
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- [ ] User authentication and accounts
- [ ] Wishlist functionality
- [ ] Advanced filtering (price range, ratings)
- [ ] Book recommendations
- [ ] Reviews and comments system
- [ ] Payment integration
- [ ] Order history
- [ ] Admin panel for book management
- [ ] Dark mode support
- [ ] Internationalization (i18n)

## 📞 Support

If you have any questions or need help with the setup, please feel free to open an issue or contact the development team.

---

**Happy Reading! 📚✨**