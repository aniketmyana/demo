export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">SHOP</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black cursor-pointer">Women</a></li>
              <li><a href="#" className="hover:text-black cursor-pointer">Men</a></li>
              <li><a href="#" className="hover:text-black cursor-pointer">Kids</a></li>
              <li><a href="#" className="hover:text-black cursor-pointer">Home</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black cursor-pointer">Contact us</a></li>
              <li><a href="#" className="hover:text-black cursor-pointer">Size guide</a></li>
              <li><a href="#" className="hover:text-black cursor-pointer">Returns</a></li>
              <li><a href="#" className="hover:text-black cursor-pointer">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">MY H&M</h3>
            <ul className="space-y-2 text-gray-600">
              <li><button className="hover:text-black text-left cursor-pointer">Sign in</button></li>
              <li><button className="hover:text-black text-left cursor-pointer">Become a member</button></li>
              <li><a href="#" className="hover:text-black cursor-pointer">My account</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">NEWSLETTER</h3>
            <p className="text-gray-600 mb-4">Get the latest news and offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:border-black"
              />
              <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 cursor-pointer">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2025 MANNCHE</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-black cursor-pointer">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-black cursor-pointer">Terms & Conditions</a>
            <a href="#" className="text-gray-600 hover:text-black cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}