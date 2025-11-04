const brands = [
  {
    id: 1,
    name: "H&M",
    description: "Fashion and quality at the best price",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    logo: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200",
    collections: ["Women", "Men", "Kids", "Home"]
  },
  {
    id: 2,
    name: "COS",
    description: "Modern, functional, considered design",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200",
    collections: ["Women", "Men"]
  },
  {
    id: 3,
    name: "& Other Stories",
    description: "Personal style made easy",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    logo: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200",
    collections: ["Women", "Beauty"]
  },
  {
    id: 4,
    name: "Weekday",
    description: "Denim, fashion and streetwear",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800",
    logo: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=200",
    collections: ["Women", "Men"]
  }
];

const featuredCollections = [
  {
    id: 1,
    title: "New Arrivals",
    subtitle: "Fresh styles for the season",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
    link: "/shop?filter=new"
  },
  {
    id: 2,
    title: "Sale",
    subtitle: "Up to 50% off selected items",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600",
    link: "/shop?filter=sale"
  }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-light mb-4">Our Brands</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our family of brands, each with their own unique style and vision
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map(brand => (
            <div key={brand.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={brand.image} 
                  alt={brand.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-light mb-2">{brand.name}</h2>
                  <p className="text-sm opacity-90">{brand.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {brand.collections.map(collection => (
                  <span 
                    key={collection}
                    className="px-3 py-1 border border-gray-300 text-sm hover:border-black transition-colors"
                  >
                    {collection}
                  </span>
                ))}
              </div>
              
              <button className="text-sm font-medium border-b border-black pb-1 hover:border-gray-400 transition-colors">
                Shop {brand.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Collections */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12">Featured Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCollections.map(collection => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                    <div>
                      <h3 className="text-2xl font-light mb-2">{collection.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{collection.subtitle}</p>
                      <button className="border border-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-light mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about new collections and exclusive offers
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
            />
            <button className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}