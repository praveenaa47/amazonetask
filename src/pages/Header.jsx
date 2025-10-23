import React, { useState } from 'react';
import { FiMapPin, FiSearch, FiShoppingCart, FiMenu, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function AmazonHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddtoCart =()=>{
    navigate("/cart")
  }

  const handleorder =()=>{
    navigate("/orders")
  }

  const handleLogin = ()=>{
    navigate("/login");
  }
  const handleHome = ()=>{
    navigate("/");
  }

  return (
    <header className="bg-gray-900 text-white">
      {/* Main Header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 gap-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button 
            className="lg:hidden p-2 hover:bg-gray-800 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu className="text-2xl" />
          </button>
          <div 
          onClick={()=>handleHome()}
          className="bg-white px-2 py-1 rounded cursor-pointer hover:opacity-90">
            <span className="text-black font-bold text-xl sm:text-2xl">amazon</span>
          </div>
        </div>

        {/* Delivery Location */}
        <div className="hidden sm:flex items-start cursor-pointer hover:bg-gray-800 px-2 py-1 rounded">
          <FiMapPin className="text-xl mt-1 mr-1" />
          <div className="flex flex-col text-xs">
            <span className="text-gray-300">Delivering to Surat 394210</span>
            <span className="font-bold text-sm">Update location</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-3xl mx-2">
          <div className="flex items-center bg-white rounded overflow-hidden">
            <button className="hidden sm:flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 border-r text-gray-700 text-sm">
              <span>All</span>
              <FiChevronDown className="text-xs" />
            </button>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="flex-1 px-3 py-2 text-gray-900 outline-none text-sm"
            />
            <button className="bg-orange-400 hover:bg-orange-500 px-3 sm:px-4 py-2">
              <FiSearch className="text-gray-900 text-xl" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Language Selector */}
          <button className="hidden md:flex items-center gap-1 hover:bg-gray-800 px-2 py-1 rounded">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="IN" className="w-6 h-4" />
            <span className="font-bold text-sm">EN</span>
            <FiChevronDown className="text-xs" />
          </button>

          {/* Account */}
          <div
          onClick={()=>handleLogin()}
           className="hidden lg:flex flex-col cursor-pointer hover:bg-gray-800 px-2 py-1 rounded text-xs">
            <span className="text-gray-300">Hello, sign in</span>
            <span className="font-bold flex items-center gap-1">
              Account & Lists
              <FiChevronDown className="text-xs" />
            </span>
          </div>

          {/* Returns & Orders */}
          <div
           onClick={()=>handleorder()}
           className="hidden md:flex flex-col cursor-pointer hover:bg-gray-800 px-2 py-1 rounded text-xs">
            <span className="text-gray-300">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>

          {/* Cart */}
          <button onClick={()=>handleAddtoCart()} className="flex items-center gap-1 hover:bg-gray-800 px-2 py-1 rounded relative">
            <div className="relative">
              <FiShoppingCart className="text-2xl sm:text-3xl" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="hidden sm:inline font-bold text-sm">Cart</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-3 space-y-3">
            <div className="flex items-center gap-2 py-2 border-b border-gray-700">
              <FiMapPin className="text-xl" />
              <div className="text-sm">
                <div className="text-gray-300">Delivering to Surat 394210</div>
                <div className="font-bold">Update location</div>
              </div>
            </div>
            <button 
            onClick={()=>handleLogin()}
            className="w-full text-left py-2 hover:bg-gray-700 rounded px-2">
              Hello, sign in
            </button>
            <button 
            onClick={()=>handleorder()}
            className="w-full text-left py-2 hover:bg-gray-700 rounded px-2">
              Returns & Orders
            </button>
            <button className="w-full text-left py-2 hover:bg-gray-700 rounded px-2 flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="IN" className="w-6 h-4" />
              <span>EN - English</span>
            </button>
          </div>
        </div>
      )}

      {/* Secondary Navigation */}
      <div className="hidden lg:flex items-center bg-gray-800 px-4 py-2 gap-4 text-sm">
        <button className="flex items-center gap-1 hover:bg-gray-700 px-2 py-1 rounded">
          <FiMenu className="text-xl" />
          <span className="font-bold">All</span>
        </button>
        <button className="hover:bg-gray-700 px-2 py-1 rounded">Today's Deals</button>
        <button className="hover:bg-gray-700 px-2 py-1 rounded">Customer Service</button>
        <button className="hover:bg-gray-700 px-2 py-1 rounded">Registry</button>
        <button className="hover:bg-gray-700 px-2 py-1 rounded">Gift Cards</button>
        <button className="hover:bg-gray-700 px-2 py-1 rounded">Sell</button>
      </div>
    </header>
  );
}