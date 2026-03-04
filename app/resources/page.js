// app/resources/page.js
import Link from "next/link";
import { Briefcase, BookOpen, HelpCircle, FileText } from "lucide-react";

export const metadata = {
  title: "Resources | Rich System Solutions",
  description: "Explore our resources including career opportunities, how-to guides, FAQs, and more.",
};

export default function ResourcesPage() {
  const resources = [
    {
      title: "Career",
      description: "Join our growing team and build a rewarding career in the tech industry.",
      href: "/resources/career",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "How To Guide",
      description: "Step-by-step guides and tutorials to help you succeed.",
      href: "/resources/how-to-guide",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about our services.",
      href: "/resources/faq",
      icon: <HelpCircle className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Blog",
      description: "Read our latest articles, insights, and industry updates.",
      href: "/resources/blog",
      icon: <FileText className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#b8c7e0] mb-4">
            Resources
          </h1>
          <p className="text-xl text-[#0bc0df] max-w-3xl mx-auto">
            Explore our comprehensive resources to help your business grow and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
          {resources.map((resource) => (
            <Link key={resource.href} href={resource.href}>
              <div className={`bg-gradient-to-br ${resource.color} bg-opacity-10 rounded-2xl p-8 border border-white/20 hover:shadow-xl transition-all duration-300 cursor-pointer group`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl text-white">
                    {resource.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[#b8c7e0] group-hover:text-white transition-colors">
                    {resource.title}
                  </h2>
                </div>
                <p className="text-[#e5edfc] text-lg">
                  {resource.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}