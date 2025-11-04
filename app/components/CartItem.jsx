export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex py-6 border-b border-gray-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-32 object-cover bg-gray-100"
      />
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-1">Art.no. {item.artNo}</p>
            <p className="text-sm text-gray-500">Size: {item.size}</p>
            <p className="text-sm text-gray-500">Color: {item.color}</p>
          </div>
          <p className="text-sm font-medium">₹{item.price.toLocaleString('en-IN')}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border border-gray-300">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 hover:bg-gray-100"
            >
              -
            </button>
            <span className="px-3 py-1 text-sm">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 hover:bg-gray-100"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="text-sm text-gray-500 hover:text-black"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}