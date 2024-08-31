import React from 'react';
import StudentProfile from './studentProfile';
import '../App.css';

const user = {
  name: 'Jane Doe',
  avatar: 'https://via.placeholder.com/150',
};

const studentData = {
  profilePicture: 'https://example.com/path/to/profile-picture.jpg', // Replace with actual URL
  fullName: 'John Doe',
  dateOfBirth: '1995-05-15',
  gender: 'Male',
  nationality: 'USA',
  passportNumber: 'ABC123456',
  phoneNumber: '+1 234 567 8901',
  email: 'john.doe@example.com',
  address: '123 Main St, Anytown, USA',
  universityName: 'Example University',
  degreeAwarded: 'Bachelor of Science',
  universityGPA: '3.8',
  universityMajors: 'Computer Science',
};

const handleEdit = () => {
  console.log('Edit button clicked');
  // Add your edit logic here
};

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="user-profile">
        <img
          className="profile-avatar"
          src={user.avatar}
          alt={`${user.name}'s Avatar`}
        />
        <h1 className="profile-name">{user.name}</h1>
      </div>
      <div className="user-data">
        <StudentProfile studentData={studentData} showEditButton={true} />
      </div>
    </div>
  );
};

export default Profile;
