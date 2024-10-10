import React, { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import { listApplications } from "../api";

const Profile = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await listApplications();
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (applications.length === 0) {
    return <div>No applications found.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 bg-gray-200">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
        <div className="flex flex-col items-center mx-auto p-5 text-center bg-white rounded-lg shadow-md max-w-xs min-w-[250px]">
          <img
            className="w-36 h-36 rounded-full mb-4"
            src={
              `${process.env.REACT_APP_API_URL}${applications[0].passport_size_photo}` ||
              "https://via.placeholder.com/150"
            }
            alt={`${applications[0].full_name}'s Avatar`}
          />
          <h1 className="text-xl font-semibold">{applications[0].full_name}</h1>
        </div>
      </div>
      <div className="flex-grow max-w-4xl p-4 lg:p-10 bg-white shadow-lg border">
        <StudentProfile
          studentData={applications[0]}
          onEdit={() => console.log("Edit button clicked")}
          showEditButton={true}
        />
      </div>
    </div>
  );
};

export default Profile;
