import { useState } from 'react';
import { Search, Package, Truck, ChevronRight } from 'lucide-react';
import AmazonHeader from '../../pages/Header';
import AmazonFooter from '../../pages/Footer';

export default function MyOrdersPage() {
  const [activeTab, setActiveTab] = useState('orders');
  const [timeFilter, setTimeFilter] = useState('past-3-months');
  const [searchQuery, setSearchQuery] = useState('');

  const [orders, setOrders] = useState([
    {
      id: 'ORD-2024-001',
      date: '2024-10-15',
      status: 'Delivered',
      total: 203.14,
      items: [
        {
          name: "WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress",
          image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop',
          quantity: 1,
          price: 203.14
        }
      ],
      deliveryDate: '2024-10-18'
    },
    {
      id: 'ORD-2024-002',
      date: '2024-09-28',
      status: 'In Transit',
      total: 156.50,
      items: [
        {
          name: "Women's Casual Summer Floral Print Dress",
          image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=150&h=150&fit=crop',
          quantity: 1,
          price: 156.50
        }
      ],
      expectedDelivery: '2024-10-25'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-09-10',
      status: 'Delivered',
      total: 445.80,
      items: [
        {
          name: "Elegant Evening Gown with Sequin Details",
          image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=150&h=150&fit=crop',
          quantity: 1,
          price: 289.99
        },
        {
          name: "Classic Black Heeled Sandals",
          image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=150&fit=crop',
          quantity: 1,
          price: 155.81
        }
      ],
      deliveryDate: '2024-09-14'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-50';
      case 'In Transit':
        return 'text-blue-600 bg-blue-50';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-50';
      case 'Cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
  <div>
    <AmazonHeader/>
      <div className="min-h-screen bg-gray-50">
        <div className="px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-600 hover:text-blue-800 cursor-pointer">Your Account</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-orange-600 font-medium">Your Orders</span>
            </div>
          </div>
  
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Your Orders</h1>
            
            {/* Search Box */}
            <div className="flex gap-2">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search all orders"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium">
                Search Orders
              </button>
            </div>
          </div>
  
          {/* Tabs */}
          <div className="bg-white rounded-t-lg border-b">
            <div className="flex gap-8 px-6">
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-4 border-b-2 transition font-medium ${
                  activeTab === 'orders'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab('buy-again')}
                className={`py-4 border-b-2 transition font-medium ${
                  activeTab === 'buy-again'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Buy Again
              </button>
              <button
                onClick={() => setActiveTab('not-shipped')}
                className={`py-4 border-b-2 transition font-medium ${
                  activeTab === 'not-shipped'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Not Yet Shipped
              </button>
              <button
                onClick={() => setActiveTab('cancelled')}
                className={`py-4 border-b-2 transition font-medium ${
                  activeTab === 'cancelled'
                    ? 'border-orange-600 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                Cancelled Orders
              </button>
            </div>
          </div>
  
          {/* Time Filter */}
          <div className="bg-white px-6 py-4 border-b">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">
                {orders.length} orders
              </span>
              <span className="text-gray-500">placed in</span>
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="past-30-days">past 30 days</option>
                <option value="past-3-months">past 3 months</option>
                <option value="past-6-months">past 6 months</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
  
          {/* Orders Content */}
          <div className="bg-white rounded-b-lg">
            {orders.length === 0 ? (
              /* Empty State */
              <div className="py-16 px-6 text-center">
                <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg text-gray-700 mb-2">
                  Looks like you haven't placed an order in the last 3 months.
                </p>
                <button className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  View orders in 2024
                </button>
              </div>
            ) : (
              /* Orders List */
              <div className="divide-y">
                {orders.map((order) => (
                  <div key={order.id} className="p-6">
                    {/* Order Header */}
                    <div className="bg-gray-50 rounded-t-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-600 mb-1">ORDER PLACED</p>
                        <p className="font-medium">{new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">TOTAL</p>
                        <p className="font-medium">SAR {order.total.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">SHIP TO</p>
                        <p className="font-medium text-blue-600 cursor-pointer hover:underline">John Doe ▼</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 mb-1">ORDER # {order.id}</p>
                        <div className="flex justify-end gap-3">
                          <button className="text-blue-600 hover:underline text-xs">View order details</button>
                          <button className="text-blue-600 hover:underline text-xs">Invoice</button>
                        </div>
                      </div>
                    </div>
  
                    {/* Order Items */}
                    <div className="space-y-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                              {order.status === 'Delivered' && (
                                <span className="text-sm text-gray-600">
                                  Delivered on {new Date(order.deliveryDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                </span>
                              )}
                              {order.status === 'In Transit' && (
                                <span className="text-sm text-gray-600 flex items-center gap-1">
                                  <Truck className="w-4 h-4" />
                                  Expected by {new Date(order.expectedDelivery).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg font-medium text-sm transition">
                                Buy it again
                              </button>
                              <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                                View your item
                              </button>
                              {order.status === 'Delivered' && (
                                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                                  Write a product review
                                </button>
                              )}
                              {order.status === 'In Transit' && (
                                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium text-sm transition">
                                  Track package
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
  
                    {/* Archive Order Link */}
                    <div className="mt-4 pt-4 border-t text-right">
                      <button className="text-sm text-blue-600 hover:underline">
                        Archive order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <AmazonFooter/>
  </div>
  );
}