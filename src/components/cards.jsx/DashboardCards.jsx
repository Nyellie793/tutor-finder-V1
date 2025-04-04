

const DashboardCards = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-start max-w-6xl mx-auto p-4">
      {/* Card 1: Signup or Login */}
      <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col items-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-center">Signup or Login</h3>

        <p className="text-gray-600 text-sm text-center">
          Signup/login to your account to browse through available gigs and
          check for your own personal gig.
        </p>
      </div>

      {/* Card 2: Manage Gigs */}
      <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col items-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-center">Manage Gigs</h3>

        <p className="text-gray-600 text-sm text-center">
          Once logged on you can create, edit, complete and delete gigs per
          preferences.
        </p>
      </div>

      {/* Card 3: Manage Profile */}
      <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col items-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <circle cx="12" cy="13" r="3"></circle>
                <line x1="12" y1="10" x2="12" y2="16"></line>
                <line x1="9" y1="13" x2="15" y2="13"></line>
              </svg>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 text-center">Manage Profile</h3>

        <p className="text-gray-600 text-sm text-center">
          You can edit your profile as you wish and whenever.
        </p>
      </div>
    </div>
  );
};

export default DashboardCards;
