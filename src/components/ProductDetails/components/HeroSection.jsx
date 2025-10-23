import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, ChevronDown, ShoppingCart, Heart } from "lucide-react";
import { getProductsbyId } from "../../../service/api";

export default function ProductDetailsPage() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "Navy", "Red", "White"];

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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await getProductsbyId(id);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const StarRating = ({ rating, size = "w-4 h-4" }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading product details...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No product found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Fashion</span>
            <ChevronDown className="w-4 h-4 -rotate-90" />
            <span>Women</span>
            <ChevronDown className="w-4 h-4 -rotate-90" />
            <span>Clothing</span>
            <ChevronDown className="w-4 h-4 -rotate-90" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={getImageUrl(product.images?.[selectedImage])}
                alt={product.name}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.log('Image failed to load:', product.images?.[selectedImage]);
                  e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx ? "border-black" : "border-transparent"
                  }`}
                >
                  <img
                    src={getImageUrl(img)}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-24 object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150x150?text=No+Image";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Brand: {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={product.ratings?.average || 0} size="w-5 h-5" />
                <span className="text-sm text-gray-600">
                  {product.ratings?.average || 0}
                </span>
                <span className="text-sm text-blue-600 cursor-pointer">
                  {product.ratings?.count || 0} ratings
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-t pt-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-gray-600">₹</span>
                <span className="text-4xl font-bold text-gray-900">
                  {product.discount_price}
                </span>
                <span className="text-sm text-gray-600 line-through">
                  ₹{product.price}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">All prices include VAT.</p>
            </div>

            {/* Size Selection */}
            <div className="border-t pt-6">
              <label className="block text-sm font-semibold mb-3">
                Size: {selectedSize}
              </label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 border rounded-lg transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Color: {selectedColor}
              </label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 border rounded-lg transition ${
                      selectedColor === color
                        ? "border-black bg-gray-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6">
              <button className="flex-1 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}