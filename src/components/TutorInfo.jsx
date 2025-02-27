import TutorInfoCards from "./cards.jsx/TutorInfoCards";

const TutorInfo = () => {
  return (
    <div className=" container p-7 w-full bg-accent">
      <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex-1 pr-0 md:pr-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Tutor/Teach Online?
            </h2>
            <p className="text-lg text-gray-700">
              Online learning or E-Learning is a fast growing field which allows
              people from all over the world to learn and teach from the comfort
              of their homes.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              During COVID-19, E-Learning was relied upon by everyone at all
              levels of education due to lockdowns. This made online teaching an
              effective means of learning and teaching, and it has become a
              verified way of earning money while helping others.
            </p>
          </div>

          {/* Image Container */}
          <div className="flex-1 mt-6 md:mt-0">
            <div className="rounded-lg overflow-hidden bg-pink-100 p-3 border-4 border-pink-200">
              <img
                src="/public/download (1).png"
                alt="Online tutoring illustration"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <TutorInfoCards />
      </div>


    </div>
  );
};

export default TutorInfo;
