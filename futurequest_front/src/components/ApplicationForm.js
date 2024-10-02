import React, { useState } from "react";

const PersonalInfo = ({ formData, handleInputChange }) => (
  <section className="form-section personal-info">
    <h2 className="section-title">Personal Information</h2>
    <div className="form-group">
      <label htmlFor="fullName" className="form-label">
        Full Name
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="dateOfBirth" className="form-label">
        Date of Birth
      </label>
      <input
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="gender" className="form-label">
        Gender
      </label>
      <input
        type="text"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="nationality" className="form-label">
        Nationality
      </label>
      <input
        type="text"
        id="nationality"
        name="nationality"
        value={formData.nationality}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="passportNumber" className="form-label">
        Passport Number
      </label>
      <input
        type="text"
        id="passportNumber"
        name="passportNumber"
        value={formData.passportNumber}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="phoneNumber" className="form-label">
        Phone Number
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="permanentAddress" className="form-label">
        Permanent Address
      </label>
      <textarea
        id="permanentAddress"
        name="permanentAddress"
        value={formData.permanentAddress}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="currentAddress" className="form-label">
        Current Address (if different from permanent)
      </label>
      <textarea
        id="currentAddress"
        name="currentAddress"
        value={formData.currentAddress}
        onChange={handleInputChange}
        className="form-textarea"
      ></textarea>
    </div>
  </section>
);

const EducationInfo = ({ formData, handleInputChange }) => (
  <section className="form-section education-info">
    <h2 className="section-title">Educational Background</h2>
    <h3 className="subsection-title">High School Information</h3>
    <div className="form-group">
      <label htmlFor="highSchool.name" className="form-label">
        Name of School
      </label>
      <input
        type="text"
        id="highSchool.name"
        name="highSchool.name"
        value={formData.highSchool.name}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="highSchool.address" className="form-label">
        Address of School
      </label>
      <textarea
        id="highSchool.address"
        name="highSchool.address"
        value={formData.highSchool.address}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="highSchool.graduationDate" className="form-label">
        Date of Graduation
      </label>
      <input
        type="date"
        id="highSchool.graduationDate"
        name="highSchool.graduationDate"
        value={formData.highSchool.graduationDate}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="highSchool.gpa" className="form-label">
        GPA/Percentage
      </label>
      <input
        type="text"
        id="highSchool.gpa"
        name="highSchool.gpa"
        value={formData.highSchool.gpa}
        onChange={handleInputChange}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="highSchool.majorSubjects" className="form-label">
        Major Subjects Studied
      </label>
      <textarea
        id="highSchool.majorSubjects"
        name="highSchool.majorSubjects"
        value={formData.highSchool.majorSubjects}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="highSchool.honorsAwards" className="form-label">
        Honors/Awards
      </label>
      <textarea
        id="highSchool.honorsAwards"
        name="highSchool.honorsAwards"
        value={formData.highSchool.honorsAwards}
        onChange={handleInputChange}
        className="form-textarea"
      ></textarea>
    </div>

    <h3 className="subsection-title">Undergraduate Information</h3>
    <div className="form-group">
      <label htmlFor="undergraduate.name" className="form-label">
        Name of University
      </label>
      <input
        type="text"
        id="undergraduate.name"
        name="undergraduate.name"
        value={formData.undergraduate.name}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="undergraduate.address" className="form-label">
        Address of University
      </label>
      <textarea
        id="undergraduate.address"
        name="undergraduate.address"
        value={formData.undergraduate.address}
        onChange={handleInputChange}
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="undergraduate.graduationDate" className="form-label">
        Date of Graduation
      </label>
      <input
        type="date"
        id="undergraduate.graduationDate"
        name="undergraduate.graduationDate"
        value={formData.undergraduate.graduationDate}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="undergraduate.degree" className="form-label">
        Degree Awarded
      </label>
      <input
        type="text"
        id="undergraduate.degree"
        name="undergraduate.degree"
        value={formData.undergraduate.degree}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="undergraduate.gpa" className="form-label">
        GPA/Percentage
      </label>
      <input
        type="text"
        id="undergraduate.gpa"
        name="undergraduate.gpa"
        value={formData.undergraduate.gpa}
        onChange={handleInputChange}
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="undergraduate.majorSubjects" className="form-label">
        Major Subjects Studied
      </label>
      <textarea
        id="undergraduate.majorSubjects"
        name="undergraduate.majorSubjects"
        value={formData.undergraduate.majorSubjects}
        onChange={handleInputChange}
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="undergraduate.honorsAwards" className="form-label">
        Honors/Awards
      </label>
      <textarea
        id="undergraduate.honorsAwards"
        name="undergraduate.honorsAwards"
        value={formData.undergraduate.honorsAwards}
        onChange={handleInputChange}
        className="form-textarea"
      ></textarea>
    </div>
  </section>
);

