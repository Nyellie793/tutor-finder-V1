import { useEffect, useState } from "react";
import SearchInput from "../SearchInput";

// Array of images
const images = [
  "/wes-hicks-4-EeTnaC1S4-unsplash.jpg",
  "/thomas-park-w9i7wMaM3EE-unsplash.jpg",
  "/scott-graham-5fNmWej4tAA-unsplash.jpg",
  "/compare-fibre-Y8TiLvKnLeg-unsplash.jpg",
];

const Hero = () => {
  // states of sliders
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-[#0097a7] bg-clip-text text-transparent">
            Find the perfect tutor/teacher, mentor or coach for your learning
            journey
          </h1>
          <p className="text-xl text-gray-800">
            Connect with experts in any subject, anytime, anywhere to achieve
            your learning goals
          </p>

          <div className="w-full">
            <SearchInput />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0097a7] mb-2">
                5000+
              </span>
              <span className="text-sm text-gray-800 text-center">
                Expert Tutors, Teachers, Mentors & Coaches
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0097a7] mb-2">
                50+
              </span>
              <span className="text-sm text-gray-800 text-center">
                Subjects & Skills
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#0097a7] mb-2">
                100k+
              </span>
              <span className="text-sm text-gray-800 text-center">
                Happy Students
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-8">
          <div className="w-full h-96 md:w-full md:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={images[currentIndex]}
              alt="Learning"
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
