import React, { useState } from "react";

// Reusable Section component
const Section = ({ title, children }) => (
  <section className="mb-8 bg-white p-5 rounded-lg shadow">
    <h2 className="text-xl font-semibold text-blue-600 border-b-2 border-blue-400 pb-2 mb-5">
      {title}
    </h2>
    {children}
  </section>
);

// Reusable FormGroup component for labels and inputs
const FormGroup = ({
  label,
  id,
  type,
  name,
  value,
  onChange,
  required,
  accept,
  children,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-2 font-bold text-gray-700">
      {label}
    </label>
    {!children ? (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-2.5 border border-gray-300 rounded-md text-base focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        accept={accept}
      />
    ) : (
      children
    )}
  </div>
);

// Main ApplicationForm component
const ApplicationForm = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      documents: { ...prevData.documents, [name]: files[0] },
    }));
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-4xl mx-auto p-5 bg-gray-100 rounded-lg shadow"
    >
      <h1 className="text-center text-2xl text-gray-800 mb-5">
        Prospective Student University Application Form
      </h1>

      {/* Personal Information Section */}
      <Section title="Personal Information">
        <FormGroup
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Date of Birth"
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Gender"
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Nationality"
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Passport Number"
          type="text"
          id="passportNumber"
          name="passportNumber"
          value={formData.passportNumber}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Phone Number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Email Address"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Permanent Address"
          id="permanentAddress"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleInputChange}
          required
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="permanentAddress"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup
          label="Current Address (if different from permanent)"
          id="currentAddress"
          name="currentAddress"
          value={formData.currentAddress}
          onChange={handleInputChange}
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="currentAddress"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleInputChange}
          />
        </FormGroup>
      </Section>

      {/* Educational Background Section */}
      <Section title="Educational Background">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          High School Information
        </h3>
        <FormGroup
          label="Name of School"
          type="text"
          id="highSchool.name"
          name="highSchool.name"
          value={formData.highSchool.name}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Address of School"
          id="highSchool.address"
          name="highSchool.address"
          value={formData.highSchool.address}
          onChange={handleInputChange}
          required
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="highSchool.address"
            name="highSchool.address"
            value={formData.highSchool.address}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup
          label="Date of Graduation"
          type="date"
          id="highSchool.graduationDate"
          name="highSchool.graduationDate"
          value={formData.highSchool.graduationDate}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="GPA/Percentage"
          type="text"
          id="highSchool.gpa"
          name="highSchool.gpa"
          value={formData.highSchool.gpa}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Major Subjects Studied"
          id="highSchool.majorSubjects"
          name="highSchool.majorSubjects"
          value={formData.highSchool.majorSubjects}
          onChange={handleInputChange}
          required
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="highSchool.majorSubjects"
            name="highSchool.majorSubjects"
            value={formData.highSchool.majorSubjects}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup
          label="Honors/Awards"
          id="highSchool.honorsAwards"
          name="highSchool.honorsAwards"
          value={formData.highSchool.honorsAwards}
          onChange={handleInputChange}
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="highSchool.honorsAwards"
            name="highSchool.honorsAwards"
            value={formData.highSchool.honorsAwards}
            onChange={handleInputChange}
          />
        </FormGroup>

        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Undergraduate Information
        </h3>
        <FormGroup
          label="Name of University"
          type="text"
          id="undergraduate.name"
          name="undergraduate.name"
          value={formData.undergraduate.name}
          onChange={handleInputChange}
        />
        <FormGroup
          label="Address of University"
          id="undergraduate.address"
          name="undergraduate.address"
          value={formData.undergraduate.address}
          onChange={handleInputChange}
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500
            focus:ring-opacity-50"
            id="undergraduate.address"
            name="undergraduate.address"
            value={formData.undergraduate.address}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup
          label="Date of Graduation"
          type="date"
          id="undergraduate.graduationDate"
          name="undergraduate.graduationDate"
          value={formData.undergraduate.graduationDate}
          onChange={handleInputChange}
        />
        <FormGroup
          label="Degree Awarded"
          type="text"
          id="undergraduate.degree"
          name="undergraduate.degree"
          value={formData.undergraduate.degree}
          onChange={handleInputChange}
        />
        <FormGroup
          label="GPA/Percentage"
          type="text"
          id="undergraduate.gpa"
          name="undergraduate.gpa"
          value={formData.undergraduate.gpa}
          onChange={handleInputChange}
        />
        <FormGroup
          label="Major Subjects Studied"
          id="undergraduate.majorSubjects"
          name="undergraduate.majorSubjects"
          value={formData.undergraduate.majorSubjects}
          onChange={handleInputChange}
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="undergraduate.majorSubjects"
            name="undergraduate.majorSubjects"
            value={formData.undergraduate.majorSubjects}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup
          label="Honors/Awards"
          id="undergraduate.honorsAwards"
          name="undergraduate.honorsAwards"
          value={formData.undergraduate.honorsAwards}
          onChange={handleInputChange}
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="undergraduate.honorsAwards"
            name="undergraduate.honorsAwards"
            value={formData.undergraduate.honorsAwards}
            onChange={handleInputChange}
          />
        </FormGroup>
      </Section>

      {/* Recommenders Section */}
      <Section title="Letters of Recommendation">
        {formData.recommenders.map((recommender, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Recommender {index + 1}
            </h3>
            <FormGroup
              label="Full Name"
              type="text"
              id={`recommenders[${index}].fullName`}
              name="fullName"
              value={recommender.fullName}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <FormGroup
              label="Title/Position"
              type="text"
              id={`recommenders[${index}].title`}
              name="title"
              value={recommender.title}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <FormGroup
              label="Institution/Organization"
              type="text"
              id={`recommenders[${index}].institution`}
              name="institution"
              value={recommender.institution}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <FormGroup
              label="Email Address"
              type="email"
              id={`recommenders[${index}].email`}
              name="email"
              value={recommender.email}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            <FormGroup
              label="Phone Number"
              type="tel"
              id={`recommenders[${index}].phone`}
              name="phone"
              value={recommender.phone}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </div>
        ))}
      </Section>

      {/* Personal Statements Section */}
      <Section title="Personal Statements and Essays">
        <FormGroup
          label="Background and Influences"
          id="personalStatements.backgroundInfluences"
          name="personalStatements.backgroundInfluences"
          value={formData.personalStatements.backgroundInfluences}
          onChange={handleInputChange}
          required
        >
          <textarea
            className="w-full h-32 p-2.5 border border-gray-300 rounded-md text-base resize-y focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            id="personalStatements.backgroundInfluences"
            name="personalStatements.backgroundInfluences"
            value={formData.personalStatements.backgroundInfluences}
            onChange={handleInputChange}
          />
        </FormGroup>
        {/* Additional personal statement fields... */}
      </Section>

      {/* Documents Upload Section */}
      <Section title="Documents Required">
        <FormGroup
          label="SAT/ACT Scores (PDF)"
          type="file"
          id="documents.satScores"
          name="satScores"
          onChange={handleFileChange}
          required
          accept=".pdf"
        />
        <FormGroup
          label="GRE/GMAT Scores (PDF)"
          type="file"
          id="documents.greGmatScores"
          name="greGmatScores"
          onChange={handleFileChange}
          required
          accept=".pdf"
        />
        {/* Additional document upload fields... */}
      </Section>

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
