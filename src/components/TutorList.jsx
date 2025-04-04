/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import TutorCard from "./cards.jsx/TutorCard";
import { useApi } from "@/utils/fetcher";
import toast from "react-hot-toast";
// import {mockTutors} from "@/assets/data";

const TutorList = () => {
  // const [tutors] = useState(mockTutors);
  const { API } = useApi();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try{
        const response = await API.getAllTutors();

        //check response
        console.log("Raw response structure:", response);

        if (Array.isArray(response.data)){
          setTutors(response.data);
        }
        else if (response.data && Array.isArray(response.data.data)){
          setTutors(response.data.data);
        }
        else if (response.data && response.data[0]){
          setTutors(response.data[0]);
        } else {
          console.log("Unexpected response structure:", response);
          toast.error("Unexpected data format recieved");
        }
      }catch (error) {
        console.error("Error fetching tutors:", error);
        toast.error("Failed to load tutors");
      }
    };

    fetchTutors();
  }, []);

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
