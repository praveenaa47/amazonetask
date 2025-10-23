import { useState } from 'react';
import { CreditCard, MapPin, X, ChevronRight, Info } from 'lucide-react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [giftCode, setGiftCode] = useState('');
  const [showPaymentMethods, setShowPaymentMethods] = useState(true);

  const orderItems = [
    {
      id: 1,
      name: "WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress",
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop',
      quantity: 1,
      price: 203.14
    }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="bg-white px-6 py-4 rounded-t-lg mb-6">
          <div className="flex items-center gap-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-normal mt-4">
            Checkout <span className="text-blue-600">( 1 item )</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Checkout Steps */}
          <div className="lg:col-span-2 space-y-4">
            {/* Step 1 - Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <span className="text-lg font-semibold text-gray-700">1</span>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-900 mb-2">Shipping address</h2>
                      <div className="text-sm text-gray-700">
                        <p className="font-medium">Jacob Jones</p>
                        <p>2972</p>
                        <p>Westheimer Rd</p>
                        <p>Santa Ana, Illinois 85486</p>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm hover:underline">
                    Change
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 - Payment Method */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-4">
                    <span className="text-lg font-semibold text-gray-700">2</span>
                    <h2 className="text-lg font-semibold text-gray-900">Choose a payment method</h2>
                  </div>
                  {showPaymentMethods && (
                    <button 
                      onClick={() => setShowPaymentMethods(false)}
                      className="text-blue-600 hover:text-blue-800 text-sm hover:underline flex items-center gap-1"
                    >
                      Close <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {showPaymentMethods && (
                  <div className="space-y-6">
                    {/* Available Balance */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Your available balance</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-700 mb-2 block">
                            Enter a gift card or promotional code
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="Enter code"
                              value={giftCode}
                              onChange={(e) => setGiftCode(e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded font-medium text-sm transition">
                              Apply
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-blue-600" />
                          <button className="text-blue-600 hover:text-blue-800 text-sm hover:underline">
                            Add a credit or debit card
                          </button>
                          <span className="text-gray-400 text-xs">or</span>
                          <button className="text-blue-600 hover:text-blue-800 text-sm hover:underline">
                            Amazon accepts all major credit cards</button>
                        </div>
                      </div>
                    </div>

                    <hr />

                    {/* Buy Now, Pay Later */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Buy Now, Pay Later</h3>
                      <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="tabby"
                          checked={paymentMethod === 'tabby'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-900">Pay Over time with</span>
                            <img src="https://via.placeholder.com/50x20/00D9A5/ffffff?text=tabby" alt="Tabby" className="h-5" />
                          </div>
                          <p className="text-xs text-gray-600">
                            Or interest. No hidden charges.
                          </p>
                          <button className="text-blue-600 text-xs hover:underline mt-1">
                            Learn more
                          </button>
                        </div>
                      </label>
                    </div>

                    <hr />

                    {/* Other Payment Options */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Other payment options</h3>
                      <label className="flex items-start gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">
                            Cash on Delivery (COD)
                          </div>
                          <p className="text-sm text-gray-600">
                            Cash on delivery is not available for this order.{' '}
                            <button className="text-blue-600 hover:underline">Why?</button>
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Please use another payment method to proceed
                          </p>
                        </div>
                      </label>
                    </div>

                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-lg font-medium transition">
                      Use this payment method
                    </button>
                  </div>
                )}

                {!showPaymentMethods && (
                  <button 
                    onClick={() => setShowPaymentMethods(true)}
                    className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                  >
                    Choose a payment method
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-4">
              <div className="p-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700 mb-3">
                    Choose a payment method to continue checking out. You'll still have a chance to review and edit your order before it's final.
                  </p>
                </div>

                <h2 className="text-xl font-bold text-red-700 mb-4">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Items:</span>
                    <span className="font-medium">SAR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Shipping & handling:</span>
                    <span className="font-medium">--</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-red-700">Order total:</span>
                    <span className="font-bold">--</span>
                  </div>
                </div>

                <button className="w-full mt-6 text-blue-600 hover:text-blue-800 text-sm hover:underline text-left">
                  How are shipping costs calculated?
                </button>

                {/* Order Items Preview */}
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold text-gray-900 mb-3">Items in your order:</h3>
                  <div className="space-y-3">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-900 line-clamp-2">{item.name}</p>
                          <p className="text-xs text-gray-600 mt-1">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Need help? Check our <button className="text-blue-600 hover:underline">help pages</button> or <button className="text-blue-600 hover:underline">contact us</button></p>
          <p className="mt-2">For an item sold by Amazon.ae: When you click the "Place your order" button, we'll send you an email message acknowledging receipt of your order.</p>
        </div>
      </div>
    </div>
  );
}