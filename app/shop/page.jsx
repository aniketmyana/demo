import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const products = [
  {
    id: 1,
    name: "Oversized T-shirt",
    price: 999,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    colors: ['#000', '#fff', '#808080'],
    isNew: true
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 3999,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
    colors: ['#4169e1', '#000080'],
    isNew: false
  },
  {
    id: 3,
    name: "Floral Dress",
    price: 2399,
    originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    colors: ['#ff69b4', '#ffffff'],
    isNew: true
  },
  {
    id: 4,
    name: "Skinny Jeans",
    price: 2799,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    colors: ['#000080', '#000'],
    isNew: false
  },
  {
    id: 5,
    name: "Knit Sweater",
    price: 1999,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    colors: ['#f5f5dc', '#d2691e', '#000'],
    isNew: false
  },
  {
    id: 6,
    name: "Mini Skirt",
    price: 1599,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400",
    colors: ['#000', '#ff0000'],
    isNew: true
  }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light mb-2">Women</h1>
          <p className="text-gray-600">Discover the latest trends</p>
        </div>

        <div className="flex">
          <FilterSidebar />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">{products.length} items</p>
              <select className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-black">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                Load more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}