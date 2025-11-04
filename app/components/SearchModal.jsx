'use client';

export default function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-light">Search</h2>
          <button onClick={onClose} className="text-2xl cursor-pointer hover:text-gray-600" aria-label="Close search">&times;</button>
        </div>
        
        <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-4 text-lg border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
            autoFocus
          />
          <button type="submit" className="absolute right-4 top-4 cursor-pointer hover:text-black">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-600">POPULAR SEARCHES</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 border border-gray-300 text-sm hover:border-black cursor-pointer transition-colors">Dresses</button>
            <button className="px-4 py-2 border border-gray-300 text-sm hover:border-black cursor-pointer transition-colors">Jeans</button>
            <button className="px-4 py-2 border border-gray-300 text-sm hover:border-black cursor-pointer transition-colors">T-shirts</button>
            <button className="px-4 py-2 border border-gray-300 text-sm hover:border-black cursor-pointer transition-colors">Shoes</button>
          </div>
        </div>
      </div>
    </div>
  );
}