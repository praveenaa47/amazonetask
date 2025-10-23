import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel slides data
  const slides = [
    {
      id: 1,
      title: "Great Indian Festival",
      subtitle: "STARTS 27TH SEP",
      category: "Fashion & Beauty",
      discount: "50-80%",
      buttonText: "WISHLIST NOW",
      bgColor: "from-yellow-600 to-yellow-700",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80"
    },
    {
      id: 2,
      title: "Electronics Mega Sale",
      subtitle: "STARTS 28TH SEP",
      category: "Electronics & Gadgets",
      discount: "40-70%",
      buttonText: "SHOP NOW",
      bgColor: "from-blue-600 to-blue-700",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80"
    },
    {
      id: 3,
      title: "Home & Kitchen",
      subtitle: "STARTS 29TH SEP",
      category: "Home Essentials",
      discount: "30-60%",
      buttonText: "EXPLORE NOW",
      bgColor: "from-green-600 to-green-700",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
    },
    {
      id: 4,
      title: "Sports & Fitness",
      subtitle: "STARTS 30TH SEP",
      category: "Sports Equipment",
      discount: "35-65%",
      buttonText: "GRAB DEALS",
      bgColor: "from-red-600 to-red-700",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80"
    },
    {
      id: 5,
      title: "Beauty & Personal Care",
      subtitle: "STARTS 1ST OCT",
      category: "Beauty Products",
      discount: "45-75%",
      buttonText: "SHOP NOW",
      bgColor: "from-pink-600 to-pink-700",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full  p-4">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-4 border-purple-500">
        {/* Carousel Container */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`relative w-full h-full bg-gradient-to-r ${slide.bgColor}`}>
                {/* Decorative Lights */}
                <div className="absolute top-0 left-0 right-0 h-8 flex justify-around items-center">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-yellow-200 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16">
                  <div className="text-center text-white">
                    {/* Festival Badge */}
                    <div className="mb-4 inline-block">
                      <div className="bg-red-600 px-6 py-2 rounded-full text-xs sm:text-sm font-bold">
                        {slide.title}
                      </div>
                      <div className="bg-pink-600 px-4 py-1 mt-1 rounded-full text-xs">
                        {slide.subtitle}
                      </div>
                    </div>

                    {/* Category */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                      {slide.category}
                    </h2>

                    {/* Discount */}
                    <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                      {slide.discount}
                      <span className="text-3xl sm:text-4xl">OFF</span>
                    </div>

                    {/* Button */}
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                      {slide.buttonText} ▼
                    </button>

                    {/* Bank Offers */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                      <span className="bg-white text-blue-600 px-3 py-1 rounded font-semibold">
                        SBI
                      </span>
                      <span className="bg-white text-orange-600 px-3 py-1 rounded font-semibold">
                        ICICI Card
                      </span>
                      <span className="text-white">12% Instant Discount*</span>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="absolute bottom-2 right-4 text-white text-xs">
                  *T&Cs apply
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-20"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="text-2xl text-gray-800" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-20"
          aria-label="Next slide"
        >
          <FiChevronRight className="text-2xl text-gray-800" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-gray-800 w-8'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}