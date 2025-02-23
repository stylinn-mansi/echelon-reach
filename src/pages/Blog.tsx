import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const Blog = () => {
  const posts = [
    {
      title: "The Future of Social Media Marketing in 2024",
      excerpt: "Discover the emerging trends and strategies that will shape social media marketing in the coming year.",
      date: "March 15, 2024",
      category: "Social Media",
      image: "/posts/post1.jpg"
    },
    {
      title: "Building a Strong Brand Presence Online",
      excerpt: "Learn the essential steps to establish and maintain a powerful brand presence in the digital space.",
      date: "March 10, 2024",
      category: "Branding",
      image: "/posts/post2.jpg"
    },
    {
      title: "Content Creation Tips for Maximum Engagement",
      excerpt: "Expert tips and techniques to create content that resonates with your audience and drives engagement.",
      date: "March 5, 2024",
      category: "Content",
      image: "/posts/post3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-serif mb-12">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-2xl font-serif group-hover:text-white/80 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-block text-lg hover:text-white/80 transition-colors">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Blog; 