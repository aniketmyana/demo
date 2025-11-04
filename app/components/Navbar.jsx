'use client';
import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold cursor-pointer">MANNCHE</a>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium hover:text-gray-600 cursor-pointer">Women</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 cursor-pointer">Men</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 cursor-pointer">Kids</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 cursor-pointer">Home</a>
              <a href="#" className="text-sm font-medium hover:text-gray-600 cursor-pointer">Sale</a>
            </div>

            {/* Right Side - Auth & Icons */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setShowLogin(true)} className="text-sm hover:text-gray-600 cursor-pointer">Sign in</button>
              <button onClick={() => setShowRegister(true)} className="text-sm hover:text-gray-600 cursor-pointer">Join</button>
              <button onClick={() => setShowSearch(true)} className="p-2 cursor-pointer hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 cursor-pointer hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={showLogin} 
        onClose={() => setShowLogin(false)} 
        onSwitchToRegister={handleSwitchToRegister}
      />
      <RegisterModal 
        isOpen={showRegister} 
        onClose={() => setShowRegister(false)} 
        onSwitchToLogin={handleSwitchToLogin}
      />
      <SearchModal 
        isOpen={showSearch} 
        onClose={() => setShowSearch(false)}
      />
    </>
  );
}