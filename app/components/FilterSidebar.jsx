export default function FilterSidebar() {
  return (
    <div className="w-64 pr-8">
      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-600 hover:text-black">Tops</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Dresses</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Jeans</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Shoes</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-3">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <button
                key={size}
                className="border border-gray-300 py-2 text-sm hover:border-black"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Color</h3>
          <div className="grid grid-cols-6 gap-2">
            {['#000', '#fff', '#ff0000', '#0000ff', '#008000', '#ffc0cb'].map(color => (
              <button
                key={color}
                className="w-8 h-8 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Price</h3>
          <div className="space-y-2 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Under $25
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              $25 - $50
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              $50 - $100
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Over $100
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}