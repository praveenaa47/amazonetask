import { useState } from 'react';
import { Star, ChevronDown, Check, ShoppingCart, Heart } from 'lucide-react';

export default function ProductDetailsPage() {
  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
  ];

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'Navy', 'Red', 'White'];



  const StarRating = ({ rating, size = 'w-4 h-4' }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size} ${
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
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
            <span className="text-gray-900">Dresses</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition ${
                    selectedImage === idx ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">Brand: WDIRASA</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                WDIRASA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={4} size="w-5 h-5" />
                <span className="text-sm text-gray-600">4.1</span>
                <span className="text-sm text-blue-600 cursor-pointer">67 ratings</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-gray-600">SAR</span>
                <span className="text-4xl font-bold text-gray-900">203</span>
                <span className="text-sm text-gray-600">.14</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">All price include VAT.</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <p className="text-sm">
                  Sign in to redeem <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">Extra 20%</span> off with meem credit cards.
                </p>
                <p className="text-sm mt-1">Enter code MEEM20 at checkout. Discount by Amazon.</p>
              </div>
              <div className="flex gap-6 mb-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">📱</div>
                  <p className="text-xs text-gray-600">Electronic payment Only</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">📦</div>
                  <p className="text-xs text-gray-600">30 days Returnable</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <p className="text-xs text-gray-600">Secure transaction</p>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="border-t pt-6">
              <label className="block text-sm font-semibold mb-3">Size: {selectedSize}</label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 border rounded-lg transition ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">Color: {selectedColor}</label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 border rounded-lg transition ${
                      selectedColor === color
                        ? 'border-black bg-gray-100'
                        : 'border-gray-300 hover:border-gray-400'
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

            {/* Actions */}
            <div className="flex gap-3 pt-6">
              <button className="flex-1 bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-14 h-14 border border-gray-300 rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4">Product details</h3>
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-48 text-gray-600">Material composition</span>
                  <span className="flex-1 font-medium">99% Polyester, 1% Elastane</span>
                </div>
                <div className="flex">
                  <span className="w-48 text-gray-600">Closure type</span>
                  <span className="flex-1 font-medium">Pull On</span>
                </div>
                <div className="flex">
                  <span className="w-48 text-gray-600">Neck style</span>
                  <span className="flex-1 font-medium">Scoop Neck</span>
                </div>
                <div className="flex">
                  <span className="w-48 text-gray-600">Sleeve type</span>
                  <span className="flex-1 font-medium">Short Sleeve</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}