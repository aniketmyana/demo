'use client';
import { useState } from 'react';

const cartItems = [
  {
    id: 1,
    name: "Oversized T-shirt",
    price: 999,
    size: "M",
    color: "Black",
    quantity: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100"
  },
  {
    id: 2,
    name: "Denim Jacket", 
    price: 3999,
    size: "L",
    color: "Blue",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=100"
  }
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'India',
    state: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-light mb-4">Checkout</h1>
          <div className="flex items-center space-x-4 text-sm">
            <span className={`${step >= 1 ? 'text-black' : 'text-gray-400'}`}>1. Information</span>
            <span className="text-gray-300">→</span>
            <span className={`${step >= 2 ? 'text-black' : 'text-gray-400'}`}>2. Shipping</span>
            <span className="text-gray-300">→</span>
            <span className={`${step >= 3 ? 'text-black' : 'text-gray-400'}`}>3. Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Forms */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Contact Information</h2>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="PIN Code"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select 
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Gujarat</option>
                    <option>Rajasthan</option>
                    <option>West Bengal</option>
                    <option>Uttar Pradesh</option>
                  </select>
                  <select 
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  >
                    <option>India</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded cursor-pointer hover:border-black">
                  <div className="flex items-center">
                    <input type="radio" name="shipping" className="mr-3" defaultChecked />
                    <span>Standard Shipping (5-7 days)</span>
                  </div>
                  <span className="font-medium">₹99</span>
                </label>
                <label className="flex items-center justify-between p-3 border border-gray-300 rounded cursor-pointer hover:border-black">
                  <div className="flex items-center">
                    <input type="radio" name="shipping" className="mr-3" />
                    <span>Express Shipping (2-3 days)</span>
                  </div>
                  <span className="font-medium">₹199</span>
                </label>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-medium mb-4">Payment</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white p-6 rounded-lg h-fit">
            <h2 className="text-lg font-medium mb-6">Order Summary</h2>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-600">{item.size} / {item.color}</p>
                  </div>
                  <span className="font-medium">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                </div>
              ))}
            </div>

            {/* Discount Code */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="flex-1 p-3 border border-gray-300 rounded-l focus:outline-none focus:border-black"
                />
                <button className="bg-gray-100 px-4 border border-l-0 border-gray-300 rounded-r hover:bg-gray-200">
                  Apply
                </button>
              </div>
            </div>

            {/* Order Total */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString('en-IN')}</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Complete Order Button */}
            <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors">
              Complete Order
            </button>

            <p className="text-xs text-gray-600 mt-4 text-center">
              By completing your order, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}