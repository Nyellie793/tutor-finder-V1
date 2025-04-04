
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Edit, Plus, MoreHorizontal } from "lucide-react";

const TutorSettingsPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">
            Settings
          </h1>
          <div className="flex space-x-4">
            <button className="text-gray-600 bg-gray-100 hover:bg-gray-200 p-2 rounded-lg flex items-center">
              <Edit size={20} className="mr-2" /> Edit
            </button>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center">
              <Plus size={20} className="mr-2" /> Create
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex px-6 pt-4 space-x-6 border-b border-gray-200">
          <button className="text-teal-500 border-b-2 border-teal-500 pb-3">
            Overview
          </button>
          <button className="text-gray-600 pb-3">Users</button>
          <button className="text-gray-600 pb-3">Settings</button>
        </div>

        <div className="flex">
          {/* Left Column */}
          <div className="w-2/3 p-6 border-r border-gray-200">
            {/* Two-Factor Authentication */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Two-factor Authentication
              </h2>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-gray-600 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Commodo pellentesque massa tellus ac augue.
                  </p>
                </div>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
                  Enable
                </button>
              </div>
            </section>

            {/* Authentication Methods */}
            <section className="mb-8">
              {[
                {
                  title: "Authentication app",
                  description: "Google auth app",
                },
                {
                  title: "Another e-mail",
                  description: "E-mail to send verification link",
                },
                {
                  title: "SMS Recovery",
                  description: "Your phone number or something",
                },
              ].map((method, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <div>
                    <h3 className="text-gray-800 font-medium">
                      {method.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {method.description}
                    </p>
                  </div>
                  <button className="text-teal-500 hover:bg-blue-50 px-3 py-1 rounded-lg">
                    Setup
                  </button>
                </div>
              ))}
            </section>

            {/* Password Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Password
              </h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-gray-600 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="text-gray-500 text-sm">
                  Commodo pellentesque massa tellus ac augue.
                </p>
              </div>

              <div className="grid gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Current password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    New password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="w-1/3 p-6">
            {/* Devices Section */}
            <div className="bg-pink-50 p-4 rounded-lg mb-6 text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-lg mx-auto mb-4"></div>
              <h3 className="text-gray-800 font-semibold mb-2">Devices</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full">
                Sign out from all devices
              </button>
            </div>

            {/* Device List */}
            {[
              {
                type: "iPhone 11",
                location: "London, UK",
                time: "Oct 23 at 1:15 AM",
              },
              {
                type: "Macbook Pro",
                location: "London, UK",
                time: "Oct 23 at 1:15 AM",
              },
              {
                type: "iPhone SE",
                location: "London, UK",
                time: "Oct 23 at 1:15 AM",
              },
            ].map((device, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
              >
                <div>
                  <h3 className="text-gray-800 font-medium">{device.type}</h3>
                  <p className="text-gray-500 text-sm">
                    {device.location} • {device.time}
                  </p>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorSettingsPage;