const Recommenders = ({ recommenders, handleRecommenderChange }) => (
  <section className="form-section recommenders">
    <h2 className="section-title">Letters of Recommendation</h2>
    {recommenders.map((rec, index) => (
      <div key={index} className="recommender-group">
        <h3 className="subsection-title">Recommender {index + 1}</h3>
        <div className="form-group">
          <label
            htmlFor={`recommenders[${index}].fullName`}
            className="form-label"
          >
            Full Name
          </label>
          <input
            type="text"
            id={`recommenders[${index}].fullName`}
            name="fullName"
            value={rec.fullName}
            onChange={(e) => handleRecommenderChange(index, e)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor={`recommenders[${index}].title`}
            className="form-label"
          >
            Title/Position
          </label>
          <input
            type="text"
            id={`recommenders[${index}].title`}
            name="title"
            value={rec.title}
            onChange={(e) => handleRecommenderChange(index, e)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor={`recommenders[${index}].institution`}
            className="form-label"
          >
            Institution/Organization
          </label>
          <input
            type="text"
            id={`recommenders[${index}].institution`}
            name="institution"
            value={rec.institution}
            onChange={(e) => handleRecommenderChange(index, e)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor={`recommenders[${index}].email`}
            className="form-label"
          >
            Email Address
          </label>
          <input
            type="email"
            id={`recommenders[${index}].email`}
            name="email"
            value={rec.email}
            onChange={(e) => handleRecommenderChange(index, e)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label
            htmlFor={`recommenders[${index}].phone`}
            className="form-label"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id={`recommenders[${index}].phone`}
            name="phone"
            value={rec.phone}
            onChange={(e) => handleRecommenderChange(index, e)}
            required
            className="form-input"
          />
        </div>
      </div>
    ))}
  </section>
);

const PersonalStatements = ({ formData, handleInputChange }) => (
  <section className="form-section personal-statements">
    <h2 className="section-title">Personal Statements and Essays</h2>
    <div className="form-group">
      <label
        htmlFor="personalStatements.backgroundInfluences"
        className="form-label"
      >
        Background and Influences: Describe your family background and any
        significant influences that have shaped your life.
      </label>
      <textarea
        id="personalStatements.backgroundInfluences"
        name="personalStatements.backgroundInfluences"
        value={formData.personalStatements.backgroundInfluences}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label
        htmlFor="personalStatements.academicInterests"
        className="form-label"
      >
        Academic Interests: What subjects or fields of study are you most
        passionate about? Why? Describe any relevant academic projects or
        experiences.
      </label>
      <textarea
        id="personalStatements.academicInterests"
        name="personalStatements.academicInterests"
        value={formData.personalStatements.academicInterests}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="personalStatements.careerGoals" className="form-label">
        Career Goals: What are your short-term and long-term career goals? How
        will studying in the USA help you achieve these goals?
      </label>
      <textarea
        id="personalStatements.careerGoals"
        name="personalStatements.careerGoals"
        value={formData.personalStatements.careerGoals}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label
        htmlFor="personalStatements.extracurricularActivities"
        className="form-label"
      >
        Extracurricular Activities: List any extracurricular activities,
        hobbies, or interests you have been involved in. Describe any leadership
        roles or significant accomplishments in these activities.
      </label>
      <textarea
        id="personalStatements.extracurricularActivities"
        name="personalStatements.extracurricularActivities"
        value={formData.personalStatements.extracurricularActivities}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label
        htmlFor="personalStatements.personalAchievements"
        className="form-label"
      >
        Personal Achievements: Mention any awards, honors, or recognitions you
        have received.
      </label>
      <textarea
        id="personalStatements.personalAchievements"
        name="personalStatements.personalAchievements"
        value={formData.personalStatements.personalAchievements}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label
        htmlFor="personalStatements.challengesOvercome"
        className="form-label"
      >
        Challenges and Overcoming Them: Describe any significant challenges or
        obstacles you have faced and how you overcame them.
      </label>
      <textarea
        id="personalStatements.challengesOvercome"
        name="personalStatements.challengesOvercome"
        value={formData.personalStatements.challengesOvercome}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label
        htmlFor="personalStatements.uniqueQualities"
        className="form-label"
      >
        Unique Qualities: What unique qualities or perspectives do you bring to
        the university community?
      </label>
      <textarea
        id="personalStatements.uniqueQualities"
        name="personalStatements.uniqueQualities"
        value={formData.personalStatements.uniqueQualities}
        onChange={handleInputChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="personalStatements.additionalInfo" className="form-label">
        Additional Information: Any other information or experiences you feel
        are important to include in your personal statement.
      </label>
      <textarea
        id="personalStatements.additionalInfo"
        name="personalStatements.additionalInfo"
        value={formData.personalStatements.additionalInfo}
        onChange={handleInputChange}
        className="form-textarea"
      ></textarea>
    </div>
  </section>
);

const Documents = ({ formData, handleFileChange }) => (
  <section className="form-section documents">
    <h2 className="section-title">Documents Required</h2>
    <div className="form-group">
      <label htmlFor="documents.satScores" className="form-label">
        SAT/ACT Scores (PDF)
      </label>
      <input
        type="file"
        id="documents.satScores"
        name="satScores"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.greGmatScores" className="form-label">
        GRE/GMAT Scores (PDF)
      </label>
      <input
        type="file"
        id="documents.greGmatScores"
        name="greGmatScores"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.englishProficiency" className="form-label">
        TOEFL / IELTS Scores / Paper confirming English as the medium of
        instruction (PDF)
      </label>
      <input
        type="file"
        id="documents.englishProficiency"
        name="englishProficiency"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.cv" className="form-label">
        Curriculum Vitae (CV) (PDF)
      </label>
      <input
        type="file"
        id="documents.cv"
        name="cv"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.certificatesAwards" className="form-label">
        Certificates and Awards (PDF)
      </label>
      <input
        type="file"
        id="documents.certificatesAwards"
        name="certificatesAwards"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.passportScan" className="form-label">
        Passport or ID scan (PDF)
      </label>
      <input
        type="file"
        id="documents.passportScan"
        name="passportScan"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.highSchoolTranscript" className="form-label">
        High School Transcript (PDF)
      </label>
      <input
        type="file"
        id="documents.highSchoolTranscript"
        name="highSchoolTranscript"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.highSchoolDiploma" className="form-label">
        High School leaving certificate or Diploma (PDF)
      </label>
      <input
        type="file"
        id="documents.highSchoolDiploma"
        name="highSchoolDiploma"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.nationalExamResult" className="form-label">
        National Exam Result (PDF)
      </label>
      <input
        type="file"
        id="documents.nationalExamResult"
        name="nationalExamResult"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.universityTranscripts" className="form-label">
        University Transcripts (PDF)
      </label>
      <input
        type="file"
        id="documents.universityTranscripts"
        name="universityTranscripts"
        onChange={handleFileChange}
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.universityDegree" className="form-label">
        University Degree (PDF)
      </label>
      <input
        type="file"
        id="documents.universityDegree"
        name="universityDegree"
        onChange={handleFileChange}
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.workExperience" className="form-label">
        Work Experience (PDF)
      </label>
      <input
        type="file"
        id="documents.workExperience"
        name="workExperience"
        onChange={handleFileChange}
        className="form-file-input"
        accept=".pdf"
      />
    </div>
    <div className="form-group">
      <label htmlFor="documents.photo" className="form-label">
        Passport Size Photo (JPG)
      </label>
      <input
        type="file"
        id="documents.photo"
        name="photo"
        onChange={handleFileChange}
        required
        className="form-file-input"
        accept=".jpg,.jpeg"
      />
    </div>
  </section>
);

function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    passportNumber: "",
    phoneNumber: "",
    email: "",
    permanentAddress: "",
    currentAddress: "",
    highSchool: {
      name: "",
      address: "",
      graduationDate: "",
      gpa: "",
      majorSubjects: "",
      honorsAwards: "",
    },
    undergraduate: {
      name: "",
      address: "",
      graduationDate: "",
      degree: "",
      gpa: "",
      majorSubjects: "",
      honorsAwards: "",
    },
    recommenders: [
      { fullName: "", title: "", institution: "", email: "", phone: "" },
      { fullName: "", title: "", institution: "", email: "", phone: "" },
      { fullName: "", title: "", institution: "", email: "", phone: "" },
    ],
    personalStatements: {
      backgroundInfluences: "",
      academicInterests: "",
      careerGoals: "",
      extracurricularActivities: "",
      personalAchievements: "",
      challengesOvercome: "",
      uniqueQualities: "",
      additionalInfo: "",
    },
    documents: {
      satScores: null,
      greGmatScores: null,
      englishProficiency: null,
      cv: null,
      certificatesAwards: null,
      passportScan: null,
      highSchoolTranscript: null,
      highSchoolDiploma: null,
      nationalExamResult: null,
      universityTranscripts: null,
      universityDegree: null,
      workExperience: null,
      photo: null,
    },
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRecommenderChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newRecommenders = [...prevData.recommenders];
      newRecommenders[index] = { ...newRecommenders[index], [name]: value };
      return { ...prevData, recommenders: newRecommenders };
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      documents: { ...prevData.documents, [name]: files[0] },
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    // Add validation logic here
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    // Add more validation as needed
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Submit form data to server
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="application-form">
      <h1 className="form-title">
        Prospective Student University Application Form
      </h1>
      <PersonalInfo formData={formData} handleInputChange={handleInputChange} />
      <EducationInfo
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <Recommenders
        recommenders={formData.recommenders}
        handleRecommenderChange={handleRecommenderChange}
      />
      <PersonalStatements
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <Documents formData={formData} handleFileChange={handleFileChange} />
      {Object.keys(errors).length > 0 && (
        <div className="error-summary">
          {Object.values(errors).map((error, index) => (
            <p key={index} className="error-message">
              {error}
            </p>
          ))}
        </div>
      )}
      <button type="submit" className="submit-button">
        Submit Application
      </button>
    </form>
  );
}

export default ApplicationForm;
