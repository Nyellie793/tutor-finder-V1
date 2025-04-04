
import SearchInput from "../components/SearchInput";

const HeroFind = () => {
  return (
    <section className="container flex w-full gap-6 md:gap-10 p-7">
      {/* left hand side */}
      <div className="w-[60%] flex flex-col space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-bold text-black">
          Online English tutors & teachers for private lessons
        </h1>

        <div className="flex justify-between items-center">
          <p className="line-clamp-3">
            Looking for an online English tutor? Preply is the leading online
            language learning platform worldwide. You can choose from 33377
            English teachers with an average rating of 4.91 o
          </p>
      
        </div>

        <div className="mt-">
          <label className="font-bold">
            Get a personalized choice of tutors by answering a few quick
            questions
          </label>

          <SearchInput />
        </div>
      </div>

      {/* right hand side */}
      <div className="flex items-center justify-center ">
        <img
          src="/scott-graham-5fNmWej4tAA-unsplash.jpg"
          alt=""
          className="w-[400px] rounded-md h-[300px] object-cover"
        />
      </div>
    </section>
  );
};

export default HeroFind;
