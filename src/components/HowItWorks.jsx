

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-[#f5f5f5] to-[#e4e4e4] p-4 md:p-16 my-8 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Simple Steps to start Learning
        </h2>
        <p className="text-gray-600">
          Begin your learning journey in three easy steps
        </p>
      </div>

      <div className="max-w-6xl mx-auto py-4">
        {/* Desktop view with arrows */}
        <div className="hidden md:grid md:grid-cols-5 gap-4">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md relative transition-transform duration-300 hover:translate-y-[-5px] col-span-1">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images.jpg"
                alt="Find Tutor"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Your Tutor</h3>
            <p className="text-sm text-gray-600">
              Browse through our verified tutors and find your match based on
              needs
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="flex items-center justify-center text-[#667eea] text-2xl font-bold">
            →
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md relative transition-transform duration-300 hover:translate-y-[-5px] col-span-1">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images (1).jpg"
                alt="Schedule"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Schedule Lessons</h3>
            <p className="text-sm text-gray-600">
              Choose your preferred time slots and book your session
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="flex items-center justify-center text-[#667eea] text-2xl font-bold">
            →
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md relative transition-transform duration-300 hover:translate-y-[-5px] col-span-1">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images (2).jpg"
                alt="Learn"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Start Learning</h3>
            <p className="text-sm text-gray-600">
              Connect with your tutor and achieve your learning goals
            </p>
          </div>
        </div>

        {/* Mobile view without arrows - stacked */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md relative transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images.jpg"
                alt="Find Tutor"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Your Tutor</h3>
            <p className="text-gray-600">
              Browse through our verified tutors and find your match based on
              needs
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md relative transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images (1).jpg"
                alt="Schedule"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Schedule Lessons</h3>
            <p className="text-gray-600">
              Choose your preferred time slots and book your session
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl text-center shadow-md relative transition-transform duration-300 hover:translate-y-[-5px]">
            <div className="w-16 h-16 mx-auto mb-4">
              <img
                src="/images (2).jpg"
                alt="Learn"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[-15px] right-[-15px] w-8 h-8 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Start Learning</h3>
            <p className="text-gray-600">
              Connect with your tutor and achieve your learning goals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
