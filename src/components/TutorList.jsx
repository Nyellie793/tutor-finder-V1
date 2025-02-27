import { useState } from "react";
import TutorCard from "./cards.jsx/TutorCard";
import {mockTutors} from "@/assets/data";

const TutorList = () => {
  const [tutors] = useState(mockTutors);

  return (
    <div className="w-full md:max-w-4xl mt-7">
      <h1 className="text-2xl font-bold mb-3">Find Your Perfect Tutor</h1>

      <div className="space-y-4">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default TutorList;
