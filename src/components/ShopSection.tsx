import React from 'react';

const ShopSection = () => {
  const products = [
    {
      id: 1,
      title: "Content Creation Kit",
      price: "$19.00",
      gradient: "bg-gradient-to-br from-[#FF9A9E]/80 to-[#FAD0C4]/80",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Canva Template",
      price: "$19.00",
      gradient: "bg-gradient-to-br from-[#A18CD1]/80 to-[#FBC2EB]/80",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Digital Marketing Ebook",
      price: "$29.00",
      gradient: "bg-gradient-to-br from-[#96E6A1]/80 to-[#D4FC79]/80",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Brand Identity Guide",
      price: "$39.00",
      gradient: "bg-gradient-to-br from-[#FDA085]/80 to-[#F6D365]/80",
      image: "https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Content Calendar Template",
      price: "$24.00",
      gradient: "bg-gradient-to-br from-[#4FACFE]/80 to-[#00F2FE]/80",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      price: "$49.00",
      gradient: "bg-gradient-to-br from-[#43E97B]/80 to-[#38F9D7]/80",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      title: "SEO Strategy Guide",
      price: "$34.00",
      gradient: "bg-gradient-to-br from-[#FA709A]/80 to-[#FEE140]/80",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      title: "Email Marketing Kit",
      price: "$29.00",
      gradient: "bg-gradient-to-br from-[#667EEA]/80 to-[#764BA2]/80",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80"
    },
    {
      id: 9,
      title: "Photography Presets",
      price: "$19.00",
      gradient: "bg-gradient-to-br from-[#F6D365]/80 to-[#FDA085]/80",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80"
    },
    {
      id: 10,
      title: "Social Media Templates",
      price: "$24.00",
      gradient: "bg-gradient-to-br from-[#7F7FD5]/80 to-[#91EAE4]/80",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80"
    },
    {
      id: 11,
      title: "Business Plan Template",
      price: "$44.00",
      gradient: "bg-gradient-to-br from-[#6B8DD6]/80 to-[#8E37D7]/80",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
    },
    {
      id: 12,
      title: "Marketing Strategy Kit",
      price: "$54.00",
      gradient: "bg-gradient-to-br from-[#FFB88C]/80 to-[#DE6262]/80",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div id="shop" className="relative py-16 sm:py-24 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-white text-center">
            Our <span className="italic">shop</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Product Card */}
              <div className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl backdrop-blur-sm shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 ${product.gradient}`}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 backdrop-blur-[2px]"></div>
                
                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
                  {/* Title */}
                  <div className="flex-1 flex items-center justify-center">
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-medium text-center leading-tight drop-shadow-lg">
                      {product.title}
                    </h3>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm sm:text-base font-medium backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full bg-black/30">
                        {product.price}
                      </span>
                      <button className="text-white/90 hover:text-white text-sm sm:text-base px-3 sm:px-4 py-1 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSection; 