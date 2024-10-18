import React, { useState, useEffect } from "react";
import { createApplication, updateApplication } from "../api";
import {
  PersonalInfoForm,
  EducationInfoForm,
  RecommenderForm,
  OtherInfoForm,
  FileUploadForm,
  ContactInfoForm,
} from "./AppFormComp";
import { useLocation, useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const { search, state } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const offerIdFromUrl = queryParams.get("offerId");
  const offerDetails = state?.OfferDetails || {};
  const studentData = state?.studentData || {};

  const initializeFormData = () => {
  const formData = {
    offer: offerIdFromUrl,
  };

  if (offerDetails.require_personal_info) {
    formData.personal_info = {
      full_name: studentData.personal_info?.full_name || "",
      date_of_birth: studentData.personal_info?.date_of_birth || "",
      gender: studentData.personal_info?.gender || "",
      nationality: studentData.personal_info?.nationality || "",
      passport_number: studentData.personal_info?.passport_number || "",
    };
  }

  if (offerDetails.require_contact_info) {
    formData.contact_info = {
      phone_number: studentData.contact_info?.phone_number || "",
      email_address: studentData.contact_info?.email_address || "",
      permanent_address: studentData.contact_info?.permanent_address || "",
      current_address: studentData.contact_info?.current_address || "",
    };
  }

  if (offerDetails.require_educational_background) {
    formData.educational_background = {
      high_school_name: studentData.educational_background?.high_school_name || "",
      high_school_address: studentData.educational_background?.high_school_address || "",
      high_school_graduation_date: studentData.educational_background?.high_school_graduation_date || "",
      high_school_gpa: studentData.educational_background?.high_school_gpa || "",
      high_school_major_subjects: studentData.educational_background?.high_school_major_subjects || "",
      high_school_honors_awards: studentData.educational_background?.high_school_honors_awards || "",
      undergraduate_university_name: studentData.educational_background?.undergraduate_university_name || "",
      undergraduate_university_address: studentData.educational_background?.undergraduate_university_address || "",
      undergraduate_graduation_date: studentData.educational_background?.undergraduate_graduation_date || "",
      undergraduate_degree_awarded: studentData.educational_background?.undergraduate_degree_awarded || "",
      undergraduate_gpa: studentData.educational_background?.undergraduate_gpa || "",
      undergraduate_major_subjects: studentData.educational_background?.undergraduate_major_subjects || "",
      undergraduate_honors_awards: studentData.educational_background?.undergraduate_honors_awards || "",
    };
  }

  if (offerDetails.require_recommenders) {
    formData.recommenders = {
      recommender1_name: studentData.recommenders?.recommender1_name || "",
      recommender1_title_position: studentData.recommenders?.recommender1_title_position || "",
      recommender1_institution_organization: studentData.recommenders?.recommender1_institution_organization || "",
      recommender1_email: studentData.recommenders?.recommender1_email || "",
      recommender1_phone_number: studentData.recommenders?.recommender1_phone_number || "",
      recommender2_name: studentData.recommenders?.recommender2_name || "",
      recommender2_title_position: studentData.recommenders?.recommender2_title_position || "",
      recommender2_institution_organization: studentData.recommenders?.recommender2_institution_organization || "",
      recommender2_email: studentData.recommenders?.recommender2_email || "",
      recommender2_phone_number: studentData.recommenders?.recommender2_phone_number || "",
      recommender3_name: studentData.recommenders?.recommender3_name || "",
      recommender3_title_position: studentData.recommenders?.recommender3_title_position || "",
      recommender3_institution_organization: studentData.recommenders?.recommender3_institution_organization || "",
      recommender3_email: studentData.recommenders?.recommender3_email || "",
      recommender3_phone_number: studentData.recommenders?.recommender3_phone_number || "",
    };
  }

  if (offerDetails.require_personal_statements) {
    formData.personal_statements = {
      background_influences: studentData.personal_statements?.background_influences || "",
      academic_interests: studentData.personal_statements?.academic_interests || "",
      career_goals: studentData.personal_statements?.career_goals || "",
      extracurricular_activities: studentData.personal_statements?.extracurricular_activities || "",
      personal_achievements: studentData.personal_statements?.personal_achievements || "",
      challenges_overcoming: studentData.personal_statements?.challenges_overcoming || "",
      unique_qualities: studentData.personal_statements?.unique_qualities || "",
      additional_information: studentData.personal_statements?.additional_information || "",
    };
  }

  if (offerDetails.require_documents) {
    formData.documents = {
      sat_act_scores: studentData.documents?.sat_act_scores || null,
      gre_gmat_scores: studentData.documents?.gre_gmat_scores || null,
      toefl_ielts_scores: studentData.documents?.toefl_ielts_scores || null,
      cv: studentData.documents?.cv || null,
      certificates_awards: studentData.documents?.certificates_awards || null,
      passport_id_scan: studentData.documents?.passport_id_scan || null,
      highschool_transcript: studentData.documents?.highschool_transcript || null,
      highschool_diploma: studentData.documents?.highschool_diploma || null,
      national_exam_result: studentData.documents?.national_exam_result || null,
      university_transcripts: studentData.documents?.university_transcripts || null,
      university_degree: studentData.documents?.university_degree || null,
      work_experience: studentData.documents?.work_experience || null,
      passport_size_photo: studentData.documents?.passport_size_photo || null,
    };
  }

  return formData;
};

const [formData, setFormData] = useState(() => initializeFormData());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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
   * Serializes form data and sends it via the createApplication or updateApplication API.
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
      console.log("Submitting application with data:");
      for (let pair of formDataToSubmit.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      if (studentData.id) {
        await updateApplication(studentData.id, formDataToSubmit);
        alert("Application updated successfully!");
      } else {
        await createApplication(formDataToSubmit);
        alert("Application submitted successfully!");
      }
      navigate("/profile");
    } catch (error) {
      console.error("Error submitting application:", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      alert("Failed to submit application.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-full min-h-screen"
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
