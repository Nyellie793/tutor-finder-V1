import SearchInput from "./SearchInput";
import Gigs from "./Gigs";

const GigsCreate = () => {
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
