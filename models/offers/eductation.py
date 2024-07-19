#!/usr/bin/env python3
"""
Education module
"""


class Education:
    """Education module"""
    
    def __init__(self, **kwargs):
        self.title = kwargs.get('title')
        self.coutry = kwargs.get('country')
        self.full_scholarship = kwargs.get('full_scholarship')
        self.ed_level = kwargs.get('ed_level')
        self.description = kwargs.get('description')
        self.files_required = {
            "sat_act_scores": False,
            "gre_gmat_scores": False,
            "toefl_ielts_scores": False,
            "cv": False,
            "certificates_awards": False,
            "passport_id_scan": False,
            "highschool_transcript": False,
            "highschool_leaving_certificate": False,
            "national_exam_result": False,
            "university_transcripts": False,
            "university_degree": False,
            "work_experience": False,
            "passport_size_photo": False,
        }
        self.files_uploaded = {}

    def set_requirement(self, file_key, is_required):
        if file_key in self.files_required:
            self.files_required[file_key] = is_required
        else:
            raise KeyError(f"Invalid file key: {file_key}")

    def upload_file(self, file_key, file_path):
        if file_key not in self.files_required:
            raise KeyError(f"Invalid file key: {file_key}")

        if self.files_required[file_key]:
            self.files_uploaded[file_key] = file_path
        else:
            raise ValueError(f"{file_key} is not required, no need to upload.")

    def check_all_files_uploaded(self):
        missing_files = [file_key for file_key, required in self.files_required.items() if required and file_key not in self.files_uploaded]
        if missing_files:
            raise ValueError(f"Missing required files: {', '.join(missing_files)}")
        return True

    def get_uploaded_files(self):
        return self.files_uploaded

    def paid(self):
        """Do if not full scholarship"""
        if not self.full_scholarship:
            pass

    def __str__(self):
        return f"""{self.title}: {self.coutry} full: {self.full_scholarship}"""
