

function AboutPage() {
  // Data for about sections to make the component more maintainable
  const aboutSections = [
    {
      title: "Our Mission",
      text: "At Tutor Finder, we believe that everyone deserves access to quality education. Our platform connects passionate educators with eager learners, creating meaningful learning experiences that transform lives.",
      image: "public/images (3).jpg",
      alt: "Our Mission",
      reverse: false,
    },
    {
      title: "Our Vision",
      text: "We envision a world where distance and resources are no longer barriers to education. Through our platform, we're building a global community of learners and educators, united by the pursuit of knowledge.",
      image: "public/images (4).jpg",
      alt: "Our Vision",
      reverse: true,
    },
    {
      title: "What We Offer",
      text: "From academic subjects to practical skills, our platform offers a diverse range of learning opportunities. We carefully vet our tutors to ensure they meet our high standards of expertise and teaching ability.",
      image: "public/Tutor Finder.png",
      alt: "Our Offerings",
      reverse: false,
    },
    {
      title: "Our Platform",
      text: "Our user-friendly platform makes it easy to find the perfect tutor. With advanced matching algorithms and detailed profiles, we ensure that every learning journey starts on the right foot.",
      image: "public/images (5).jpg",
      alt: "Our Platform",
      reverse: true,
    },
    {
      title: "Community Impact",
      text: "We're proud to have helped thousands of students achieve their learning goals. Our community of tutors and learners continues to grow, creating positive impact in education across the globe.",
      image: "public/images (6).jpg",
      alt: "Community Impact",
      reverse: false,
    },
    {
      title: "Future Goals",
      text: "As we look to the future, we're committed to expanding our reach and enhancing our services. We're constantly innovating to make education more accessible, effective, and enjoyable for everyone.",
      image: "public/images (7).jpg",
      alt: "Our Future",
      reverse: true,
    },
  ];

  // Reusable section component
  const AboutSection = ({ title, text, image, alt, reverse, index }) => {
    const isEven = index % 2 === 1;

    return (
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 md:gap-10 mb-16 p-5 rounded-xl shadow-md`}
        style={{
          background: isEven
            ? "linear-gradient"
            : "linear-gradient",
        }}
      >
        <div className="w-full md:w-1/2 p-5">
          <h2 className="text-2xl text-teal relative mb-4 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-14 after:h-1 after:bg-lilac after:rounded">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">{text}</p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-72 lg:h-80">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover rounded-lg shadow-md border-3 border-white"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4">
      {/* Page Title */}
      <div className="bg-[#0097a7] text-center py-12 md:py-16 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
          About Tutor Finder
        </h1>
        <p className="text-lg md:text-xl text-white">
          Bridging the Gap Between Learning and Teaching
        </p>
      </div>

      {/* About Content Sections */}
      <div className="py-8 md:py-10 px-4 max-w-6xl mx-auto bg-white">
        {aboutSections.map((section, index) => (
          <AboutSection
            key={index}
            title={section.title}
            text={section.text}
            image={section.image}
            alt={section.alt}
            reverse={section.reverse}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
