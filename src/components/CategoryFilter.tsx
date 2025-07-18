import React from 'react'
import { Category } from '../types/book'
import { cn } from '../lib/utils'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      
      <div className="space-y-2">
        {/* All Categories */}
        <button
          onClick={() => onCategoryChange(null)}
          className={cn(
            "w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors",
            selectedCategory === null
              ? "bg-primary-100 text-primary-700 font-medium"
              : "text-gray-700 hover:bg-gray-100"
          )}
        >
          <span className="text-lg">📚</span>
          <span>All Books</span>
        </button>

        {/* Category List */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors",
              selectedCategory === category.id
                ? "bg-primary-100 text-primary-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}