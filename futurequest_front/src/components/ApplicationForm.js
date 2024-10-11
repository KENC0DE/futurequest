import React, { useState } from "react";
import { createApplication } from "../api";

const Section = ({ title, children }) => (
  <section className="mb-8 bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
    <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 border-b-2 border-blue-400 pb-2 mb-5">
      {title}
    </h2>
    {children}
  </section>
);

const FormGroup = ({
  label,
  id,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  accept,
  children,
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block mb-2 font-bold text-gray-700 dark:text-gray-300"
    >
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
        className="w-full p-2.5 border border-gray-300 dark:border-gray-600 rounded-md text-base 
        focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 dark:bg-gray-700 dark:text-gray-300"
        accept={accept}
      />
    ) : (
      children
    )}
  </div>
);

// Main ApplicationForm component
const ApplicationForm = () => {
  const initialFormData = {
    offer: 1,
    full_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    passport_number: "",
    phone_number: "",
    email_address: "",
    permanent_address: "",
    current_address: "",
    high_school_name: "",
    high_school_address: "",
    high_school_graduation_date: "",
    high_school_gpa: "",
    high_school_major_subjects: "",
    high_school_honors_awards: "",
    undergraduate_university_name: "",
    undergraduate_university_address: "",
    undergraduate_graduation_date: "",
    undergraduate_degree_awarded: "",
    undergraduate_gpa: "",
    undergraduate_major_subjects: "",
    undergraduate_honors_awards: "",
    recommender1_name: "",
    recommender1_title_position: "",
    recommender1_institution_organization: "",
    recommender1_email: "",
    recommender1_phone_number: "",
    recommender2_name: "",
    recommender2_title_position: "",
    recommender2_institution_organization: "",
    recommender2_email: "",
    recommender2_phone_number: "",
    recommender3_name: "",
    recommender3_title_position: "",
    recommender3_institution_organization: "",
    recommender3_email: "",
    recommender3_phone_number: "",
    background_influences: "",
    academic_interests: "",
    career_goals: "",
    extracurricular_activities: "",
    personal_achievements: "",
    challenges_overcoming: "",
    unique_qualities: "",
    additional_information: "",
    sat_act_scores: null,
    gre_gmat_scores: null,
    toefl_ielts_scores: null,
    cv: null,
    certificates_awards: null,
    passport_id_scan: null,
    highschool_transcript: null,
    highschool_diploma: null,
    national_exam_result: null,
    university_transcripts: null,
    university_degree: null,
    work_experience: null,
    passport_size_photo: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  /**
   * Handles changes for both nested and array fields.
   * @param {Object} e - The event object.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handles file input changes.
   * @param {Object} e - The event object.
   */
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  /**
   * Serializes the form data into FormData object.
   * Handles nested objects and arrays appropriately.
   * @param {Object} data - The form data.
   * @param {FormData} formDataToSubmit - The FormData object to append data to.
   * @param {String} parentKey - The parent key for nested fields.
   */
  const serialize = (data, formDataToSubmit, parentKey = "") => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        const formKey = parentKey ? `${parentKey}[${key}]` : key;

        if (value && typeof value === "object" && !(value instanceof File)) {
          serialize(value, formDataToSubmit, formKey);
        } else {
          formDataToSubmit.append(formKey, value);
        }
      }
    }
  };

  /**
   * Handles form submission.
   * Serializes form data and sends it via the createApplication API.
   * @param {Object} e - The event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    serialize(formData, formDataToSubmit);

    // Log the FormData content
    for (let pair of formDataToSubmit.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      await createApplication(formDataToSubmit);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);

      // Log the error response
      if (error.response) {
        console.error("Response data:", error.response.data);
      }

      alert("Failed to submit application.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-5 bg-gray-100 dark:bg-slate-800 rounded-lg shadow"
    >
      <h1 className="text-center text-2xl text-gray-800 bg-white dark:text-white dark:bg-gray-500 rounded-lg py-2 mb-5">
        Prospective Student University Application Form
      </h1>
      <FormGroup
        label="Full Name"
        id="full_name"
        name="full_name"
        value={formData.full_name}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Date of Birth"
        id="date_of_birth"
        name="date_of_birth"
        type="date"
        value={formData.date_of_birth}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Gender"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Nationality"
        id="nationality"
        name="nationality"
        value={formData.nationality}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Passport Number"
        id="passport_number"
        name="passport_number"
        value={formData.passport_number}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Phone Number"
        id="phone_number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Email Address"
        id="email_address"
        name="email_address"
        type="email"
        value={formData.email_address}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Permanent Address"
        id="permanent_address"
        name="permanent_address"
        value={formData.permanent_address}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Current Address"
        id="current_address"
        name="current_address"
        value={formData.current_address}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="High School Name"
        id="high_school_name"
        name="high_school_name"
        value={formData.high_school_name}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="High School Address"
        id="high_school_address"
        name="high_school_address"
        value={formData.high_school_address}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="High School Graduation Date"
        id="high_school_graduation_date"
        name="high_school_graduation_date"
        type="date"
        value={formData.high_school_graduation_date}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="High School GPA"
        id="high_school_gpa"
        name="high_school_gpa"
        value={formData.high_school_gpa}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="High School Major Subjects"
        id="high_school_major_subjects"
        name="high_school_major_subjects"
        value={formData.high_school_major_subjects}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="High School Honors/Awards"
        id="high_school_honors_awards"
        name="high_school_honors_awards"
        value={formData.high_school_honors_awards}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate University Name"
        id="undergraduate_university_name"
        name="undergraduate_university_name"
        value={formData.undergraduate_university_name}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate University Address"
        id="undergraduate_university_address"
        name="undergraduate_university_address"
        value={formData.undergraduate_university_address}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate Graduation Date"
        id="undergraduate_graduation_date"
        name="undergraduate_graduation_date"
        type="date"
        value={formData.undergraduate_graduation_date}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate Degree Awarded"
        id="undergraduate_degree_awarded"
        name="undergraduate_degree_awarded"
        value={formData.undergraduate_degree_awarded}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate GPA"
        id="undergraduate_gpa"
        name="undergraduate_gpa"
        value={formData.undergraduate_gpa}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate Major Subjects"
        id="undergraduate_major_subjects"
        name="undergraduate_major_subjects"
        value={formData.undergraduate_major_subjects}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Undergraduate Honors/Awards"
        id="undergraduate_honors_awards"
        name="undergraduate_honors_awards"
        value={formData.undergraduate_honors_awards}
        onChange={handleInputChange}
        required
      />
      <div className="p-4 border-2 border-orange-500 mt-2">
        <h2 className="p-2 border-2 border-orange-300 font-bold dark:text-white">
          Recommender 1
        </h2>
        <FormGroup
          label="Name"
          id="recommender1_name"
          name="recommender1_name"
          value={formData.recommender1_name}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Title/Position"
          id="recommender1_title_position"
          name="recommender1_title_position"
          value={formData.recommender1_title_position}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Institution/Organization"
          id="recommender1_institution_organization"
          name="recommender1_institution_organization"
          value={formData.recommender1_institution_organization}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Email"
          id="recommender1_email"
          name="recommender1_email"
          type="email"
          value={formData.recommender1_email}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Phone Number"
          id="recommender1_phone_number"
          name="recommender1_phone_number"
          value={formData.recommender1_phone_number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="p-4 border-2 border-orange-500 mt-2">
        <h2 className="p-2 border-2 border-orange-300 font-bold dark:text-white">
          Recommender 2
        </h2>
        <FormGroup
          label="Name"
          id="recommender2_name"
          name="recommender2_name"
          value={formData.recommender2_name}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Title/Position"
          id="recommender2_title_position"
          name="recommender2_title_position"
          value={formData.recommender2_title_position}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Institution/Organization"
          id="recommender2_institution_organization"
          name="recommender2_institution_organization"
          value={formData.recommender2_institution_organization}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Email"
          id="recommender2_email"
          name="recommender2_email"
          type="email"
          value={formData.recommender2_email}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Phone Number"
          id="recommender2_phone_number"
          name="recommender2_phone_number"
          value={formData.recommender2_phone_number}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="p-4 border-2 border-orange-500 mt-2">
        <h2 className="p-2 border-2 border-orange-300 font-bold dark:text-white">
          Recommender 3
        </h2>
        <FormGroup
          label="Name"
          id="recommender3_name"
          name="recommender3_name"
          value={formData.recommender3_name}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Title/Position"
          id="recommender3_title_position"
          name="recommender3_title_position"
          value={formData.recommender3_title_position}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Institution/Organization"
          id="recommender3_institution_organization"
          name="recommender3_institution_organization"
          value={formData.recommender3_institution_organization}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Email"
          id="recommender3_email"
          name="recommender3_email"
          type="email"
          value={formData.recommender3_email}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Phone Number"
          id="recommender3_phone_number"
          name="recommender3_phone_number"
          value={formData.recommender3_phone_number}
          onChange={handleInputChange}
          required
        />
      </div>
      <FormGroup
        label="Background Influences"
        id="background_influences"
        name="background_influences"
        value={formData.background_influences}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Academic Interests"
        id="academic_interests"
        name="academic_interests"
        value={formData.academic_interests}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Career Goals"
        id="career_goals"
        name="career_goals"
        value={formData.career_goals}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Extracurricular Activities"
        id="extracurricular_activities"
        name="extracurricular_activities"
        value={formData.extracurricular_activities}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Personal Achievements"
        id="personal_achievements"
        name="personal_achievements"
        value={formData.personal_achievements}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Challenges Overcoming"
        id="challenges_overcoming"
        name="challenges_overcoming"
        value={formData.challenges_overcoming}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Unique Qualities"
        id="unique_qualities"
        name="unique_qualities"
        value={formData.unique_qualities}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="Additional Information"
        id="additional_information"
        name="additional_information"
        value={formData.additional_information}
        onChange={handleInputChange}
        required
      />
      <FormGroup
        label="SAT/ACT Scores"
        id="sat_act_scores"
        name="sat_act_scores"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="GRE/GMAT Scores"
        id="gre_gmat_scores"
        name="gre_gmat_scores"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="TOEFL/IELTS Scores"
        id="toefl_ielts_scores"
        name="toefl_ielts_scores"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="CV"
        id="cv"
        name="cv"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="Certificates/Awards"
        id="certificates_awards"
        name="certificates_awards"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="Passport ID Scan"
        id="passport_id_scan"
        name="passport_id_scan"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="High School Transcript"
        id="highschool_transcript"
        name="highschool_transcript"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="High School Diploma"
        id="highschool_diploma"
        name="highschool_diploma"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="National Exam Result"
        id="national_exam_result"
        name="national_exam_result"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="University Transcripts"
        id="university_transcripts"
        name="university_transcripts"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="University Degree"
        id="university_degree"
        name="university_degree"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="Work Experience"
        id="work_experience"
        name="work_experience"
        type="file"
        onChange={handleFileChange}
      />
      <FormGroup
        label="Passport Size Photo"
        id="passport_size_photo"
        name="passport_size_photo"
        type="file"
        onChange={handleFileChange}
      />
      <button
        type="submit"
        className="mt-5 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ApplicationForm;
