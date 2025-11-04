'use client';
import { useState } from 'react';
import CartItem from '../components/CartItem';

const initialCartItems = [
  {
    id: 1,
    name: "Oversized T-shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
    artNo: "1074406001",
    size: "M",
    color: "Black",
    quantity: 2
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 3999,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200",
    artNo: "1074406002",
    size: "L",
    color: "Blue",
    quantity: 1
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const delivery = 99;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-light mb-8">Shopping bag ({cartItems.length})</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">Your shopping bag is empty</p>
                <button className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800">
                  Continue shopping
                </button>
              </div>
            ) : (
              <div>
                {cartItems.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="lg:w-80">
              <div className="bg-gray-50 p-6">
                <h2 className="text-lg font-medium mb-4">Order summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>₹{delivery.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 mt-6 text-sm font-medium hover:bg-gray-800">
                  Continue to checkout
                </button>

                <div className="mt-4 text-xs text-gray-500">
                  <p>Free delivery on orders over ₹3000</p>
                  <p>Free returns within 30 days</p>
                </div>
              </div>

              <div className="mt-6 p-4 border border-gray-200">
                <h3 className="font-medium mb-3">Promo code</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black"
                  />
                  <button className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}