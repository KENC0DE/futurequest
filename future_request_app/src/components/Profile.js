import React from 'react';
import '../App.css';

const user = {
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/150"
  };

const Profile = () => {
  return (
    <div className="profile-container">
      <img className="profile-avatar" src={user.avatar} alt={`${user.name}'s Avatar`} />
      <h1 className="profile-name">{user.name}</h1>
    </div>
  );
};

export default Profile;
