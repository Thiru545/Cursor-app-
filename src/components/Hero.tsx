import React from 'react'
import { ArrowRight, BookOpen, Star, Users } from 'lucide-react'

interface HeroProps {
  onExploreBooksClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreBooksClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Hero Content */}
          <div className="lg:w-1/2 lg:pr-16">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Discover Your Next
                <span className="text-primary-600 block">Great Read</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Explore thousands of books across all genres. From bestsellers to hidden gems, 
                find your perfect book and have it delivered to your door.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={onExploreBooksClick}
                  className="btn btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Explore Books</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="btn btn-secondary px-8 py-4 text-lg font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-3 mx-auto">
                  <BookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Books Available</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-3 mx-auto">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3 mx-auto">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50,000+</div>
                <div className="text-sm text-gray-600">Happy Readers</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
                    alt="Book cover"
                    className="w-full rounded-lg shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop"
                    alt="Book cover"
                    className="w-full rounded-lg shadow-lg transform -rotate-2 hover:-rotate-3 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                    alt="Book cover"
                    className="w-full rounded-lg shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop"
                    alt="Book cover"
                    className="w-full rounded-lg shadow-lg transform rotate-2 hover:rotate-3 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-100 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}