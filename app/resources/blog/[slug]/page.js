// app/resources/blog/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import blogData from "@/data/blog.json";

// This function generates the static paths at build time
export async function generateStaticParams() {
  return blogData.blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// This function generates metadata for each blog post
export async function generateMetadata({ params }) {
  // Await params to ensure it's resolved
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const blog = blogData.blogs.find(b => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${blog.title} | Rich System Solutions Blog`,
    description: blog.excerpt,
    keywords: blog.tags?.join(", "),
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [{ url: blog.image }],
    },
  };
}

// Main page component
export default async function BlogDetailPage({ params }) {
  // Await params to ensure it's resolved
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Find the blog post with the matching slug
  const blog = blogData.blogs.find(b => b.slug === slug);
  const recentBlogs = blogData.blogs.filter(b => b.slug !== slug).slice(0, 3);

  // If no blog post found, show 404
  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-2 text-[#e5edfc] hover:text-[#0bc0df] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <article className="bg-white/10 rounded-2xl overflow-hidden border border-white/20">
              {/* Featured Image */}
              <div className="relative h-96">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="text-sm font-semibold text-[#0bc0df] bg-[#0bc0df]/10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {blog.date}
                  </span>
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#b8c7e0] mb-6">
                  {blog.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 rounded-xl">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#b8c7e0]">{blog.author}</p>
                    <p className="text-sm text-gray-400">{blog.authorRole}</p>
                  </div>
                </div>

                {/* Blog Content */}
                <div 
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-4 h-4 text-[#0bc0df]" />
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#e5edfc]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Author Card */}
              <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={blog.authorImage}
                    alt={blog.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#b8c7e0] mb-1">{blog.author}</h3>
                <p className="text-sm text-[#0bc0df] mb-4">{blog.authorRole}</p>
                <p className="text-sm text-[#e5edfc]">
                  Expert in {blog.category} with years of industry experience.
                </p>
              </div>

              {/* Recent Posts */}
              {recentBlogs.length > 0 && (
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-[#b8c7e0] mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentBlogs.map((recent) => (
                      <Link
                        key={recent.id}
                        href={`/resources/blog/${recent.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={recent.image}
                            alt={recent.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#b8c7e0] group-hover:text-[#0bc0df] transition-colors line-clamp-2">
                            {recent.title}
                          </h4>
                          <p className="text-xs text-gray-400 mt-1">{recent.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}