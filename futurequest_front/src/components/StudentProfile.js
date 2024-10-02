import React from "react";

const StudentProfile = ({ studentData, onEdit, showEditButton }) => {
  return (
    <div className="bg-white p-6 max-w-4xl mx-auto rounded-lg shadow-xl">
      <div className="flex flex-col items-center mb-6 text-center relative sm:flex-row sm:text-left sm:items-start">
        <img
          src={studentData.profilePicture || "https://via.placeholder.com/150"}
          alt={`${studentData.fullName}'s profile`}
          className="w-36 h-36 rounded-full border-4 border-gray-200 mb-4 sm:mr-6"
        />
        <h1 className="text-2xl font-bold">{studentData.fullName}'s Profile</h1>
        {showEditButton && (
          <button
            className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:relative sm:top-0 sm:right-0"
            onClick={onEdit}
          >
            Edit
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.entries(studentData).map(([key, value]) => {
          if (key === "profilePicture") return null;
          return (
            <div key={key} className="bg-gray-100 p-4 rounded-lg">
              <div className="font-bold text-gray-700 mb-1">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </div>
              <div className="text-gray-800">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProfile;
