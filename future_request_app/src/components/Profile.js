import React from 'react';
import ApplicationForm from './ApplicationForm';
import '../App.css';

const user = {
  name: 'Jane Doe',
  avatar: 'https://via.placeholder.com/150',
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
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Profile;
