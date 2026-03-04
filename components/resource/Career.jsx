// app/resources/career/page.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { useForm } from "react-hook-form";
import careerData from "@/data/career.json";

// Mock fetch functions (using JSON data)
const fetchPositions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(careerData.positions);
    }, 400);
  });
};

const fetchCareers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(careerData.careers);
    }, 400);
  });
};

const Career = () => {
  const [position, setPosition] = useState([]);
  const [intro, setIntro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [positionsData, careersData] = await Promise.all([
          fetchPositions(),
          fetchCareers(),
        ]);
        setPosition(positionsData);
        setIntro(careersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-40">
        {/* Hero Section Loading */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="px-10 sm:px-20 flex flex-col sm:flex-row justify-between items-center gap-10 w-full">
            <div className="animate-pulse w-96 h-64 bg-gray-300 rounded"></div>
            <div className="flex-1">
              <div className="animate-pulse h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        {/* Positions Loading */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-20">
          <div className="animate-pulse h-10 bg-gray-300 rounded w-64 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="animate-pulse bg-gray-200 h-32 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40">
      {/* Hero Section */}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-10 w-full">
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/career-hero.jpg"
              width={400}
              height={250}
              alt="career"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#b8c7e0] mb-4">
              {intro[0]?.title || "Join Our Team"}
            </h1>
            <p className="text-[#e5edfc] text-lg leading-relaxed">
              {intro[0]?.description ||
                "We're looking for talented individuals to join our growing team."}
            </p>
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16">
        <h1 className="text-3xl sm:text-4xl text-[#b8c7e0] font-bold text-center mb-12">
          Current Openings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {position.map((pos) => (
            <Position
              key={pos.id}
              position={pos.position}
              experience={pos.experience}
              type={pos.type}
              location={pos.location}
              opening={pos.opening}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

// Position Component
export function Position({ position, opening, experience, type, location }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-white/20">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <Briefcase className="text-2xl text-[#b8c7e0]" />
            <h2 className="text-xl font-bold text-[#b8c7e0] ml-4">
              {position}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              <div>
                <h3 className="text-sm font-semibold text-[#e5edfc]">
                  Experience
                </h3>
                <p className="font-semibold text-[#e5edfc]">
                  {experience} years
                </p>
              </div>

              <div className="border-l border-r border-white/20 px-6">
                <h3 className="text-sm font-semibold text-[#e5edfc]">
                  Positions
                </h3>
                <p className="font-semibold text-[#e5edfc]">{opening}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#e5edfc]">
                  Location
                </h3>
                <p className="font-semibold text-[#e5edfc]">{location}</p>
              </div>
            </div>

            <div>
              <button
                onClick={openModal}
                className="bg-[#073379] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#b8c7e0]">Apply Now</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-[#e5edfc] text-2xl"
                >
                  ×
                </button>
              </div>

              <Resume onClose={closeModal} positions={[position]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Resume Component
export function Resume({ onClose, positions }) {
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("apply_for", data.apply_for);
    if (data.document[0]) {
      formData.append("document", data.document[0]);
    }

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulate successful submission
      setSuccess(true);
      setDanger(false);
      setTimeout(() => {
        setSuccess(false);
        reset();
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      setDanger(true);
      setTimeout(() => setDanger(false), 2000);
    }
  };

  return (
    <div>
      {/* Alerts */}
      {success && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Form submitted successfully!
        </div>
      )}

      {danger && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          There was a technical error! Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-[#e5edfc] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 text-[#e5edfc] border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <span className="mt-1 text-red-500 text-sm">
                Full Name is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e5edfc] mb-2">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 text-[#e5edfc] py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <span className="mt-1 text-red-500 text-sm">
                Valid Email is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e5edfc] mb-2">
              Mobile *
            </label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full px-4 text-[#e5edfc] py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("mobile", {
                required: true,
                pattern: /^[7-9]\d{9}$/i,
                maxLength: 10,
              })}
            />
            {errors.mobile && (
              <span className="mt-1 text-red-500 text-sm">
                Valid Mobile Number is required
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#e5edfc] mb-2">
              Apply For *
            </label>
            <select
              className="w-full px-4 py-3 bg-white/20 text-[#e5edfc] border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("apply_for", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Select Position
              </option>
              {positions.map((pos, i) => (
                <option key={i} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
            {errors.apply_for && (
              <span className="mt-1 text-red-500 text-sm">
                Please select a position
              </span>
            )}
          </div>
        </div>

        {/* Resume Upload */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#e5edfc] mb-2">
              Resume *
            </label>
            <input
              type="file"
              className="w-full px-4 py-3 text-[#e5edfc] border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".pdf,.doc,.docx"
              {...register("document", { required: true })}
              onChange={handleFileChange}
            />
            {errors.document && (
              <span className="mt-1 text-red-500 text-sm">
                Resume is required
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6 sm:mt-0"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>

        <p className="text-sm text-[#e5edfc] mt-4">
          PDF, DOC, and DOCX formats are accepted.
        </p>
      </form>
    </div>
  );
}