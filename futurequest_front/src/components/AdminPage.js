import React, { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile";
import {
  listUsers,
  getUserApplications,
  getApplicationDetails,
  getOfferDetails,
} from "../api";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [offerTitles, setOfferTitles] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await listUsers();
        console.log("Users:", response.data);
        setUsers(response.data);

        const savedUser = localStorage.getItem("selectedUser");
        const savedApplication = localStorage.getItem("selectedApplication");

        if (savedUser) {
          const user = JSON.parse(savedUser);
          setSelectedUser(user);

          const userApplications = await getUserApplications(user.id);
          setApplications(userApplications.data);

          if (savedApplication) {
            const application = JSON.parse(savedApplication);
            setSelectedApplication(application);
          }
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = async (user) => {
    setLoading(true);
    try {
      const response = await getUserApplications(user.id);
      console.log("User applications:", response.data);
      setApplications(response.data);
      setSelectedUser(user);
      setSelectedApplication(null);
      localStorage.setItem("selectedUser", JSON.stringify(user));
      localStorage.removeItem("selectedApplication");

      /* titles */
      const titles = {};
      for (const application of response.data) {
        const offerResponse = await getOfferDetails(application.offer);
        titles[application.id] = offerResponse.data.title;
      }
      setOfferTitles(titles);
    } catch (error) {
      console.error("Error fetching user applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApplicationClick = async (applicationId) => {
    setLoading(true);
    try {
      const response = await getApplicationDetails(applicationId);
      console.log("Application details:", response.data);
      setSelectedApplication(response.data);
      localStorage.setItem(
        "selectedApplication",
        JSON.stringify(response.data)
      );
    } catch (error) {
      console.error("Error fetching application details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center p-4 bg-gray-200 dark:bg-slate-900">
      <div className="w-full lg:w-1/4 mb-4 lg:mb-0 h-screen">
        <div
          className="flex flex-col items-center mx-auto p-5 text-center
         bg-white dark:bg-slate-800 dark:text-white rounded-lg 
         shadow-md max-w-xs min-w-[250px] mb-2"
        >
          <h1 className="text-xl font-semibold mb-4">Users List</h1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className="w-full">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-slate-700 rounded"
                  onClick={() => handleUserClick(user)}
                >
                  {user.username}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="flex flex-col items-center mx-auto p-5 text-center
         bg-white dark:bg-slate-800 dark:text-white rounded-lg
          shadow-md max-w-xs min-w-[250px]"
        >
          <h2 className="text-xl font-semibold mb-4">
            {selectedUser
              ? `${selectedUser.username}'s Applications`
              : "Applications"}
          </h2>
          <ul className="w-full">
            {applications.length > 0 ? (
              applications.map((application) => (
                <li
                  key={application.id}
                  className="cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-slate-700 rounded"
                  onClick={() => handleApplicationClick(application.id)}
                >
                  {offerTitles[application.id] || "Loading..."}
                </li>
              ))
            ) : (
              <li className="text-center dark:text-white p-2">
                No applications found
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex-grow max-w-4xl p-4 lg:p-10 bg-white dark:bg-slate-800 shadow-lg border">
        {loading ? (
          <div>Loading...</div>
        ) : selectedUser && applications.length > 0 ? (
          <div>
            {selectedApplication ? (
              <StudentProfile
                key={selectedApplication.id}
                studentData={selectedApplication}
                onEdit={() => console.log("Edit button clicked")}
                showEditButton={true}
              />
            ) : (
              <div className="text-center dark:text-white">
                Select an application to view
              </div>
            )}
          </div>
        ) : (
          <div className="text-center dark:text-white">
            Select a user to view their profile
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
