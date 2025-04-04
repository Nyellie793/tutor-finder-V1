import SearchInput from "./SearchInput";
import Gigs from "./Gigs";
import { useApi } from "@/utils/fetcher";

const GigsCreate = () => {
  const { API } = useApi();
  const userDataString = localStorage.getItem("auth_token");
  // const userData = JSON.parse(userDataString);

  console.log("auth_token: ", userDataString);

  const createGigs = async () => {
    try {
      const gigs = await API.createGig("POST", userDataString);
      console.log("gigs: ", gigs);
      // if(gigs.ok){
      //   console.log("from API", gigs);
      // }
      return gigs;
    } catch (error) {
      console.log(error);
    }
  };

  createGigs();

  return (
    <div className="app w-full">
      <div className="flex justify-center items-center w-full">
        <div className="w-full md:max-w-3xl">
          <SearchInput buttonText="Search" placeholder="Search For Gigs" />
        </div>
      </div>

      <Gigs />
    </div>
  );
};

export default GigsCreate;
