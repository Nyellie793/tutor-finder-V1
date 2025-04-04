import { useEffect, useState } from "react";
import GigCard from "./cards.jsx/GigsCard";
import { useApi } from "@/utils/fetcher";
import toast from "react-hot-toast";
// import {mockGigs} from "@/assets/data";

const GigsList = () => {
  const { API } = useApi();
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await API.getAllGigs();

        // Check the structure of the response
        console.log("Raw response structure:", response);

        // If response.data is the array of gigs you need
        if (Array.isArray(response.data)) {
          setGigs(response.data);
        }
        // If response.data contains a data property that is the array
        else if (response.data && Array.isArray(response.data.data)) {
          setGigs(response.data.data);
        }
        // If you need a specific array from the numbered arrays in the log
        else if (response.data && response.data[0]) {
          // Choose the specific array you need based on your API structure
          setGigs(response.data[0]);
        } else {
          console.error("Unexpected response structure:", response);
          toast.error("Unexpected data format received");
        }
      } catch (error) {
        console.error("Error fetching gigs:", error);
        toast.error("Failed to load gigs");
      }
    };

    fetchGigs();
  }, []);
  
  //  useEffect(() => {
  //    const fetchGigs = async () => {
  //      try {
  //        const fetchedGigs = await API.getAllGigs();
  //        setGigs(fetchedGigs.data);
  //        console.log("gigs: ", fetchedGigs.data);
  //      } catch (error) {
  //        console.error("Error fetching gigs:", error);
  //        toast.error("Failed to load gigs");
  //      }
  //    };

  //    fetchGigs();
  //  }, []);

  return (
    <div className="w-full md:max-w-4xl mt-7">
      <h1 className="text-2xl font-bold mb-3">Surf through our avaliable gigs</h1>

      <div className="space-y-4">
        {gigs.map((gig) => (
          <GigCard showPublish={false} key={gig.id} gig={gig} />
        ))}
      </div>
    </div>
  );
};

export default GigsList;
