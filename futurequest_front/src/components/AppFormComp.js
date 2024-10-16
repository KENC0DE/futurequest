import React from "react";

export const FormGroup = ({
  label,
  id,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  accept,
  as = "input",
  children,
}) => (
  <div className="mb-6">
    <label
      htmlFor={id}
      className="block mb-2 font-bold text-gray-700 dark:text-gray-300"
    >
      {label}
    </label>
    {!children
      ? React.createElement(as, {
          type,
          id,
          name,
          value,
          onChange,
          required,
          className:
            "w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-base focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 dark:bg-gray-700 dark:text-gray-300",
          accept,
        })
      : children}
  </div>
);

export const PersonalInfoForm = ({ formData, handleInputChange }) => (
  <>
    <FormGroup
      label="Full Name"
      id="personal_info.full_name"
      name="personal_info.full_name"
      value={formData.personal_info.full_name}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Date of Birth"
      id="personal_info.date_of_birth"
      name="personal_info.date_of_birth"
      type="date"
      value={formData.personal_info.date_of_birth}
      onChange={handleInputChange}
      required
    />
    <div className="mb-6">
      <label className="block mb-2 font-bold text-gray-700 dark:text-gray-300">
        Gender
      </label>
      <div className="flex items-center">
        <input
          type="radio"
          id="personal_info.gender.male"
          name="personal_info.gender"
          value="male"
          checked={formData.personal_info.gender === "male"}
          onChange={handleInputChange}
          className="mr-2"
          required
        />
        <label
          htmlFor="personal_info.gender.male"
          className="mr-4 dark:text-white"
        >
          Male
        </label>
        <input
          type="radio"
          id="personal_info.gender.female"
          name="personal_info.gender"
          value="female"
          checked={formData.personal_info.gender === "female"}
          onChange={handleInputChange}
          className="mr-2"
          required
        />
        <label
          htmlFor="personal_info.gender.female"
          className="dark:text-white"
        >
          Female
        </label>
      </div>
    </div>
    <FormGroup
      label="Nationality"
      id="personal_info.nationality"
      name="personal_info.nationality"
      value={formData.personal_info.nationality}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Passport Number"
      id="personal_info.passport_number"
      name="personal_info.passport_number"
      value={formData.personal_info.passport_number}
      onChange={handleInputChange}
      required
    />
  </>
);

export const ContactInfoForm = ({ formData, handleInputChange }) => (
  <>
    <FormGroup
      label="Phone Number"
      id="contact_info.phone_number"
      name="contact_info.phone_number"
      value={formData.contact_info.phone_number}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Email Address"
      id="contact_info.email_address"
      name="contact_info.email_address"
      value={formData.contact_info.email_address}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Permanent Address"
      id="contact_info.permanent_address"
      name="contact_info.permanent_address"
      value={formData.contact_info.permanent_address}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Current Address"
      id="contact_info.current_address"
      name="contact_info.current_address"
      value={formData.contact_info.current_address}
      onChange={handleInputChange}
      required
    />
  </>
);

export const EducationInfoForm = ({ formData, handleInputChange }) => (
  <>
    <FormGroup
      label="High School Name"
      id="educational_background.high_school_name"
      name="educational_background.high_school_name"
      value={formData.educational_background.high_school_name}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="High School Address"
      id="educational_background.high_school_address"
      name="educational_background.high_school_address"
      value={formData.educational_background.high_school_address}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="High School Graduation Date"
      id="educational_background.high_school_graduation_date"
      name="educational_background.high_school_graduation_date"
      type="date"
      value={formData.educational_background.high_school_graduation_date}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="High School GPA"
      id="educational_background.high_school_gpa"
      name="educational_background.high_school_gpa"
      value={formData.educational_background.high_school_gpa}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="High School Major Subjects"
      id="educational_background.high_school_major_subjects"
      name="educational_background.high_school_major_subjects"
      value={formData.educational_background.high_school_major_subjects}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="High School Honors/Awards"
      id="educational_background.high_school_honors_awards"
      name="educational_background.high_school_honors_awards"
      value={formData.educational_background.high_school_honors_awards}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate University Name"
      id="educational_background.undergraduate_university_name"
      name="educational_background.undergraduate_university_name"
      value={formData.educational_background.undergraduate_university_name}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate University Address"
      id="educational_background.undergraduate_university_address"
      name="educational_background.undergraduate_university_address"
      value={formData.educational_background.undergraduate_university_address}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate Graduation Date"
      id="educational_background.undergraduate_graduation_date"
      name="educational_background.undergraduate_graduation_date"
      type="date"
      value={formData.educational_background.undergraduate_graduation_date}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate Degree Awarded"
      id="educational_background.undergraduate_degree_awarded"
      name="educational_background.undergraduate_degree_awarded"
      value={formData.educational_background.undergraduate_degree_awarded}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate GPA"
      id="educational_background.undergraduate_gpa"
      name="educational_background.undergraduate_gpa"
      value={formData.educational_background.undergraduate_gpa}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate Major Subjects"
      id="educational_background.undergraduate_major_subjects"
      name="educational_background.undergraduate_major_subjects"
      value={formData.educational_background.undergraduate_major_subjects}
      onChange={handleInputChange}
      required
    />
    <FormGroup
      label="Undergraduate Honors/Awards"
      id="educational_background.undergraduate_honors_awards"
      name="educational_background.undergraduate_honors_awards"
      value={formData.educational_background.undergraduate_honors_awards}
      onChange={handleInputChange}
      required
    />
  </>
);

