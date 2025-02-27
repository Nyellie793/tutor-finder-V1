import { Heart } from "lucide-react";
import AppBtn from "../AppBtn";


//  Map category IDs to names
const categoryMap = {
  1: "Academics",
  2: "Languages",
  3: "Sciences",
  4: "Arts",
  5: "IT",
  6: "Professional",
  7: "Fitness and Health",
};

const GigCard = ({ gig }) => {
  const { title, description, budget, location, status, category_id } = gig;

  const category = categoryMap[category_id] || "Other";

  const handleClick = () => {
    console.log("Apply for gig:", gig.id);
  };

  // Map category to icon/color
  const getCategoryDetails = (categoryName) => {
    const categories = {
      academics: { bgColor: "bg-blue-100", textColor: "text-blue-800" },
      "musical instrument": {
        bgColor: "bg-purple-100",
        textColor: "text-purple-800",
      },
      languages: { bgColor: "bg-green-100", textColor: "text-green-800" },
      sciences: { bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
      arts: { bgColor: "bg-pink-100", textColor: "text-pink-800" },
      it: { bgColor: "bg-gray-100", textColor: "text-gray-800" },
      professional: { bgColor: "bg-indigo-100", textColor: "text-indigo-800" },
      "fitness and health": {
        bgColor: "bg-teal-100",
        textColor: "text-teal-800",
      },
      other: { bgColor: "bg-gray-100", textColor: "text-gray-800" },
    };

    return (
      categories[categoryName?.toLowerCase()] || {
        bgColor: "bg-gray-100",
        textColor: "text-gray-800",
      }
    );
  };

  const categoryDetails = getCategoryDetails(category);

  // Status styling
  const getStatusStyle = (statusText) => {
    const statusMap = {
      open: { bgColor: "bg-green-100", textColor: "text-green-800" },
      "in progress": { bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
      completed: { bgColor: "bg-blue-100", textColor: "text-blue-800" },
      cancelled: { bgColor: "bg-red-100", textColor: "text-red-800" },
    };

    return (
      statusMap[statusText?.toLowerCase()] || {
        bgColor: "bg-gray-100",
        textColor: "text-gray-800",
      }
    );
  };

  const statusStyle = getStatusStyle(status);

  return (
    <div className="flex flex-col md:flex-row border-2 border-gray-200 rounded-lg p-4 shadow-sm w-full hover:shadow-md transition-shadow">
      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <span
                className={`inline-block ${statusStyle.bgColor} ${statusStyle.textColor} px-2 py-1 rounded-md text-sm`}
              >
                {status}
              </span>
            </div>

            <div className="flex mt-1 gap-2">
              <span
                className={`inline-block ${categoryDetails.bgColor} ${categoryDetails.textColor} px-2 py-1 rounded-md text-sm`}
              >
                {category}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="font-bold text-lg">
              ${budget.toFixed(2)}
              <span className="text-gray-500 text-sm"> fixed</span>
            </div>
            <div className="mt-1 text-gray-500 text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </div>
          </div>
        </div>

        <div className="mt-2">
          <p className="text-gray-600">
            {description &&
              (description.length > 150
                ? `${description.substring(0, 150)}...`
                : description)}
          </p>
        </div>

        <div className="mt-4 flex justify-between">
          <AppBtn onClick={handleClick}>Apply</AppBtn>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <Heart className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GigCard

// Category section component
// const CategorySection = ({ title, gigs }) => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   if (gigs.length === 0) return null;

//   return (
//     <div className="mb-8">
//       <div
//         className="flex justify-between items-center mb-3 cursor-pointer"
//         onClick={() => setIsExpanded(!isExpanded)}
//       >
//         <h3 className="text-xl font-semibold">
//           {title} ({gigs.length})
//         </h3>
//         <span className="text-blue-500">{isExpanded ? "Hide" : "Show"}</span>
//       </div>

//       {isExpanded && (
//         <div className="space-y-4">
//           {gigs.map((gig) => (
//             <GigCard key={gig.id} gig={gig} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// Main component that renders the list of gigs
// const GigsList = () => {
//   const [viewMode, setViewMode] = useState("all"); // 'all' or 'byCategory'
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Get all available gigs (status === 'open')
//   const availableGigs = mockGigs.filter((gig) => gig.status === "open");

//   // Group gigs by category
//   const gigsByCategory = {};
//   availableGigs.forEach((gig) => {
//     const categoryId = gig.category_id;
//     if (!gigsByCategory[categoryId]) {
//       gigsByCategory[categoryId] = [];
//     }
//     gigsByCategory[categoryId].push(gig);
//   });

//   // Get categories with at least one available gig
//   const categoriesWithGigs = Object.keys(gigsByCategory).map((id) => ({
//     id: parseInt(id),
//     name: categoryMap[id],
//     count: gigsByCategory[id].length,
//   }));

//   // Filter gigs based on the selected view and category
//   const getDisplayedGigs = () => {
//     if (viewMode === "all") {
//       return availableGigs;
//     } else if (selectedCategory) {
//       return gigsByCategory[selectedCategory] || [];
//     }
//     return [];
//   };

//   const displayedGigs = getDisplayedGigs();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-6">
//         <h1 className="text-3xl font-bold mb-4">Tutor Finder</h1>
//         <div className="flex space-x-4 mb-4">
//           <button
//             className={`px-4 py-2 rounded-md ${
//               viewMode === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => {
//               setViewMode("all");
//               setSelectedCategory(null);
//             }}
//           >
//             All Available Gigs
//           </button>
//           <button
//             className={`px-4 py-2 rounded-md ${
//               viewMode === "byCategory"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200"
//             }`}
//             onClick={() => setViewMode("byCategory")}
//           >
//             Browse by Category
//           </button>
//         </div>
//       </div>

//       {viewMode === "all" ? (
//         <>
//           <h2 className="text-2xl font-bold mb-4">
//             All Available Gigs ({availableGigs.length})
//           </h2>
//           <div className="space-y-4">
//             {availableGigs.map((gig) => (
//               <GigCard key={gig.id} gig={gig} />
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Gigs by Category</h2>

//           {/* Category selector tabs */}
//           <div className="flex flex-wrap gap-2 mb-6">
//             {categoriesWithGigs.map((category) => (
//               <button
//                 key={category.id}
//                 className={`px-3 py-1 rounded-md ${
//                   selectedCategory === category.id
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setSelectedCategory(category.id)}
//               >
//                 {category.name} ({category.count})
//               </button>
//             ))}
//           </div>

//           {/* Show only the selected category */}
//           {selectedCategory && (
//             <CategorySection
//               title={categoryMap[selectedCategory]}
//               gigs={gigsByCategory[selectedCategory] || []}
//             />
//           )}

//           {/* Show prompt if no category is selected */}
//           {!selectedCategory && (
//             <div className="text-center p-8 bg-gray-50 rounded-lg">
//               <p className="text-gray-600">
//                 Please select a category to view available gigs
//               </p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default GigsList;
