import GigsList from "./GigsList";
import AppSelect from "./AppSelect";
// import { useApi } from "@/utils/fetcher";

const Tutors = () => {
  // Data for different select dropdowns
  const categories = [
    {label:'Academics', value:'academics'},
    {label:'Arts', value:'arts'},
    {label:'Languages', value:'languages'},
    {label:'Musical Instrument', value:'musical instrument'},
    {label:'Lifestyle', value:'lifestyle'},
    {label:'Profession', value:'profession'},
    {label:'Health and Fitness', value:'health and fitness'},
    {label:'IT', value:'it'},
    {label:'Exams', value:'exams'}
  ];

  const skills = [
    { label: "Baking", value: "baking" },
    { label: "Cooking", value: "cooking" },
    { label: "Digital Skills", value: "digital_skills" },
    { label: "MS Skills", value: "ms_skills" },

  ];

  const byPicks = [
    "Popularity",
    "Highly Priced",
    "Lowly Priced",
    "Number of Reviews",
    "Best Ratings",
  ];

  const byType = ["Tutor", "Mentor", "Coach"];

  const genders = ["Male", "Female"];

  // Custom handlers if needed
  const handleSubjectChange = (value) => {
    console.log("Selected subject:", value);
    // Additional logic here...
  };


  return (


    <div className="">
      <h1 className="text-2xl font-bold mb-2">100k+ Courses Avaliable</h1>

      <div className="flex flex-wrap gap-4">
        <AppSelect
          items={categories}
          placeholder="Specialties"
          width="w-[180px]"
          onValueChange={handleSubjectChange}
        />

        <AppSelect items={skills} placeholder="Skills" width="w-[180px]" />

        <AppSelect
          items={byType}
          placeholder="Tutor categories"
          width="w-[180px]"
        />

        <AppSelect
          items={byPicks}
          placeholder="Sort by: Our top picks"
          width="w-[220px]"
        />

        <AppSelect items={genders} placeholder="Gender" width="w-[150px]" />
      </div>

      <GigsList />

    
    </div>
  );
};

export default Tutors;
