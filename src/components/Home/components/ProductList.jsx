import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function BrowsingHistoryCarousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const navigate=useNavigate();

  const handleChange=(id)=>{
    navigate(`/productdetails/${id}`)
  }

  const products = [
    {
      id: 1,
      title: "COOL AND CASUAL Beach Wear for Women Co Ord Set Three Piece Dress Top And Short and Shrug Beach Dresses fo...",
      image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&q=80",
      price: "₹741.00",
      rating: 4,
      reviews: 319,
      viewedInfo: "200+ viewed in past month",
      freeDelivery: true
    },
    {
      id: 2,
      title: "Aahwan Solid Ditsy Floral Print Shirred Mini Cami Dress For Women's & Girl's",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
      price: "₹499.00",
      rating: 4,
      reviews: 8,
      freeDelivery: false
    },
    {
      id: 3,
      title: "Indigiam Styles Beach Wear Multicolor Co Ord Set Two Piece Dress Top Short for Women",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
      price: "₹989.00",
      rating: 3,
      reviews: 43,
      viewedInfo: "300+ viewed in past month",
      freeDelivery: false
    },
    {
      id: 4,
      title: "ALL YOURS Women's Floral Printed Dress| Floral Dresses for ...",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80",
      price: "₹517.00",
      rating: 4.5,
      reviews: 60,
      viewedInfo: "300+ viewed in past month",
      freeDelivery: true,
      primeDelivery: true
    },
    {
      id: 5,
      title: "Aahwan Women's Midi Fit And Flare Dress",
      image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=400&q=80",
      price: "₹429.00",
      rating: 4,
      reviews: 205,
      viewedInfo: "200+ viewed in past month",
      freeDelivery: false
    },
    {
      id: 6,
      title: "Beach Dresses for Women Co Ord Set 2 Piece Dress Shirt and Short Beach Wear for Women || Beach Dress for...",
      image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80",
      price: "₹424.00 - ₹471.00",
      rating: 4,
      reviews: 50,
      viewedInfo: "200+ viewed in past month",
      freeDelivery: false
    }
  ];

  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1 text-xs">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(rating)
                ? 'fill-orange-400 text-orange-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-gray-600">{reviews}</span>
    </div>
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Inspired by your browsing history
        </h2>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Previous page"
        >
          <FiChevronLeft className="text-2xl text-gray-700" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
                onClick={() => handleChange(product.id)} 
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 space-y-2">
                {/* Title */}
                <h3 className="text-xs sm:text-sm text-gray-800 line-clamp-3 min-h-[2.5rem] sm:min-h-[3rem]">
                  {product.title}
                </h3>

                {/* Rating */}
                <StarRating rating={product.rating} reviews={product.reviews} />

                {/* Viewed Info */}
                {product.viewedInfo && (
                  <p className="text-xs text-gray-500">{product.viewedInfo}</p>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-gray-600">₹</span>
                  <span className="text-lg sm:text-xl font-medium text-gray-900">
                    {product.price.replace('₹', '')}
                  </span>
                </div>

                {/* Delivery Info */}
                {product.freeDelivery && (
                  <p className="text-xs text-gray-600">
                    {product.primeDelivery ? (
                      <span>
                        <span className="font-semibold">FREE Delivery</span> by Amazon
                      </span>
                    ) : (
                      'FREE Delivery'
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          aria-label="Next page"
        >
          <FiChevronRight className="text-2xl text-gray-700" />
        </button>
      </div>

      {/* Page Indicator Dots (Mobile) */}
      <div className="flex justify-center gap-2 mt-6 sm:hidden">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentPage === index + 1
                ? 'bg-orange-500 w-6'
                : 'bg-gray-300'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}