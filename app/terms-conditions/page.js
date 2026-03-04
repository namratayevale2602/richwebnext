// app/terms-and-conditions/page.js
import Link from "next/link";
import { 
  Scale, 
  FileText, 
  Shield, 
  DollarSign, 
  Lock, 
  AlertCircle, 
  Globe, 
  XCircle, 
  Gavel,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import termsData from "@/data/terms.json";

export const metadata = {
  title: "Terms and Conditions | Rich System Solutions",
  description: "Read our terms and conditions governing the use of Rich System Solutions website and services.",
};

export default function TermsAndConditionsPage() {
  const { pageTitle, lastUpdated, introduction, sections } = termsData;

  return (
    <div className="min-h-screen pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex p-3 bg-[#127cc9]/20 rounded-2xl mb-4">
            <Scale className="w-8 h-8 text-[#0bc0df]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#b8c7e0] mb-4">
            {pageTitle}
          </h1>
          <p className="text-[#e5edfc] text-lg">
            Last Updated: <span className="text-[#0bc0df]">{lastUpdated}</span>
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white/10 rounded-2xl p-8 border border-white/20 mb-8">
          <div className="flex items-start gap-4">
            <FileText className="w-6 h-6 text-[#0bc0df] flex-shrink-0 mt-1" />
            <p className="text-[#e5edfc] text-lg leading-relaxed">
              {introduction}
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white/5 rounded-2xl p-6 border border-white/20 mb-12">
          <h2 className="text-xl font-semibold text-[#b8c7e0] mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {sections.slice(0, 8).map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="text-sm text-[#e5edfc] hover:text-[#0bc0df] transition-colors"
              >
                {section.title.split(' ').slice(1).join(' ')}
              </a>
            ))}
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={`section-${section.id}`}
              className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold text-[#b8c7e0] mb-4">
                {section.title}
              </h2>
              
              {/* Main content */}
              <p className="text-[#e5edfc] text-lg leading-relaxed mb-6">
                {section.content}
              </p>

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-4 mt-4 pl-6 border-l-2 border-[#127cc9]/30">
                  {section.subsections.map((subsection, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-[#0bc0df] mb-2">
                        {subsection.title}
                      </h3>
                      <p className="text-[#e5edfc] leading-relaxed">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact Information (special handling for section 15) */}
              {section.contactInfo && (
                <div className="mt-6 p-6 bg-gradient-to-br from-[#127cc9]/20 to-[#07337a]/20 rounded-xl">
                  <div className="space-y-4">
                    <p className="text-xl font-semibold text-[#b8c7e0]">
                      {section.contactInfo.company}
                    </p>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0bc0df] flex-shrink-0 mt-1" />
                      <p className="text-[#e5edfc]">{section.contactInfo.address}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#0bc0df]" />
                      <a 
                        href={`mailto:${section.contactInfo.email}`}
                        className="text-[#e5edfc] hover:text-[#0bc0df] transition-colors"
                      >
                        {section.contactInfo.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#0bc0df]" />
                      <a 
                        href={`tel:${section.contactInfo.phone}`}
                        className="text-[#e5edfc] hover:text-[#0bc0df] transition-colors"
                      >
                        {section.contactInfo.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-[#0bc0df]" />
                      <a 
                        href={`https://${section.contactInfo.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e5edfc] hover:text-[#0bc0df] transition-colors flex items-center gap-1"
                      >
                        {section.contactInfo.website}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Acceptance Statement */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#127cc9] to-[#07337a] rounded-2xl text-white text-center">
          <Lock className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">By using our services, you agree to these terms</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Your continued use of Rich System Solutions services constitutes your acceptance of these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#127cc9] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Us If You Have Questions
          </Link>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-[#e5edfc]/60">
          <p>© {new Date().getFullYear()} Rich System Solutions Pvt Ltd. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy-policy" className="hover:text-[#0bc0df] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#0bc0df] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}