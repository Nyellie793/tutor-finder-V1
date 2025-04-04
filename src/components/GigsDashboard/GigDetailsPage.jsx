/* eslint-disable no-unused-vars */
import { useApi } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const GigDetailsPage = () => {
    const { API } = useApi();
    // const gigData = localStorage.getItem("auth_token");
    // const userDataString = localStorage.getItem("user")
    // const userData = JSON.parse(userDataString);
    const [gigs, setGigs] = useState([]);
    const gigData = localStorage.getItem("gig_id");


    console.log("gig: ", gigData);
    console.log("gigData.id: ", gigData?.id)
    // console.log("gigData: ", gigData);
    // console.log("gigData.id: ", gigData?.id);

    // console.log("auth_token: ", gigData);

    useEffect(() => {
      const fetchGigs = async () => {
        try {
          const fetchedGig = await API.getGigDetails(parseInt(gigData?.id));
          setGigs(fetchedGig.data);
          console.log("gig: ", fetchedGig);
        } catch (error) {
          console.error("Error fetching gig:", error);
          toast.error("Failed to load gig");
        }
      };

      fetchGigs();
    }, []);

  
  return (
    <div className="bg-white min-h-screen">
      {/* Header with teal background */}
      <div className="p-6 bg-teal-50 border-b border-teal-100 shadow-sm">
        <h1 className="font-bold text-3xl text-gray-800">{gigData?.title}</h1>
      </div>

      {/* Content area */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Card with light background and lilac accent */}
        <div className="bg-white rounded-lg shadow-md border border-lilac-100 p-6 mt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b border-teal-100 pb-2">
            Gig Information
          </h2>

          <ul className="space-y-4 text-lg">
            {/* Using lilac bullets with teal highlights on hover */}
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Gig&apos;s Title:</span>
              <span className="ml-2 text-gray-600">
                {gigData?.title}
              </span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Category:</span>
              <span className="ml-2 text-gray-600">Development</span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Description:</span>
              <span className="ml-2 text-gray-600">
                Frontend development for e-commerce site
              </span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Budget:</span>
              <span className="ml-2 text-gray-600">$2,000</span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">
                Preferred Location:
              </span>
              <span className="ml-2 text-gray-600">Remote</span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Status:</span>
              <span className="ml-2 px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                Open
              </span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Date Created:</span>
              <span className="ml-2 text-gray-600">March 10, 2025</span>
            </li>
            <li className="flex items-start hover:bg-teal-50 p-2 rounded transition-colors">
              <span className="text-lilac-500 mr-2">•</span>
              <span className="font-medium text-gray-700">Gig ID:</span>
              <span className="ml-2 text-gray-600">GIG-2025-0342</span>
            </li>
          </ul>
        </div>

        {/* Action buttons with teal and lilac styling */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md shadow-sm transition-colors">
            Apply Now
          </button>
          <button className="px-6 py-2 bg-white border border-lilac-300 hover:bg-lilac-50 text-lilac-700 rounded-md shadow-sm transition-colors">
            Save Gig
          </button>
        </div>
      </div>
    </div>
  );
};

export default GigDetailsPage;