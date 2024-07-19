#!/usr/bin/env python3
"""
Education module
"""
from django.db import models
from django.core.exceptions import ValidationError


class Education(models.Model):
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    full_scholarship = models.BooleanField(default=False)
    ed_level = models.CharField(max_length=255)
    description = models.TextField()
    files_required = models.JSONField(default=dict)
    files_uploaded = models.JSONField(default=dict)

    def set_requirement(self, file_key, is_required):
        if file_key in self.files_required:
            self.files_required[file_key] = is_required
            self.save()
        else:
            raise KeyError(f"Invalid file key: {file_key}")

    def upload_file(self, file_key, file_path):
        if file_key not in self.files_required:
            raise KeyError(f"Invalid file key: {file_key}")

        if self.files_required.get(file_key):
            self.files_uploaded[file_key] = file_path
            self.save()
        else:
            raise ValueError(f"{file_key} is not required, no need to upload.")

    def check_all_files_uploaded(self):
        missing_files = [file_key for file_key, required in self.files_required.items() 
                         if required and file_key not in self.files_uploaded]
        if missing_files:
            raise ValidationError(f"Missing required files: {', '.join(missing_files)}")
        return True

    def get_uploaded_files(self):
        return self.files_uploaded

    def paid(self):
        """Do if not full scholarship"""
        if not self.full_scholarship:
            pass  # Implement payment logic here

    def __str__(self):
        return f"{self.title}: {self.country} full: {self.full_scholarship}"
