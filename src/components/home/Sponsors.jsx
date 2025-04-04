//Sponsor data
const sponsors = [
  { name: "Nkwa", logo: "/download (1).jpg" },
  { name: "Tech Chantier", logo: "/download.jpg" },
  { name: "Buyam", logo: "/download.png" },
  { name: "Afro Vision", logo: "/download (2).jpg" },
];

const Sponsors = () => {
  return (
    <section className="bg-gradient-to-br from-[#f5f5f5] to-[#e4e4e4] py-16 px-4 md:px-8 lg:px-16 my-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Trusted by Leading Institutions
        </h2>
        <p className="text-lg text-gray-600">
          Partnering with top organizations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto py-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl text-center shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-32 h-32 mx-auto mb-4">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {sponsor.name}
              </h3>
              <p className="text-gray-600 mt-2">Leading Institution</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
