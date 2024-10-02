import React from "react";

const StudentProfile = ({ studentData, onEdit, showEditButton }) => {
  return (
    <div className="student-profile-card">
      <div className="student-profile-header">
        <img
          src={studentData.profilePicture || "https://via.placeholder.com/150"}
          alt={`${studentData.fullName}'s profile`}
          className="student-profile-picture"
        />
        <h1 className="student-profile-title">Student Profile</h1>
        {showEditButton && (
          <button className="student-profile-edit-button" onClick={onEdit}>
            Edit
          </button>
        )}
      </div>
      <div className="student-profile-info-grid">
        {Object.entries(studentData).map(([key, value]) => {
          if (key === "profilePicture") return null;

          return (
            <div className="student-profile-info-item" key={key}>
              <div className="student-profile-label">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </div>
              <div className="student-profile-value">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProfile;
