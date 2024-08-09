from django.db import models
from django.core.exceptions import ValidationError


class Work(models.Model):
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
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

    def __str__(self):
        return f"{self.title}: {self.country}"


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


class Country(models.Model):
    name = models.CharField(max_length=255)
    ed_offer = models.CharField(max_length=255, null=True, blank=True)
    wrk_offer = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}: ({self.ed_offer} | {self.wrk_offer})"


class User(models.Model):
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255, null=True, blank=True)
    last_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    family_members = models.JSONField(default=list)
    economic_status = models.CharField(max_length=255, null=True, blank=True)
    other_status = models.JSONField(default=dict)

    def __str__(self):
        return f"{self.username}: {self.email}"

    def add_family_member(self, family_member):
        if family_member not in self.family_members:
            self.family_members.append(family_member)
            self.save()

    def set_economic_status(self, status):
        self.economic_status = status
        self.save()

    def update_other_status(self, **kwargs):
        self.other_status.update(kwargs)
        self.save()
