/* eslint-disable react/prop-types */
import { Heart } from "lucide-react";
import { UserAvatar } from "../UserAvatar";
import AppBtn from "../AppBtn";

const TutorCard = ({ tutor }) => {
  const { name, profile_image, tutorProfile, categories } = tutor;

  // Getting data from relationships
  const { bio, years_of_experience, availability_status } = tutorProfile || {};

  // Extracting main category (if exists)
  const mainCategory =
    categories && categories.length > 0 ? categories[0].name : "General";

  // Assuming we have some rating data (this could be an average from applications or reviews)
  const rating = tutor.rating || 4.5;
  const reviewCount = tutor.reviewCount || 0;

  // Hourly rate (this could come from a pricing field not shown in your schema)
  const hourlyRate = tutor.hourlyRate || 25;

  const handleClick = () => {
    console.log('View')
  };

  return (
    <div className="flex flex-col md:flex-row border-2 border-black rounded-lg p-4 shadow-sm w-full">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 rounded-lg">
        <UserAvatar
          imageUrl={profile_image}
          name={name}
          className="w-32 h-32"
        />
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{name}</h3>
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                {availability_status === "available" ? "Available" : "Busy"}
              </span>
            </div>

            <p className="text-gray-600 mt-1">{mainCategory} Tutor</p>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center">
              <span className="font-bold mr-1">★ {rating}</span>
              <span className="text-gray-500 text-sm">
                {reviewCount} reviews
              </span>
            </div>
            <div className="mt-1">
              <span className="font-bold text-lg">€{hourlyRate}</span>
              <span className="text-gray-500 text-sm">/hour</span>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-gray-600">{bio && bio.substring(0, 150)}...</p>
          <div className="mt-2 flex items-center">
            <span className="text-sm text-gray-500">
              {years_of_experience} years of experience
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between">
           <AppBtn onClick={handleClick}>View Profile</AppBtn>
            <Heart className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
