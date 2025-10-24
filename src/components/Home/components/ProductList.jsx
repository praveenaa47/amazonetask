import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BrowsingHistoryCarousel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  // ✅ Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://backend-5oxl.onrender.com/product");
        if (response.data.success) {
          setProducts(response.data.data.products);
          setTotalPages(response.data.data.pagination.totalPages || 1);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (id) => {
    navigate(`/productdetails/${id}`);
  };

  // ✅ Function to get proper image URL from PostImage
  const getImageUrl = (url) => {
    if (!url) return "https://via.placeholder.com/300x300?text=No+Image";
    
    // If it's a PostImage URL, convert to direct image URL
    if (url.includes('postimg.cc')) {
      // Replace with direct image URL pattern for PostImage
      // Example: https://postimg.cc/hQDfK8K1 -> https://i.postimg.cc/hQDfK8K1/image.jpg
      const imageId = url.split('/').pop();
      return `https://i.postimg.cc/${imageId}/image.jpg`;
    }
    
    return url;
  };

  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1 text-xs">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-3 h-3 ${
              i < Math.floor(rating) ? "fill-orange-400 text-orange-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-gray-600">{reviews || 0}</span>
    </div>
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous page"
        >
          <FiChevronLeft className="text-2xl text-gray-700" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                onClick={() => handleChange(product._id)}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={getImageUrl(product.images?.[0])}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.log('Image failed to load:', product.images?.[0]);
                      e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                    }}
                    onLoad={() => console.log('Image loaded successfully:', product.images?.[0])}
                  />
                </div>

                {/* Product Info */}
                <div className="p-3 space-y-2">
                  <h3 className="text-xs sm:text-sm text-gray-800 line-clamp-3 min-h-[2.5rem] sm:min-h-[3rem]">
                    {product.name}
                  </h3>

                  <StarRating
                    rating={product.ratings?.average || 0}
                    reviews={product.ratings?.count || 0}
                  />

                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-gray-600">₹</span>
                    <span className="text-lg sm:text-xl font-medium text-gray-900">
                      {product.discount_price ?? product.price}
                    </span>
                  </div>

                  {product.discount_price && (
                    <p className="text-xs text-gray-500 line-through">
                      ₹{product.price}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 py-6">
              No products found
            </p>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
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
              currentPage === index + 1 ? "bg-orange-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}