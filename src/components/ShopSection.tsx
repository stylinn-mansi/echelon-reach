const ShopSection = () => {
  const products = [
    {
      id: 1,
      title: "Brand Voice Guide",
      price: "$299",
      image: "https://via.placeholder.com/300x300?text=Brand+Voice+Guide"
    },
    {
      id: 2,
      title: "Social Media Kit",
      price: "$199",
      image: "https://via.placeholder.com/300x300?text=Social+Media+Kit"
    },
    {
      id: 3,
      title: "Content Calendar",
      price: "$149",
      image: "https://slidebazaar.com/wp-content/uploads/2023/02/Social-Media-Calendar-Template-Dark.jpg"
    },
    {
      id: 4,
      title: "Strategy Blueprint",
      price: "$399",
      image: "https://via.placeholder.com/300x300?text=Strategy+Blueprint"
    }
  ];

  return (
    <div id="shop" className="relative py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Our <span className="italic">shop</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="aspect-square relative overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Product Info */}
              <div className="mt-6 flex justify-between items-start border-t border-white/20 pt-4">
                <h3 className="text-lg font-serif text-white">{product.title}</h3>
                <span className="text-lg font-serif text-white">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSection; 