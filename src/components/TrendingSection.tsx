const TrendingSection = () => {
  const trendingProducts = [
    {
      id: 1,
      title: "Ultimate Branding Bundle",
      description: "Complete toolkit for building a strong brand identity, including logo templates, brand guidelines, and social media assets.",
      price: "$99.00",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80",
      stats: {
        downloads: "2.5k+",
        rating: "4.9",
        reviews: "180+"
      }
    },
    {
      id: 2,
      title: "Social Media Growth Pack",
      description: "Advanced strategies, premium templates, and analytics tools to skyrocket your social media presence.",
      price: "$79.00",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      stats: {
        downloads: "3.2k+",
        rating: "4.8",
        reviews: "250+"
      }
    },
    {
      id: 3,
      title: "Content Creator Pro Suite",
      description: "Professional-grade tools and templates for creating stunning content across all platforms.",
      price: "$129.00",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
      stats: {
        downloads: "1.8k+",
        rating: "4.9",
        reviews: "150+"
      }
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/black-fabric.png')] bg-repeat opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
            Trending <span className="italic">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
            Discover our most popular digital products that help businesses grow and succeed in the digital landscape.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 lg:gap-12">
          {trendingProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 backdrop-blur-sm
                ${index % 2 === 0 ? 'lg:ml-[8.333333%]' : 'lg:mr-[8.333333%]'}`}
            >
              <div className="grid lg:grid-cols-2 items-center">
                {/* Image Section */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="relative p-8 lg:p-12">
                  <div className="space-y-6">
                    {/* Title & Price */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                        {product.title}
                      </h3>
                      <p className="text-3xl sm:text-4xl font-light text-white/90">
                        {product.price}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                      <div>
                        <p className="text-2xl font-serif text-white">{product.stats.downloads}</p>
                        <p className="text-sm text-white/60">Downloads</p>
                      </div>
                      <div>
                        <p className="text-2xl font-serif text-white">{product.stats.rating}</p>
                        <p className="text-sm text-white/60">Rating</p>
                      </div>
                      <div>
                        <p className="text-2xl font-serif text-white">{product.stats.reviews}</p>
                        <p className="text-sm text-white/60">Reviews</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full py-4 px-8 bg-white text-black text-lg font-medium rounded-xl hover:bg-white/90 transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection; 