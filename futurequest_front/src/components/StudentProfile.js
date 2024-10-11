import React, { useEffect, useState } from "react";
import { useOffers } from "../OffersContext";
import { getOfferDetails } from "../api";

const StudentProfile = ({ studentData, onEdit, showEditButton }) => {
  const { selectedOfferId, setSelectedOfferId } = useOffers();
  const [offerTitle, setOfferTitle] = useState("");

  const fieldLabels = {
    offer: "Offer Title",
    full_name: "Full Name",
    date_of_birth: "Date of Birth",
    gender: "Gender",
    nationality: "Nationality",
    passport_number: "Passport Number",
    phone_number: "Phone Number",
    email_address: "Email Address",
    permanent_address: "Permanent Address",
    current_address: "Current Address",
    high_school_name: "High School Name",
    high_school_address: "High School Address",
    high_school_graduation_date: "High School Graduation Date",
    high_school_gpa: "High School GPA",
    high_school_major_subjects: "High School Major Subjects",
    high_school_honors_awards: "High School Honors & Awards",
    undergraduate_university_name: "Undergraduate University Name",
    undergraduate_university_address: "Undergraduate University Address",
    undergraduate_graduation_date: "Undergraduate Graduation Date",
    undergraduate_degree_awarded: "Undergraduate Degree Awarded",
    undergraduate_gpa: "Undergraduate GPA",
    undergraduate_major_subjects: "Undergraduate Major Subjects",
    undergraduate_honors_awards: "Undergraduate Honors & Awards",
    recommender1_name: "Recommender 1 Name",
    recommender1_title_position: "Recommender 1 Title/Position",
    recommender1_institution_organization:
      "Recommender 1 Institution/Organization",
    recommender1_email: "Recommender 1 Email",
    recommender1_phone_number: "Recommender 1 Phone Number",
    recommender2_name: "Recommender 2 Name",
    recommender2_title_position: "Recommender 2 Title/Position",
    recommender2_institution_organization:
      "Recommender 2 Institution/Organization",
    recommender2_email: "Recommender 2 Email",
    recommender2_phone_number: "Recommender 2 Phone Number",
    recommender3_name: "Recommender 3 Name",
    recommender3_title_position: "Recommender 3 Title/Position",
    recommender3_institution_organization:
      "Recommender 3 Institution/Organization",
    recommender3_email: "Recommender 3 Email",
    recommender3_phone_number: "Recommender 3 Phone Number",
    background_influences: "Background Influences",
    academic_interests: "Academic Interests",
    career_goals: "Career Goals",
    extracurricular_activities: "Extracurricular Activities",
    personal_achievements: "Personal Achievements",
    challenges_overcoming: "Challenges Overcoming",
    unique_qualities: "Unique Qualities",
    additional_information: "Additional Information",
    sat_act_scores: "SAT/ACT Scores",
    gre_gmat_scores: "GRE/GMAT Scores",
    toefl_ielts_scores: "TOEFL/IELTS Scores",
    cv: "CV",
    certificates_awards: "Certificates & Awards",
    passport_id_scan: "Passport ID Scan",
    highschool_transcript: "High School Transcript",
    highschool_diploma: "High School Diploma",
    national_exam_result: "National Exam Result",
    university_transcripts: "University Transcripts",
    university_degree: "University Degree",
    work_experience: "Work Experience",
    passport_size_photo: "Passport Size Photo",
  };

  const fileFields = [
    "sat_act_scores",
    "gre_gmat_scores",
    "toefl_ielts_scores",
    "cv",
    "certificates_awards",
    "passport_id_scan",
    "highschool_transcript",
    "highschool_diploma",
    "national_exam_result",
    "university_transcripts",
    "university_degree",
    "work_experience",
  ];

  useEffect(() => {
    if (studentData.offer) {
      getOfferDetails(studentData.offer)
        .then((response) => {
          setOfferTitle(response.data.title);
        })
        .catch((error) => {
          console.error("Error fetching offer details:", error);
        });
    }
  }, [studentData.offer]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  console.log("studentData:", studentData);

  return (
    <div className="bg-gray-100 dark:bg-slate-700 dark:text-white p-6 max-w-4xl mx-auto rounded-lg shadow-xl">
      <div className="flex flex-col items-center mb-6 text-center relative sm:flex-row sm:text-left sm:items-start">
        <img
          src={`${process.env.REACT_APP_API_URL}${studentData.passport_size_photo} || https://via.placeholder.com/150`}
          alt={`${studentData.full_name}'s profile`}
          className="w-36 h-36 rounded-full border-4 border-gray-300 mb-4 sm:mr-6"
        />
        <h1 className="text-2xl font-bold">{`${studentData.full_name}'s Profile`}</h1>
        {showEditButton && (
          <button
            className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:relative sm:top-0 sm:right-0"
            onClick={onEdit}
          >
            Edit
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.keys(fieldLabels).map((key) => {
          if (key === "profilePicture" || key === "id") return null;
          return (
            <div
              key={key}
              className="bg-white border-2 border-gray-400 dark:bg-slate-600 p-4 rounded-lg"
            >
              <div className="font-bold text-gray-700 dark:text-white mb-1">
                {fieldLabels[key]}
              </div>
              <div className="text-gray-800 dark:text-white">
                {key === "offer" ? (
                  offerTitle
                ) : fileFields.includes(key) ? (
                  <a
                    href={`${process.env.REACT_APP_API_URL}${studentData[key]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View {fieldLabels[key]}
                  </a>
                ) : key === "passport_size_photo" ? (
                  <img
                    src={`${process.env.REACT_APP_API_URL}${studentData[key]}`}
                    alt={fieldLabels[key]}
                    className="w-36 h-36 rounded-full border-4 border-gray-300"
                  />
                ) : (
                  studentData[key]
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProfile;
