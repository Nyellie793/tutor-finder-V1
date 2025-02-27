import { useState } from "react";
import GigCard from "./cards.jsx/GigsCard";
import {mockGigs} from "@/assets/data";

const GigsList = () => {
  const [gigs] = useState(mockGigs);

  return (
    <div className="w-full md:max-w-4xl mt-7">
      <h1 className="text-2xl font-bold mb-3">Surf through our avaliable gigs</h1>

      <div className="space-y-4">
        {gigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} />
        ))}
      </div>
    </div>
  );
};

export default GigsList;
