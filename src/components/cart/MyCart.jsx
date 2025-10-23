import { useState } from 'react';
import { X, Trash2 } from 'lucide-react';
import AmazonHeader from '../../pages/Header';
import AmazonFooter from '../../pages/Footer';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black, L",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
      price: 203.14,
      quantity: 1,
      size: "L",
      color: "Black",
      inStock: true
    }
  ]);

  const navigate = useNavigate();

  const handleCheckout = ()=>{
    navigate("/checkout")
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (

    <div>
        <AmazonHeader/>
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
          <div className="">
            {/* Header */}
            <div className="bg-white border-b-4 border-purple-600 rounded-t-lg p-4">
              <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
            </div>
    
            {/* Cart Items */}
            <div className="bg-white">
              {cartItems.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              ) : (
                <>
                  {/* Price Header - Desktop Only */}
                  <div className="hidden md:block border-b px-6 py-3">
                    <div className="text-right text-sm font-semibold text-gray-600">
                      Price
                    </div>
                  </div>
    
                  {/* Cart Items List */}
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 md:p-6">
                        <div className="flex gap-4 md:gap-6">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                            />
                          </div>
    
                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex-1">
                                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 line-clamp-2">
                                  {item.name}
                                </h3>
                                
                                <div className="space-y-1 text-xs md:text-sm text-gray-600">
                                  <p>
                                    <span className="font-medium">Get it:</span> Product Link
                                  </p>
                                  {item.inStock ? (
                                    <p className="text-green-600 font-medium">In Stock</p>
                                  ) : (
                                    <p className="text-red-600 font-medium">Out of Stock</p>
                                  )}
                                  <p>
                                    <span className="font-medium">Color:</span> {item.color}
                                  </p>
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">Qty:</span>
                                    <select
                                      value={item.quantity}
                                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                      className="border border-gray-300 rounded px-2 py-1 text-xs md:text-sm"
                                    >
                                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
    
                                {/* Action Links */}
                                <div className="flex items-center gap-4 mt-3 text-xs md:text-sm">
                                  <button className="text-blue-600 hover:text-blue-800 hover:underline">
                                    Save for later
                                  </button>
                                  <span className="text-gray-300">|</span>
                                  <button className="text-blue-600 hover:text-blue-800 hover:underline">
                                    Share
                                  </button>
                                  <span className="text-gray-300">|</span>
                                  <button 
                                    onClick={() => removeItem(item.id)}
                                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                    Delete
                                  </button>
                                </div>
                              </div>
    
                              {/* Price */}
                              <div className="text-right">
                                <p className="text-lg md:text-xl font-bold text-gray-900">
                                  SAR {item.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
    
                  {/* Subtotal */}
                  <div className="border-t bg-gray-50 px-4 md:px-6 py-4">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg font-semibold text-gray-900">
                        Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} item{cartItems.reduce((sum, item) => sum + item.quantity, 0) !== 1 ? 's' : ''}):
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900">
                        SAR {subtotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
    
            {/* Footer Note */}
            <div className="bg-gray-100 rounded-b-lg p-4 md:p-6 mt-0 border-t">
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                The price and availability of items at Amazon.ae are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
              </p>
            </div>
    
            {/* Checkout Button - Mobile */}
            <div className="mt-6 md:hidden">
              <button onClick={()=>handleCheckout}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-lg transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
    
          {/* Sidebar - Desktop Only */}
         
        </div>
        <AmazonFooter/>
    </div>
  );
}