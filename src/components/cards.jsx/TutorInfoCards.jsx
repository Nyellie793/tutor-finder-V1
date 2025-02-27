
import {
  BookOpen,
  Users,
  Target,
} from "lucide-react";

const BenefitCard = ({ title, description, icon, learnMoreLink = "#" }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105">
      <div>
        <div className="mb-6 text-teal-500">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      </div>

      <div>
        <a
          href={learnMoreLink}
          className="block text-teal-500 font-semibold mb-2"
        >
          LEARN MORE
        </a>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const TutorInfoCards = () => {
  const benefitCards = [

    // Second row - differentiating roles
    {
      title: "Tutor/Teacher",
      icon: <BookOpen className="w-12 h-12" />,
      description:
        "Focus on academic subjects, teaching specific knowledge and skills to help students master coursework.",
    },
    {
      title: "Mentor",
      icon: <Users className="w-12 h-12" />,
      description:
        "Build long-term relationships and provide guidance on personal development and career paths.",
    },
    {
      title: "Coach",
      icon: <Target className="w-12 h-12" />,
      description:
        "Help students achieve specific goals through structured development and accountability systems.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-50 to-teal-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitCards.map((card, index) => (
            <BenefitCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorInfoCards;
