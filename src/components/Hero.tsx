"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icon for navigation buttons

const images = [
  "/images/image1.jpg", // Local image 1
  "/images/image2.jpg", // Local image 2
  "/images/image3.jpg", // Local image 3
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Navigate manually
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="text-center py-12 px-6">
      <h2 className="text-3xl font-bold">Track, Compete, Transform</h2>
      <p className="text-gray-400 mt-2">
        Track your calories, burn them with workouts, and achieve your fitness goals.
      </p>

      {/* Image Carousel */}
      <div className="relative mt-6 w-full max-w-xl mx-auto">
        {/* Image */}
        <Image
          src={images[currentIndex]} // Reference local image
          alt="Fitness"
          width={600}
          height={300}
          className="mx-auto rounded-lg transition-opacity duration-500"
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <button className="mt-8 bg-black text-white text-xl px-6 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300">
        Start Tracking
      </button>
    </section>
  );
}
