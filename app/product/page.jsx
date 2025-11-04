'use client';
import { useState } from 'react';

const product = {
  name: "Oversized T-shirt",
  price: 999,
  originalPrice: 1599,
  artNo: "1074406001",
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=600",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600"
  ],
  colors: [
    { name: "Black", value: "#000" },
    { name: "White", value: "#fff" },
    { name: "Gray", value: "#808080" }
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  description: "Relaxed-fit T-shirt in soft cotton jersey with a round neckline and short sleeves.",
  details: ["100% cotton", "Machine wash at 40°", "Do not bleach", "Tumble dry low"]
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full aspect-[3/4] object-cover bg-gray-100"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-20 border-2 ${selectedImage === index ? 'border-black' : 'border-gray-200'}`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <h1 className="text-2xl font-light mb-2">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">Art.no. {product.artNo}</p>
            
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xl font-medium text-red-600">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === index ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">{product.colors[selectedColor].name}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm border ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="text-sm text-gray-600 hover:text-black mt-2 underline">
                Size guide
              </button>
            </div>

            <button className="w-full bg-black text-white py-4 text-sm font-medium hover:bg-gray-800 mb-4">
              Add to bag
            </button>

            <button className="w-full border border-black py-4 text-sm font-medium hover:bg-black hover:text-white mb-8">
              Find in store
            </button>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Description</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Details</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.details.map((detail, index) => (
                    <li key={index}>• {detail}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Delivery & Returns</h3>
                <p className="text-sm text-gray-600">Free delivery on orders over ₹3000</p>
                <p className="text-sm text-gray-600">Free returns within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}