import React, { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import { listApplications, getOfferDetails } from "../api";

const Profile = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [offerTitles, setOfferTitles] = useState({});

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await listApplications();
        const applicationsData = response.data;
        setApplications(applicationsData);

        const titles = {};
        for (const application of applicationsData) {
          const offerResponse = await getOfferDetails(application.offer);
          titles[application.id] = offerResponse.data.title;
        }
        setOfferTitles(titles);

        if (applicationsData.length > 0) {
          setSelectedApplication(applicationsData[0]);
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleApplicationChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    const application = applications.find((app) => app.id === selectedId);
    setSelectedApplication(application);
  };

  if (loading) {
    return (
      <div className="dark:bg-slate-800 dark:text-white text-center">
        Loading...
      </div>
    );
  }

  if (applications.length === 0) {
    return <div className="dark:text-white">No applications found.</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 bg-gray-200 dark:bg-slate-900">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
        <div className="flex flex-col items-center mx-auto p-5 text-center bg-white dark:bg-slate-800 dark:text-white rounded-lg shadow-md max-w-xs min-w-[250px]">
          <img
            className="w-36 h-36 rounded-full mb-4 dark:border-4 dark:border-slate-100 border-4 border-gray-200"
            src={
              selectedApplication?.documents?.passport_size_photo
                ? `${selectedApplication.documents.passport_size_photo}`
                : "https://via.placeholder.com/150"
            }
            alt={
              selectedApplication?.personal_info?.full_name
                ? `${selectedApplication.personal_info.full_name}'s Avatar`
                : "Avatar"
            }
          />
          <h1 className="text-xl font-semibold">
            {selectedApplication?.personal_info?.full_name ||
              "No name available"}
          </h1>
          <select
            className="mt-4 p-2 bg-gray-200 dark:bg-slate-700 dark:text-white rounded"
            onChange={handleApplicationChange}
            value={selectedApplication?.id || ""}
          >
            {applications.map((application) => (
              <option key={application.id} value={application.id}>
                {offerTitles[application.id] || "Loading..."}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex-grow max-w-4xl p-4 lg:p-10 bg-white dark:bg-slate-800 shadow-lg border">
        {selectedApplication ? (
          <StudentProfile
            studentData={selectedApplication}
            onEdit={() => console.log("Edit button clicked")}
            showEditButton={true}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
