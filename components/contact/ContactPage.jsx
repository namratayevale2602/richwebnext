"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Youtube,
  Instagram,
  Linkedin,
  Clock,
  Calendar,
  Facebook,
  Headphones,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";
import ContactForm from "./ContactForm";
// import Breadcrumb from "../../components/Breadcrumb";

// Dummy contact data
const dummyContactData = [
  {
    id: 1,
    address:
      "4th Floor, Akravi Disha, 401, opposite Hotel City Pride, Tilakwadi, Nashik, Maharashtra 422002.",
    social_links: [
      { value: "https://facebook.com/richsystems" },
      { value: "https://linkedin.com/company/richsystems" },
      { value: "https://instagram.com/richsystems" },
    ],
    support_enquiry: [
      { support_enquiry: "9595902003" },
      { support_enquiry: "9595902006" },
    ],
    sales_enquiry: [
      { sales_enquiry: "9765432109" },
      { sales_enquiry: "9345678901" },
    ],
  },
];

// Mock fetch function
const fetchContactData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(dummyContactData);
      } catch (error) {
        reject(new Error(error));
      }
    }, 300);
  });
};

const ContactPage = () => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContactData = async () => {
      try {
        setLoading(true);
        const data = await fetchContactData();
        setContactData(data);
      } catch (err) {
        setError(err.message);
        setContactData([]);
      } finally {
        setLoading(false);
      }
    };

    getContactData();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-transparent">
        <div className="w-full h-48 bg-blue-900">
          <div className="h-full w-full flex flex-col items-center justify-center py-10">
            <div className="animate-pulse h-8 bg-blue-700 rounded w-48 mb-4"></div>
            <div className="animate-pulse h-4 bg-blue-700 rounded w-64 mb-2"></div>
            <div className="animate-pulse h-4 bg-blue-700 rounded w-72"></div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left side loading */}
              <div className="w-full lg:w-1/2">
                <div className="animate-pulse h-10 bg-gray-300 rounded w-3/4 mb-6"></div>
                <div className="animate-pulse h-4 bg-gray-300 rounded w-full mb-4"></div>
                <div className="animate-pulse h-8 bg-gray-300 rounded w-48 mb-8"></div>
                <div className="animate-pulse h-64 bg-gray-300 rounded w-full"></div>
              </div>
              {/* Right side loading */}
              <div className="w-full lg:w-1/2">
                <div className="animate-pulse h-80 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Failed to load contact information: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* Header Section */}
      <div className="w-full h-48">
        <div className="h-full w-full flex flex-col items-center justify-center py-10">
          <h1 className="text-[#b8c7e0] text-4xl mb-5 font-bold">Contact Us</h1>
          <p className="text-[#e5edfc] mb-2 text-lg">
            We love questions and feedback - and we're always happy to help!
          </p>
          <p className="text-white mb-2 text-lg">
            Here are some ways to contact us.
          </p>
        </div>
      </div>

      {/* <Breadcrumb page="contact" /> */}

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Company Info */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-[#0bc0df]" />
                <h1 className="text-4xl font-bold text-[#b8c7e0]">
                  Rich System Solution Pvt.Ltd
                </h1>
              </div>
              <p className="text-[#e5edfc] text-lg mb-8 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0bc0df] flex-shrink-0 mt-1" />
                <span>{contactData[0]?.address}</span>
              </p>

              {/* Social Links */}
              <div className="flex flex-row justify-start mb-8 gap-2">
                <Link
                  href={contactData[0]?.social_links[0]?.value || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link
                  href={contactData[0]?.social_links[1]?.value || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href={"https://www.youtube.com/@RICHSystemSolutions"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-full text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link
                  href={contactData[0]?.social_links[2]?.value || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>

              <hr className="my-8 border-white/20" />

              {/* Working Hours and Support */}
              <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="flex-1 p-5 border border-white/20 rounded-2xl">
                  <h2 className="text-xl font-bold text-[#e5edfc] mb-4">
                    Working Hours
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex flex-row items-center text-[#e5edfc]">
                      <Calendar className="w-5 h-5 me-3 text-[#0bc0df]" />
                      Monday - Saturday
                    </li>
                    <li className="flex flex-row items-center text-[#e5edfc]">
                      <Clock className="w-5 h-5 me-3 text-[#0bc0df]" />
                      9:30am - 6:30pm
                    </li>
                  </ul>
                </div>

                <div className="flex-1 p-5 border border-white/20 rounded-2xl">
                  <h2 className="text-xl font-bold text-[#e5edfc] mb-4">
                    For Support Assistance
                  </h2>
                  <ul className="space-y-3">
                    {contactData[0]?.support_enquiry?.map((sales, index) => (
                      <li
                        className="flex flex-row items-center text-[#e5edfc]"
                        key={index}
                      >
                        <Headphones className="w-5 h-5 me-3 text-[#0bc0df]" />
                        <a 
                          href={`tel:+91${sales.support_enquiry}`} 
                          className="hover:text-blue-400 transition-colors"
                        >
                          +91 {sales.support_enquiry}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr className="my-8 border-white/20" />

              {/* Map */}
              <div className="my-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.242272312533!2d73.77775407427671!3d19.998344022372525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb084d22ff73%3A0xe3e70a169bf7cb1b!2sRICH%20System%20Solutions%20Pvt.%20Ltd.%20%7C%20Digital%20Marketing%20%7C%20Bulk%20SMS%20%7C%20Website%20Development!5e0!3m2!1sen!2sin!4v1725346020421!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                  title="Rich System Solutions Location"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-1/2 border border-white/20 rounded-2xl">
              <div className="rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-[#0bc0df]" />
                  <h2 className="font-bold text-2xl text-[#b8c7e0] capitalize">
                    Send us a message
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;