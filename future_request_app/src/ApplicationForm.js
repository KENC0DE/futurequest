import React, { useState } from 'react';
import './ApplicationForm.css'; // Make sure to create this CSS file

function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    passportNumber: '',
    phoneNumber: '',
    emailAddress: '',
    permanentAddress: '',
    currentAddress: '',
    highSchool: {
      name: '',
      address: '',
      graduationDate: '',
      gpa: '',
      majorSubjects: '',
      honorsAwards: '',
    },
    undergraduate: {
      name: '',
      address: '',
      graduationDate: '',
      degree: '',
      gpa: '',
      majorSubjects: '',
      honorsAwards: '',
    },
    recommenders: [
      { fullName: '', title: '', institution: '', email: '', phone: '' },
      { fullName: '', title: '', institution: '', email: '', phone: '' },
      { fullName: '', title: '', institution: '', email: '', phone: '' },
    ],
    personalStatements: {
      backgroundInfluences: '',
      academicInterests: '',
      careerGoals: '',
      extracurricularActivities: '',
      personalAchievements: '',
      challenges: '',
      uniqueQualities: '',
      additionalInfo: '',
    },
    documents: {
      satScores: null,
      greScores: null,
      toeflIeltsScores: null,
      cv: null,
      certificatesAwards: null,
      passport: null,
      highSchoolTranscript: null,
      highSchoolLeavingCertificate: null,
      nationalExamResult: null,
      universityTranscripts: null,
      universityDegree: null,
      workExperience: null,
      passportPhoto: null,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <h1>University Application Form</h1>
      <section className="form-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more fields similarly */}
      </section>

      <section className="form-section">
        <h2>Educational Background</h2>
        <h3>High School Information</h3>
        <div className="form-group">
          <label htmlFor="highSchool.name">Name of School</label>
          <input
            type="text"
            id="highSchool.name"
            name="highSchool.name"
            value={formData.highSchool.name}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more fields similarly */}
      </section>

      <section className="form-section">
        <h2>Letters of Recommendation</h2>
        {formData.recommenders.map((rec, index) => (
          <div key={index} className="form-group">
            <label htmlFor={`recommenders[${index}].fullName`}>Full Name</label>
            <input
              type="text"
              id={`recommenders[${index}].fullName`}
              name={`recommenders[${index}].fullName`}
              value={rec.fullName}
              onChange={handleInputChange}
              required
            />
            {/* Add more fields similarly */}
          </div>
        ))}
      </section>

      <section className="form-section">
        <h2>Personal Statements and Essays</h2>
        <div className="form-group">
          <label htmlFor="personalStatements.backgroundInfluences">
            Background and Influences
          </label>
          <textarea
            id="personalStatements.backgroundInfluences"
            name="personalStatements.backgroundInfluences"
            value={formData.personalStatements.backgroundInfluences}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more fields similarly */}
      </section>

      <section className="form-section">
        <h2>Documents Required</h2>
        <div className="form-group">
          <label htmlFor="documents.satScores">SAT/ACT Scores</label>
          <input
            type="file"
            id="documents.satScores"
            name="documents.satScores"
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more fields similarly */}
      </section>

      <button type="submit" className="submit-button">Submit Application</button>
    </form>
  );
}

export default ApplicationForm;
