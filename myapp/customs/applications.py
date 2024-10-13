from django.db import models
from django.contrib.auth.models import User
from .offers import Offers

class PersonalInformation(models.Model):
    full_name = models.CharField(max_length=255, default="")
    date_of_birth = models.DateField(default="2000-01-01")
    gender = models.CharField(max_length=50, default="")
    nationality = models.CharField(max_length=100, default="")
    passport_number = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.full_name

class ContactInformation(models.Model):
    phone_number = models.CharField(max_length=20, default="")
    email_address = models.EmailField(default="")
    permanent_address = models.TextField(default="")
    current_address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.email_address

class EducationalBackground(models.Model):
    high_school_name = models.CharField(max_length=255, default="")
    high_school_address = models.CharField(max_length=255, default="")
    high_school_graduation_date = models.DateField(default="2000-01-01")
    high_school_gpa = models.DecimalField(max_digits=4, decimal_places=2, default=0.0)
    high_school_major_subjects = models.TextField(default="")
    high_school_honors_awards = models.TextField(blank=True, null=True)
    undergraduate_university_name = models.CharField(max_length=255, default="")
    undergraduate_university_address = models.CharField(max_length=255, default="")
    undergraduate_graduation_date = models.DateField(default="2000-01-01")
    undergraduate_degree_awarded = models.CharField(max_length=255, default="")
    undergraduate_gpa = models.DecimalField(max_digits=4, decimal_places=2, default=0.0)
    undergraduate_major_subjects = models.TextField(default="")
    undergraduate_honors_awards = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.high_school_name

class Recommenders(models.Model):
    recommender1_name = models.CharField(max_length=255, default="")
    recommender1_title_position = models.CharField(max_length=255, default="")
    recommender1_institution_organization = models.CharField(max_length=255, default="")
    recommender1_email = models.EmailField(default="")
    recommender1_phone_number = models.CharField(max_length=20, default="")
    recommender2_name = models.CharField(max_length=255, default="")
    recommender2_title_position = models.CharField(max_length=255, default="")
    recommender2_institution_organization = models.CharField(max_length=255, default="")
    recommender2_email = models.EmailField(default="")
    recommender2_phone_number = models.CharField(max_length=20, default="")
    recommender3_name = models.CharField(max_length=255, default="")
    recommender3_title_position = models.CharField(max_length=255, default="")
    recommender3_institution_organization = models.CharField(max_length=255, default="")
    recommender3_email = models.EmailField(default="")
    recommender3_phone_number = models.CharField(max_length=20, default="")

    def __str__(self):
        return self.recommender1_name

class PersonalStatements(models.Model):
    background_influences = models.TextField(default="")
    academic_interests = models.TextField(default="")
    career_goals = models.TextField(default="")
    extracurricular_activities = models.TextField(default="")
    personal_achievements = models.TextField(default="")
    challenges_overcoming = models.TextField(default="")
    unique_qualities = models.TextField(default="")
    additional_information = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.background_influences

class Documents(models.Model):
    sat_act_scores = models.FileField(upload_to='documents/', blank=True, null=True)
    gre_gmat_scores = models.FileField(upload_to='documents/', blank=True, null=True)
    toefl_ielts_scores = models.FileField(upload_to='documents/', blank=True, null=True)
    cv = models.FileField(upload_to='documents/', blank=True, null=True)
    certificates_awards = models.FileField(upload_to='documents/', blank=True, null=True)
    passport_id_scan = models.FileField(upload_to='documents/', blank=True, null=True)
    highschool_transcript = models.FileField(upload_to='documents/', blank=True, null=True)
    highschool_diploma = models.FileField(upload_to='documents/', blank=True, null=True)
    national_exam_result = models.FileField(upload_to='documents/', blank=True, null=True)
    university_transcripts = models.FileField(upload_to='documents/', blank=True, null=True)
    university_degree = models.FileField(upload_to='documents/', blank=True, null=True)
    work_experience = models.FileField(upload_to='documents/', blank=True, null=True)
    passport_size_photo = models.ImageField(upload_to='photos/', blank=True, null=True)

    def __str__(self):
        return self.sat_act_scores.name if self.sat_act_scores else "No Document"

class ApplicationForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    offer = models.ForeignKey(Offers, on_delete=models.CASCADE, related_name='applications')

    personal_info = models.OneToOneField(PersonalInformation, on_delete=models.CASCADE, blank=True, null=True)
    contact_info = models.OneToOneField(ContactInformation, on_delete=models.CASCADE, blank=True, null=True)
    educational_background = models.OneToOneField(EducationalBackground, on_delete=models.CASCADE, blank=True, null=True)
    recommenders = models.OneToOneField(Recommenders, on_delete=models.CASCADE, blank=True, null=True)
    personal_statements = models.OneToOneField(PersonalStatements, on_delete=models.CASCADE, blank=True, null=True)
    documents = models.OneToOneField(Documents, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.offer.title if self.offer else 'No Offer'}"
