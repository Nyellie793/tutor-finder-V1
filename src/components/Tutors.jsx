import AppSelect from "./AppSelect";
import TutorList from "./TutorList";

const Tutors = () => {
  // Data for different select dropdowns
  const subjects = [
    { label: "Mathematics", value: "mathematics" },
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Economics", value: "economics" },
    { label: "Geography", value: "geography" },
    { label: "Biology", value: "biology" },
    { label: "History", value: "history" },
    { label: "Physics", value: "physics" },
    { label: "Chemistry", value: "chemistry" },
    { label: "Literature", value: "literature" },
    { label: "Programming", value: "programming" },
  ];

  const skills = [
    { label: "Baking", value: "baking" },
    { label: "Cooking", value: "cooking" },
    { label: "Digital Skills", value: "digital_skills" },
    { label: "Wig Installations", value: "wig_installations" },
    { label: "MS Skills", value: "ms_skills" },
    { label: "Singing", value: "singing" },
    { label: "Arts", value: "arts" },
  ];

  const byPicks = [
    "Popularity",
    "Highly Priced",
    "Lowly Priced",
    "Number of Reviews",
    "Best Ratings",
  ];

  const categories = ["Tutor", "Mentor", "Coach"];

  const genders = ["Male", "Female"];

  // Custom handlers if needed
  const handleSubjectChange = (value) => {
    console.log("Selected subject:", value);
    // Additional logic here...
  };

  return (
    <div className=" container bg-gradient-to-r from-teal-50 to-purple-50">
      <div className="why"></div>
      <h1 className="text-3xl font-bold mb-2 mt-10">77,405 Tutors available</h1>

      <div className="flex flex-wrap gap-4">
        <AppSelect
          items={subjects}
          placeholder="Specialties"
          width="w-[180px]"
          onValueChange={handleSubjectChange}
        />

        <AppSelect items={skills} placeholder="Skills" width="w-[180px]" />

        <AppSelect
          items={categories}
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

      <TutorList />
    </div>
  );
};

export default Tutors;
