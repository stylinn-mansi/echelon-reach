const BlogSection = () => {
  const writingGuides = [
    {
      id: 1,
      title: "The Ultimate Guide to Writing",
      description: "Writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. Keep your thoughts flowing logically, and aim for brevity unless you're writing in the long form.",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      description: "Your ideas have a purpose, so choose words that accurately express them. Focus on authenticity and clarity in your message. Use an active voice whenever possible as it makes any narrative easier to read.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "The Ultimate Guide to Writing",
      description: "Writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. Keep your thoughts flowing logically.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      description: "Writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. Keep your thoughts flowing logically, and aim for brevity unless you're writing in the long form.",
    }
  ];

  return (
    <div id="blogs" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-6xl md:text-8xl font-serif text-white text-center mb-4">
          Blogs
        </h2>
        <p className="text-2xl font-serif text-white/80 italic text-center">
          Turning Ideas into Influence
        </p>
      </div>

      {/* Chess-like Grid Layout */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {writingGuides.map((guide, index) => (
            <div 
              key={guide.id} 
              className={`group relative ${
                guide.image ? 'aspect-square' : 'aspect-square bg-black/40 backdrop-blur-sm'
              }`}
            >
              {guide.image ? (
                // Image Cell
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={guide.image}
                    alt="Writing Guide"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
              ) : (
                // Text Cell
                <div className="w-full h-full p-8 flex flex-col justify-center">
                  {guide.title && (
                    <h3 className="text-2xl md:text-3xl font-serif text-white/90 mb-4">
                      {guide.title}
                    </h3>
                  )}
                  <p className="text-white/70 text-lg leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="container mx-auto px-4 md:px-8 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-serif text-white/90 mb-4">
            The Ultimate Guide to Writing
          </h3>
          <p className="text-white/70 text-lg leading-relaxed">
            Writing effectively is an art. Start by using simple, everyday words people can easily understand. 
            Be clear and direct to the point. Keep your thoughts flowing logically, and aim for brevity unless 
            you're writing in the long form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 