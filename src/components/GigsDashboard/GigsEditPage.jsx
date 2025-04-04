import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
import EditGigForm from "./EditGigForm";
import { useApi } from "@/utils/fetcher";

const GigsEditPage = ({ id }) => {
  const [gigData, setGigData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { API } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("auth_token");

        if (!token) {
          toast.error("Please login to edit gigs");
          navigate("/login");
          return;
        }

        // Use the getGigDetails method to fetch the specific gig
        const response = await API.getGigDetails(id);

        // Check if response has data and it's structured correctly
        if (!response || !response.data || response.data.length === 0) {
          toast.error("Gig not found");
          navigate("/learner-dashboard/gigs");
          return;
        }

        // If data is an array, take the first item
        // This is important because your API might return an array of gigs
        const gigDataToUse = Array.isArray(response.data)
          ? response.data[0]
          : response.data;

        setGigData(gigDataToUse);
      } catch (error) {
        console.error("Error fetching gig details:", error);
        toast.error(error.message || "Failed to load gig data");
        navigate("/learner-dashboard/gigs");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchGigData();
    } else {
      setIsLoading(false);
      toast.error("No gig ID provided");
      navigate("/learner-dashboard/gigs");
    }
  }, [id, API, navigate]);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-12 h-full">
        <Loader className="h-12 w-12 text-[#0097A7] animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-4">
      {gigData ? (
        <EditGigForm initialGig={gigData} />
      ) : (
        <div className="text-center py-8">
          <p className="text-lg text-gray-700">No gig data available</p>
        </div>
      )}
    </div>
  );
};

export default GigsEditPage;
