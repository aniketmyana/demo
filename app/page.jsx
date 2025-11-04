export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="relative h-screen bg-gray-100">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-2xl px-6">
            <h1 className="text-5xl md:text-7xl font-light mb-6">NEW ARRIVALS</h1>
            <p className="text-lg md:text-xl mb-8 font-light">Discover the latest trends in fashion</p>
            <div className="space-x-4">
              <button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer">
                SHOP WOMEN
              </button>
              <button className="border border-white text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors cursor-pointer">
                SHOP MEN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Two Section Block */}
      <div className="flex w-full">
        <div className="relative w-1/2 aspect-square overflow-hidden group cursor-pointer bg-gray-100">
          <img
            src="/assets/raymond-1.png"
            alt="Section 1"
            className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-110 group-hover:opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black px-8 py-3 text-sm font-medium border border-black hover:bg-black hover:text-white transition-all duration-200">
              EXPLORE
            </button>
          </div>
        </div>
        <div className="relative w-1/2 aspect-square overflow-hidden group cursor-pointer bg-gray-100">
          <img
            src="/assets/raymond-2.png"
            alt="Section 2"
            className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-110 group-hover:opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black px-8 py-3 text-sm font-medium border border-black hover:bg-black hover:text-white transition-all duration-200">
              DISCOVER
            </button>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-light mb-8 text-gray-800">OUR BRANDS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-lg font-medium text-gray-600">NIKE</span>
            </div>
            <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-lg font-medium text-gray-600">ADIDAS</span>
            </div>
            <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-lg font-medium text-gray-600">PUMA</span>
            </div>
            <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-lg font-medium text-gray-600">ZARA</span>
            </div>
            <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-lg font-medium text-gray-600">UNIQLO</span>
            </div>
            <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-lg font-medium text-gray-600">CALVIN KLEIN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 h-80 mb-4"></div>
              <h3 className="text-xl font-light mb-2">WOMEN</h3>
              <button className="text-sm underline cursor-pointer hover:text-gray-600">SHOP NOW</button>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-80 mb-4"></div>
              <h3 className="text-xl font-light mb-2">MEN</h3>
              <button className="text-sm underline cursor-pointer hover:text-gray-600">SHOP NOW</button>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-80 mb-4"></div>
              <h3 className="text-xl font-light mb-2">KIDS</h3>
              <button className="text-sm underline cursor-pointer hover:text-gray-600">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>

      {/* Men's Products */}
      <div className="py-12 bg-gray-50">
        <div className="px-2">
          <h2 className="text-2xl font-light mb-8 text-center">MEN</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Slim Fit Shirt</h3>
              <p className="text-xs text-gray-600">₹2,499</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Denim Jeans</h3>
              <p className="text-xs text-gray-600">₹4,199</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Cotton T-Shirt</h3>
              <p className="text-xs text-gray-600">₹1,699</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Blazer Jacket</h3>
              <p className="text-xs text-gray-600">₹7,599</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Casual Hoodie</h3>
              <p className="text-xs text-gray-600">₹3,399</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Formal Pants</h3>
              <p className="text-xs text-gray-600">₹5,099</p>
            </div>
          </div>
        </div>
      </div>

      {/* Women's Products */}
      <div className="py-12">
        <div className="px-2">
          <h2 className="text-2xl font-light mb-8 text-center">WOMEN</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Floral Dress</h3>
              <p className="text-xs text-gray-600">₹3,399</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Knit Sweater</h3>
              <p className="text-xs text-gray-600">₹2,899</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">High-Waist Jeans</h3>
              <p className="text-xs text-gray-600">₹3,799</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Silk Blouse</h3>
              <p className="text-xs text-gray-600">₹4,699</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Summer Top</h3>
              <p className="text-xs text-gray-600">₹2,099</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gray-200 aspect-[3/4] mb-2 overflow-hidden">
                <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-300"></div>
              </div>
              <h3 className="text-xs font-medium mb-1">Maxi Skirt</h3>
              <p className="text-xs text-gray-600">₹3,599</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}