import React from 'react';

export default function ProductShowcase() {
  const footwearProducts = [
    {
      id: 1,
      name: "Men's Flip Flops",
      price: "₹399",
      image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80"
    },
    {
      id: 2,
      name: "Men's Casual Footwear",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80"
    },
    {
      id: 3,
      name: "Men's Sports Shoes",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80"
    },
    {
      id: 4,
      name: "Fashion Slippers",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&q=80"
    },
    {
      id: 5,
      name: "Heels & Sandals",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80"
    },
    {
      id: 6,
      name: "Women's Sports Shoes",
      price: "₹799",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80"
    }
  ];

  const budgetAddons = [
    {
      id: 1,
      name: "Women's Watches",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&q=80"
    },
    {
      id: 2,
      name: "Men's Watches",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&q=80"
    },
    {
      id: 3,
      name: "Women's Jewellery",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80"
    },
    {
      id: 4,
      name: "Handbags",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
    },
    {
      id: 5,
      name: "Eyewear",
      price: "₹499",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80"
    },
    {
      id: 6,
      name: "Men's Jewellery",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80"
    }
  ];

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-sm font-medium text-gray-800 mb-1">{product.name}</h3>
        <p className="text-orange-600 font-bold text-base">Under {product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Best Of Footwear Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Best Of Footwear
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {footwearProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Budget Add-Ons Section */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Budget Add-Ons
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {budgetAddons.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Additional Categories (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Electronics</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Smartphones</p>
                <p className="text-orange-600 font-bold text-sm">Under ₹15,999</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Headphones</p>
                <p className="text-orange-600 font-bold text-sm">Under ₹1,999</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Home & Kitchen</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Kitchen Tools</p>
                <p className="text-orange-600 font-bold text-sm">Under ₹599</p>
              </div>
              <div className="bg-white rounded-lg p-3 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Home Decor</p>
                <p className="text-orange-600 font-bold text-sm">Under ₹999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}