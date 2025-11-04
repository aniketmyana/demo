export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-white text-xs px-2 py-1 font-medium">
            NEW
          </span>
        )}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-white text-black py-2 text-sm font-medium hover:bg-gray-100">
            Quick view
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-sm text-gray-900 mb-1">{product.name}</h3>
        <div className="flex items-center space-x-2">
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
          <span className="text-sm font-medium text-red-600">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
        <div className="flex space-x-1 mt-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}