export const RecommenderForm = ({ formData, handleInputChange }) => (
  <>
    {[1, 2, 3].map((num) => (
      <div key={num} className="p-4 border-2 border-orange-500 mt-4 rounded-lg">
        <h2 className="p-2 border-b-2 border-orange-300 font-bold dark:text-white">
          Recommender {num}
        </h2>
        <FormGroup
          label="Name"
          id={`recommenders.recommender${num}_name`}
          name={`recommenders.recommender${num}_name`}
          value={formData.recommenders[`recommender${num}_name`]}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Title/Position"
          id={`recommenders.recommender${num}_title_position`}
          name={`recommenders.recommender${num}_title_position`}
          value={formData.recommenders[`recommender${num}_title_position`]}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Institution/Organization"
          id={`recommenders.recommender${num}_institution_organization`}
          name={`recommenders.recommender${num}_institution_organization`}
          value={
            formData.recommenders[`recommender${num}_institution_organization`]
          }
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Email"
          id={`recommenders.recommender${num}_email`}
          name={`recommenders.recommender${num}_email`}
          type="email"
          value={formData.recommenders[`recommender${num}_email`]}
          onChange={handleInputChange}
          required
        />
        <FormGroup
          label="Phone Number"
          id={`recommenders.recommender${num}_phone_number`}
          name={`recommenders.recommender${num}_phone_number`}
          value={formData.recommenders[`recommender${num}_phone_number`]}
          onChange={handleInputChange}
          required
        />
      </div>
    ))}
  </>
);

export const OtherInfoForm = ({ formData, handleInputChange }) => (
  <>
    <FormGroup
      label="Background Influences"
      id="personal_statements.background_influences"
      name="personal_statements.background_influences"
      value={formData.personal_statements.background_influences}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Academic Interests"
      id="personal_statements.academic_interests"
      name="personal_statements.academic_interests"
      value={formData.personal_statements.academic_interests}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Career Goals"
      id="personal_statements.career_goals"
      name="personal_statements.career_goals"
      value={formData.personal_statements.career_goals}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Extracurricular Activities"
      id="personal_statements.extracurricular_activities"
      name="personal_statements.extracurricular_activities"
      value={formData.personal_statements.extracurricular_activities}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Personal Achievements"
      id="personal_statements.personal_achievements"
      name="personal_statements.personal_achievements"
      value={formData.personal_statements.personal_achievements}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Challenges Overcoming"
      id="personal_statements.challenges_overcoming"
      name="personal_statements.challenges_overcoming"
      value={formData.personal_statements.challenges_overcoming}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Unique Qualities"
      id="personal_statements.unique_qualities"
      name="personal_statements.unique_qualities"
      value={formData.personal_statements.unique_qualities}
      onChange={handleInputChange}
      required
      as="textarea"
    />
    <FormGroup
      label="Additional Information"
      id="personal_statements.additional_information"
      name="personal_statements.additional_information"
      value={formData.personal_statements.additional_information}
      onChange={handleInputChange}
      required
      as="textarea"
    />
  </>
);

export const FileUploadForm = ({ handleFileChange }) => (
  <>
    <FormGroup
      label="SAT/ACT Scores"
      id="documents.sat_act_scores"
      name="documents.sat_act_scores"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="GRE/GMAT Scores"
      id="documents.gre_gmat_scores"
      name="documents.gre_gmat_scores"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="TOEFL/IELTS Scores"
      id="documents.toefl_ielts_scores"
      name="documents.toefl_ielts_scores"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="CV"
      id="documents.cv"
      name="documents.cv"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="Certificates/Awards"
      id="documents.certificates_awards"
      name="documents.certificates_awards"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="Passport ID Scan"
      id="documents.passport_id_scan"
      name="documents.passport_id_scan"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="High School Transcript"
      id="documents.highschool_transcript"
      name="documents.highschool_transcript"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="High School Diploma"
      id="documents.highschool_diploma"
      name="documents.highschool_diploma"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="National Exam Result"
      id="documents.national_exam_result"
      name="documents.national_exam_result"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="University Transcripts"
      id="documents.university_transcripts"
      name="documents.university_transcripts"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="University Degree"
      id="documents.university_degree"
      name="documents.university_degree"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="Work Experience"
      id="documents.work_experience"
      name="documents.work_experience"
      type="file"
      onChange={handleFileChange}
    />
    <FormGroup
      label="Passport Size Photo"
      id="documents.passport_size_photo"
      name="documents.passport_size_photo"
      type="file"
      onChange={handleFileChange}
    />
  </>
);
