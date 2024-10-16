import React, { useState, useEffect } from "react";
import { createApplication } from "../api";
import {
  PersonalInfoForm,
  EducationInfoForm,
  RecommenderForm,
  OtherInfoForm,
  FileUploadForm,
  ContactInfoForm,
} from "./AppFormComp";
import { useLocation } from "react-router-dom";

const ApplicationForm = () => {
  const { search, state } = useLocation();
  const queryParams = new URLSearchParams(search);
  const offerIdFromUrl = queryParams.get("offerId");
  const offerDetails = state?.OfferDetails || {};

  const initializeFormData = () => {
    const formData = {
      offer: offerIdFromUrl,
      personal_info: {},
      contact_info: {},
      educational_background: {},
      recommenders: {},
      personal_statements: {},
      documents: {},
    };

    if (offerDetails.require_personal_info) {
      formData.personal_info = {
        full_name: "",
        date_of_birth: "",
        gender: "",
        nationality: "",
        passport_number: "",
      };
    }

    if (offerDetails.require_contact_info) {
      formData.contact_info = {
        phone_number: "",
        email_address: "",
        permanent_address: "",
        current_address: "",
      };
    }

    if (offerDetails.require_educational_background) {
      formData.educational_background = {
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
      };
    }

    if (offerDetails.require_recommenders) {
      formData.recommenders = {
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
      };
    }

    if (offerDetails.require_personal_statements) {
      formData.personal_statements = {
        background_influences: "",
        academic_interests: "",
        career_goals: "",
        extracurricular_activities: "",
        personal_achievements: "",
        challenges_overcoming: "",
        unique_qualities: "",
        additional_information: "",
      };
    }

    if (offerDetails.require_documents) {
      formData.documents = {
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
    }

    return formData;
  };

  const [formData, setFormData] = useState(() => initializeFormData());

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const [section, field] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const [section, field] = name.split(".");
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: files[0],
      },
    }));
  };

  /**
   * Handles form submission.
   * Serializes form data and sends it via the createApplication API.
   * @param {Object} e - The event object.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (let key in formData) {
      if (key === "documents") {
        // Handle files
        for (let docKey in formData.documents) {
          if (formData.documents[docKey]) {
            formDataToSubmit.append(
              `documents.${docKey}`,
              formData.documents[docKey]
            );
          }
        }
      } else {
        if (typeof formData[key] === "object" && formData[key] !== null) {
          for (let subKey in formData[key]) {
            formDataToSubmit.append(`${key}.${subKey}`, formData[key][subKey]);
          }
        } else {
          formDataToSubmit.append(key, formData[key]);
        }
      }
    }

    try {
      console.log("Submitting application with data:", formDataToSubmit); 
      await createApplication(formDataToSubmit);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      alert(
        "Failed to submit application. Please check the console for details."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-screen"
    >
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white rounded-lg py-4 mb-6 bg-gradient-to-r from-blue-500 to-purple-600">
        Prospective Student University Application Form
      </h1>
      {offerDetails.require_personal_info && (
        <PersonalInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          className="mb-6"
        />
      )}
      {offerDetails.require_contact_info && (
        <ContactInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          className="mb-6"
        />
      )}
      {offerDetails.require_educational_background && (
        <EducationInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          className="mb-6"
        />
      )}
      {offerDetails.require_recommenders && (
        <RecommenderForm
          formData={formData}
          handleInputChange={handleInputChange}
          className="mb-6"
        />
      )}
      {offerDetails.require_personal_statements && (
        <OtherInfoForm
          formData={formData}
          handleInputChange={handleInputChange}
          className="mb-6"
        />
      )}
      {offerDetails.require_documents && (
        <FileUploadForm handleFileChange={handleFileChange} />
      )}
      <button
        type="submit"
        className="w-full p-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
      >
        Submit Application
      </button>
    </form>
  );
};

export default ApplicationForm;
