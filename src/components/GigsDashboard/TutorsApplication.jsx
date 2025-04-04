import ApplicationCards from "../cards.jsx/ApplicationCards";
import { mockApplications } from "@/assets/data";
const TutorsApplication = ({application}) => {
  const userDataString = localStorage.getItem("user");
  const userData = JSON.parse(userDataString);

  console.log("user: ", userData);
  console.log("userData.name: ", userData?.name);


  const handleViewProfile = (id) => {
    console.log(`Viewing profile application ${id}`);
    //navigation to profile logic
  };

  return (
    <div className=" bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 p-4">
          Hello, {userData?.name}!
        </h2>
        
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-teal-400 pb-2">
          Tutor Applications
        </h1>
        {mockApplications.map((tutor) => (
          <ApplicationCards
            key={tutor.id}
            tutor={tutor}
            application={application}
            onViewProfile={handleViewProfile}
            status={application?.status}
          />
        ))}
      </div>
    </div>
  );
}

export default TutorsApplication