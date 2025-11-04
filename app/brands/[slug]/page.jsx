const brandData = {
  "hm": {
    name: "H&M",
    description: "Fashion and quality at the best price in a sustainable way",
    hero: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
    categories: [
      {
        name: "Women",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
        itemCount: "2,847 items"
      },
      {
        name: "Men", 
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        itemCount: "1,523 items"
      },
      {
        name: "Kids",
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400", 
        itemCount: "892 items"
      },
      {
        name: "Home",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        itemCount: "456 items"
      }
    ]
  }
};

export default function BrandPage({ params }) {
  const brand = brandData[params.slug] || brandData["hm"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src={brand.hero} 
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-6xl font-light mb-4">{brand.name}</h1>
            <p className="text-lg max-w-2xl">{brand.description}</p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-light text-center mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brand.categories.map(category => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-light mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.itemCount}</p>
                <button className="text-sm font-medium border-b border-black pb-1 hover:border-gray-400 transition-colors">
                  Shop {category.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-light mb-6">New Collection</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the latest trends and must-have pieces for this season
          </p>
          <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
            Shop New Arrivals
          </button>
        </div>
      </div>
    </div>
  );
}