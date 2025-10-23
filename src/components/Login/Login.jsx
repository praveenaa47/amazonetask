import AmazonFooter from "../../pages/Footer";
import AmazonHeader from "../../pages/Header";

export default function AmazonLogin() {
  return (
    <div>
        <AmazonHeader/>
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
          {/* Amazon Logo */}
          <div className="mb-6">
            <svg className="w-24 h-8" viewBox="0 0 103 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="20" className="fill-gray-900 font-bold text-2xl" fontFamily="Arial, sans-serif">amazon.in</text>
            </svg>
          </div>
    
          {/* Login Form Container */}
          <div className="w-full max-w-sm border border-gray-300 rounded-lg p-6 mb-4">
            <h1 className="text-2xl font-normal mb-4">Sign in</h1>
            
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-1">
                Email or mobile phone number
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-2 py-1.5 border border-gray-400 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
    
            {/* Continue Button */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 border border-yellow-600 rounded py-1.5 text-sm mb-3 font-normal shadow-sm">
              Continue
            </button>
    
            {/* Terms Text */}
            <p className="text-xs mb-3">
              By continuing, you agree to Amazon's{' '}
              <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
                Conditions of Use
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
                Privacy Notice
              </a>.
            </p>
    
            {/* Need Help */}
            <details className="mb-4">
              <summary className="text-xs text-blue-600 hover:text-orange-600 hover:underline cursor-pointer list-none flex items-center">
                <span className="mr-1">▸</span> Need help?
              </summary>
            </details>
    
            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
            </div>
    
            {/* Buying for Work */}
            <div className="text-center">
              <h2 className="text-xs font-bold mb-1">Buying for work?</h2>
              <a href="#" className="text-xs text-blue-600 hover:text-orange-600 hover:underline">
                Shop on Amazon Business
              </a>
            </div>
          </div>
    
          {/* New to Amazon Section */}
          <div className="w-full max-w-sm relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">New to Amazon?</span>
            </div>
          </div>
    
          {/* Create Account Button */}
          <button className="w-full max-w-sm bg-gradient-to-b from-gray-50 to-gray-100 hover:bg-gradient-to-b hover:from-gray-100 hover:to-gray-200 border border-gray-300 rounded py-1.5 text-sm mb-6 shadow-sm">
            Create your Amazon account
          </button>
    
          {/* Footer */}
          <div className="w-full border-t border-gray-300 pt-4">
            <div className="flex justify-center space-x-4 text-xs text-blue-600 mb-2">
              <a href="#" className="hover:text-orange-600 hover:underline">
                Conditions of Use
              </a>
              <a href="#" className="hover:text-orange-600 hover:underline">
                Privacy Notice
              </a>
              <a href="#" className="hover:text-orange-600 hover:underline">
                Help
              </a>
            </div>
            <p className="text-xs text-gray-600 text-center">
              © 1996-2024, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
        <AmazonFooter/>
    </div>
  );
}