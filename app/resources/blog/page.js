// app/resources/blog/page.js
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, Tag } from "lucide-react";
import blogData from "@/data/blog.json";

export const metadata = {
  title: "Blog | Rich System Solutions",
  description: "Read our latest articles, insights, and industry updates on digital marketing, SMS services, WhatsApp API, and more.",
};

export default function BlogListingPage() {
  const { blogs, categories, popularTags } = blogData;
  const featuredBlogs = blogs.filter(blog => blog.featured);
  const recentBlogs = blogs.slice(0, 3);

  return (
    <div className="min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#b8c7e0] mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-[#0bc0df] max-w-3xl mx-auto">
            Insights, trends, and expert advice to help your business grow
          </p>
        </div>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#b8c7e0] mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        )}

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Posts Grid */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-[#b8c7e0] mb-8">Latest Articles</h2>
            <div className="space-y-8">
              {blogs.map((blog) => (
                <BlogListItem key={blog.id} blog={blog} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-[#b8c7e0] mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/resources/blog/category/${category.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-[#e5edfc] group-hover:text-[#0bc0df] transition-colors">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-[#b8c7e0] mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/resources/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#e5edfc] hover:bg-[#127cc9] hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-[#b8c7e0] mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentBlogs.map((blog) => (
                    <Link
                      key={blog.id}
                      href={`/resources/blog/${blog.slug}`}
                      className="flex gap-3 group"
                    >
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#b8c7e0] group-hover:text-[#0bc0df] transition-colors line-clamp-2">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Card Component (for featured posts)
function BlogCard({ blog }) {
  return (
    <Link href={`/resources/blog/${blog.slug}`} className="group">
      <div className="bg-white/10 rounded-2xl overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative h-48">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-semibold text-[#0bc0df] bg-[#0bc0df]/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {blog.readTime}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#b8c7e0] mb-3 group-hover:text-[#0bc0df] transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-[#e5edfc] text-sm line-clamp-3 mb-4">
            {blog.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#b8c7e0]">{blog.author}</p>
              <p className="text-xs text-gray-400">{blog.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Blog List Item Component (for main listing)
function BlogListItem({ blog }) {
  return (
    <Link href={`/resources/blog/${blog.slug}`} className="group block">
      <div className="flex flex-col md:flex-row gap-6 p-6 bg-white/10 rounded-2xl border border-white/20 hover:shadow-xl transition-all duration-300">
        <div className="relative w-full md:w-48 h-48 flex-shrink-0">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs font-semibold text-[#0bc0df] bg-[#0bc0df]/10 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {blog.date}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {blog.readTime}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#b8c7e0] mb-3 group-hover:text-[#0bc0df] transition-colors">
            {blog.title}
          </h3>
          <p className="text-[#e5edfc] mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#0bc0df]" />
            <span className="text-sm text-[#e5edfc]">{blog.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}