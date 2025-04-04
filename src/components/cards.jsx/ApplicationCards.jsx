// import { mockApplications } from "@/assets/data"
import { Badge } from "@/components/ui/badge";

const ApplicationCards = ({ tutor,  onViewProfile, application = {}, status}) => {
  const getStatusBadgeStyle = () => {
    switch (status || application?.status) {
      case "pending":
        return "bg-green-100 text-green-800 border-green-300";
      case "appected":
        return "bg-blue-100 text-blue-800 border-blue-300";
  
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border-l-4 border-teal-500">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800">{tutor.name}</h2>
        <p className="text-sm text-gray-600 mb-1">{tutor.email}</p>
        <div className="flex items-center mb-1">
          <svg className="w-4 h-4 text-teal-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span className="text-gray-700">{tutor.location}</span>
        </div>
        <div className="flex items-center mb-3">
          <svg className="w-4 h-4 text-green-600 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
          <span className="text-gray-700">{tutor.whatsapp}</span>
        </div>
        
        <div className="bg-purple-50 rounded-md p-3 mb-4 border-l-2 border-purple-300">
          <h3 className="font-semibold text-purple-800">Gig Application</h3>
          <p className="text-gray-800">{tutor.gigName}</p>
        </div>
        
        <div className="flex justify-between mt-2">
          <button 
            className="bg-teal-50 hover:bg-teal-100 text-teal-700 font-medium py-2 px-4 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            onClick={() => onViewProfile(tutor.id)}
          >
            View Profile
          </button>
          <div className="space-x-2">
            <Badge 
            variant="outline"
            className={getStatusBadgeStyle(application.status)}
            >
              { status || application?.status}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ApplicationCards