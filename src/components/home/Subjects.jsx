
// Subject icons mapping with emoji
const subjectIcons = {
  Mathematics: "🧮",
  English: "📚",
  Science: "🔬",
  Programming: "💻",
  Music: "🎵",
  Art: "🎨",
  Cooking: "🍳",
  Baking: "🥐",
};

const Subjects = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="text-4xl mb-4 text-gray-800 font-bold">
          Explore Popular Subjects
        </h2>
        <p className="text-gray-600">
          Find expert tutors/teachers in your favorite subjects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {Object.entries(subjectIcons).map(([subject, icon]) => (
          <div
            key={subject}
            className="bg-white p-8 rounded-2xl text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg border border-opacity-20 border-teal-300 hover:border-teal-400"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-300 to-blue-300 text-white">
              <span className="text-2xl">{icon}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{subject}</h3>
            <p className="text-gray-600 mb-4">
              Learn from expert {subject.toLowerCase()} tutors
            </p>
            <button className="px-6 py-2 rounded-lg bg-[#0097a7] text-white font-medium transition-all hover:shadow-md">
              Explore
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subjects;
