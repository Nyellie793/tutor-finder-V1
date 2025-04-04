
const TestimonialCards = () => {
  const testimonials = [
    {
      name: "Jessica Morgan",
      role: "Math Student",
      image: "/api/placeholder/100/100",
      testimonial:
        "My tutor has been incredibly helpful with advanced calculus. I've improved my grades significantly within just two months of sessions.",
    },
    {
      name: "Michael Chen",
      role: "Computer Science Major",
      image: "/api/placeholder/100/100",
      testimonial:
        "I've tried many coding tutors online, but one stands out for their patience and thorough explanations of complex programming concepts.",
    },
    {
      name: "Aisha Williams",
      role: "High School Student",
      image: "/api/placeholder/100/100",
      testimonial:
        "The personalized study plan my tutor created has surpassed my expectations, providing exactly what I needed to excel in my AP classes.",
    },
  ];

  return (
    <div className="w-full bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-light text text-center mb-2">
          What students say
        </h1>
        <p className="text-center text/80 mb-12 max-w-2xl mx-auto">
          Discover what our satisfied students have to say about their
          experiences with our tutoring services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#87ceeb] border-teal-700/30 rounded-2xl">
              <div className="flex flex-col items-center">
                <div className="mb-4 relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-[#0097a7] p-1 mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <h3 className="text-white- text-xl font-medium">
                  {testimonial.name}
                </h3>
                <p className="text-teal-600 mb-4">{testimonial.role}</p>

                <p className=" text-center mb-6">{testimonial.testimonial}</p>

                {/* {index === 1 && (
                  <div className="mt-6 bg-teal-500 rounded-full p-2 hover:bg-teal-400 transition-colors cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-8 h-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
