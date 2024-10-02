import React from "react";
import StudentProfile from "./StudentProfile";

const user = {
  name: "Jane Doe",
  avatar: "https://via.placeholder.com/150",
};

const studentData = {
  profilePicture: "https://example.com/path/to/profile-picture.jpg", // Replace with actual URL
  fullName: "John Doe",
  dateOfBirth: "1995-05-15",
  gender: "Male",
  nationality: "USA",
  passportNumber: "ABC123456",
  phoneNumber: "+1 234 567 8901",
  email: "john.doe@example.com",
  address: "123 Main St, Anytown, USA",
  universityName: "Example University",
  degreeAwarded: "Bachelor of Science",
  universityGPA: "3.8",
  universityMajors: "Computer Science",
};

const handleEdit = () => {
  console.log("Edit button clicked");
};

const Profile = () => {
  return (
    <div className="flex justify-center p-4 bg-gray-200">
      <div className="w-1/4 max-w-xs min-w-[250px] m-auto p-5 text-center bg-white rounded-lg shadow-md">
        <img
          className="w-36 h-36 rounded-full mx-auto mb-4"
          src={user.avatar}
          alt={`${user.name}'s Avatar`}
        />
        <h1 className="text-xl font-semibold">{user.name}</h1>
      </div>
      <div className="flex-grow max-w-4xl p-10 bg-white shadow-lg border">
        <StudentProfile
          studentData={studentData}
          onEdit={handleEdit}
          showEditButton={true}
        />
      </div>
    </div>
  );
};

export default Profile;
