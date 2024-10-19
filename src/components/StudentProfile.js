import React, { useEffect, useState } from "react";
import { getOfferDetails } from "../api";
import { useNavigate } from "react-router-dom";
import { FaCopy, FaDownload } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const StudentProfile = ({
  studentData,
  onEdit,
  showEditButton,
  showCopyOrDownloadButton,
}) => {
  const [offerTitle, setOfferTitle] = useState("");
  const [OfferDetails, setOfferDetails] = useState();
  const navigate = useNavigate();

  const fieldLabels = {
    "personal_info.full_name": "Full Name",
    "personal_info.date_of_birth": "Date of Birth",
    "personal_info.gender": "Gender",
    "personal_info.nationality": "Nationality",
    "personal_info.passport_number": "Passport Number",
    "contact_info.phone_number": "Phone Number",
    "contact_info.email_address": "Email Address",
    "contact_info.permanent_address": "Permanent Address",
    "contact_info.current_address": "Current Address",
    "educational_background.high_school_name": "High School Name",
    "educational_background.high_school_address": "High School Address",
    "educational_background.high_school_graduation_date":
      "High School Graduation Date",
    "educational_background.high_school_gpa": "High School GPA",
    "educational_background.high_school_major_subjects":
      "High School Major Subjects",
    "educational_background.high_school_honors_awards":
      "High School Honors & Awards",
    "educational_background.undergraduate_university_name":
      "Undergraduate University Name",
    "educational_background.undergraduate_university_address":
      "Undergraduate University Address",
    "educational_background.undergraduate_graduation_date":
      "Undergraduate Graduation Date",
    "educational_background.undergraduate_degree_awarded":
      "Undergraduate Degree Awarded",
    "educational_background.undergraduate_gpa": "Undergraduate GPA",
    "educational_background.undergraduate_major_subjects":
      "Undergraduate Major Subjects",
    "educational_background.undergraduate_honors_awards":
      "Undergraduate Honors & Awards",
    "recommenders.recommender1_name": "Recommender 1 Name",
    "recommenders.recommender1_title_position": "Recommender 1 Title/Position",
    "recommenders.recommender1_institution_organization":
      "Recommender 1 Institution/Organization",
    "recommenders.recommender1_email": "Recommender 1 Email",
    "recommenders.recommender1_phone_number": "Recommender 1 Phone Number",
    "recommenders.recommender2_name": "Recommender 2 Name",
    "recommenders.recommender2_title_position": "Recommender 2 Title/Position",
    "recommenders.recommender2_institution_organization":
      "Recommender 2 Institution/Organization",
    "recommenders.recommender2_email": "Recommender 2 Email",
    "recommenders.recommender2_phone_number": "Recommender 2 Phone Number",
    "recommenders.recommender3_name": "Recommender 3 Name",
    "recommenders.recommender3_title_position": "Recommender 3 Title/Position",
    "recommenders.recommender3_institution_organization":
      "Recommender 3 Institution/Organization",
    "recommenders.recommender3_email": "Recommender 3 Email",
    "recommenders.recommender3_phone_number": "Recommender 3 Phone Number",
    "personal_statements.background_influences": "Background Influences",
    "personal_statements.academic_interests": "Academic Interests",
    "personal_statements.career_goals": "Career Goals",
    "personal_statements.extracurricular_activities":
      "Extracurricular Activities",
    "personal_statements.personal_achievements": "Personal Achievements",
    "personal_statements.challenges_overcoming": "Challenges Overcoming",
    "personal_statements.unique_qualities": "Unique Qualities",
    "personal_statements.additional_information": "Additional Information",
    "documents.sat_act_scores": "SAT/ACT Scores",
    "documents.gre_gmat_scores": "GRE/GMAT Scores",
    "documents.toefl_ielts_scores": "TOEFL/IELTS Scores",
    "documents.cv": "CV",
    "documents.certificates_awards": "Certificates & Awards",
    "documents.passport_id_scan": "Passport ID Scan",
    "documents.highschool_transcript": "High School Transcript",
    "documents.highschool_diploma": "High School Diploma",
    "documents.national_exam_result": "National Exam Result",
    "documents.university_transcripts": "University Transcripts",
    "documents.university_degree": "University Degree",
    "documents.work_experience": "Work Experience",
    "documents.passport_size_photo": "Passport Size Photo",
  };

  const fileFields = [
    "documents.sat_act_scores",
    "documents.gre_gmat_scores",
    "documents.toefl_ielts_scores",
    "documents.cv",
    "documents.certificates_awards",
    "documents.passport_id_scan",
    "documents.passport_size_photo",
    "documents.highschool_transcript",
    "documents.highschool_diploma",
    "documents.national_exam_result",
    "documents.university_transcripts",
    "documents.university_degree",
    "documents.work_experience",
  ];

  useEffect(() => {
    if (studentData?.offer) {
      getOfferDetails(studentData.offer)
        .then((response) => {
          setOfferTitle(response.data.title);
          setOfferDetails(response.data);
        })
        .catch((error) => {
        });
    }
  }, [studentData?.offer]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    navigate(
      `/apply?offerId=${studentData.offer}&applicationId=${studentData.id}`,
      {
        state: { studentData, OfferDetails },
      }
    );
  };

  return (
    <div className="bg-gray-100 dark:bg-slate-700 dark:text-white p-6 max-w-4xl mx-auto rounded-lg shadow-xl">
      <div className="flex flex-col items-center mb-6 text-center relative sm:flex-row sm:text-left sm:items-start">
        <img
          src={`${
            studentData?.documents?.passport_size_photo ||
            "https://via.placeholder.com/150"
          }`}
          alt={`${
            studentData?.personal_info?.full_name || "Student"
          }'s profile`}
          className="w-36 h-36 rounded-full border-4 border-gray-300 mb-4 sm:mr-6"
        />
        <h1 className="text-2xl font-bold">
          {studentData?.personal_info?.full_name || "No name available"}
        </h1>
        {showEditButton && (
          <button
            className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:relative sm:top-0 sm:right-0"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {Object.keys(fieldLabels).map((key) => {
          const [section, field] = key.split(".");
          const fieldValue = studentData[section]?.[field];

          return (
            <div
              key={key}
              className="bg-white border-2 border-gray-400 dark:bg-slate-600 p-4 rounded-lg"
            >
              <div className="font-bold text-gray-700 dark:text-white mb-1">
                {fieldLabels[key]}
              </div>
              <div className="text-gray-800 dark:text-white">
                {fileFields.includes(key) ? (
                  fieldValue ? (
                    <a
                      href={fieldValue}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View {fieldLabels[key]}
                    </a>
                  ) : (
                    "No file uploaded"
                  )
                ) : (
                  fieldValue || "N/A"
                )}
                {showCopyOrDownloadButton && !fileFields.includes(key) && (
                  <CopyToClipboard text={fieldValue || "N/A"}>
                    <button className="ml-2 text-blue-400 hover:text-gray-400">
                      <FaCopy />
                    </button>
                  </CopyToClipboard>
                )}
                {showCopyOrDownloadButton &&
                  fileFields.includes(key) &&
                  fieldValue && (
                    <a
                      href={fieldValue}
                      download
                      className="ml-2 text-gray-800 hover:text-blue-700 dark:text-white dark:hover:text-gray-900"
                    >
                      <FaDownload />
                    </a>
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
