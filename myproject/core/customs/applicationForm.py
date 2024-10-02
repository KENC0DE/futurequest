from django.db import models
from django.contrib.auth.models import User
from .offers import Offers  # Assuming the Offers model is in a file named offers.py


class ApplicationForm(models.Model):
    # New fields for User and Offer
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    offer = models.ForeignKey(Offers, on_delete=models.CASCADE, related_name='applications')

    # Personal Information
    full_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=50)
    nationality = models.CharField(max_length=100)
    passport_number = models.CharField(max_length=100)

    # Contact Information
    phone_number = models.CharField(max_length=20)
    email_address = models.EmailField()
    permanent_address = models.TextField()
    current_address = models.TextField(blank=True, null=True)

    # Educational Background
    high_school_name = models.CharField(max_length=255)
    high_school_address = models.CharField(max_length=255)
    high_school_graduation_date = models.DateField()
    high_school_gpa = models.DecimalField(max_digits=4, decimal_places=2)
    high_school_major_subjects = models.TextField()
    high_school_honors_awards = models.TextField(blank=True, null=True)

    undergraduate_university_name = models.CharField(max_length=255)
    undergraduate_university_address = models.CharField(max_length=255)
    undergraduate_graduation_date = models.DateField()
    undergraduate_degree_awarded = models.CharField(max_length=255)
    undergraduate_gpa = models.DecimalField(max_digits=4, decimal_places=2)
    undergraduate_major_subjects = models.TextField()
    undergraduate_honors_awards = models.TextField(blank=True, null=True)

    # Letters of Recommendation
    recommender1_name = models.CharField(max_length=255)
    recommender1_title_position = models.CharField(max_length=255)
    recommender1_institution_organization = models.CharField(max_length=255)
    recommender1_email = models.EmailField()
    recommender1_phone_number = models.CharField(max_length=20)

    recommender2_name = models.CharField(max_length=255)
    recommender2_title_position = models.CharField(max_length=255)
    recommender2_institution_organization = models.CharField(max_length=255)
    recommender2_email = models.EmailField()
    recommender2_phone_number = models.CharField(max_length=20)

    recommender3_name = models.CharField(max_length=255)
    recommender3_title_position = models.CharField(max_length=255)
    recommender3_institution_organization = models.CharField(max_length=255)
    recommender3_email = models.EmailField()
    recommender3_phone_number = models.CharField(max_length=20)

    # Personal Statements and Essays
    background_influences = models.TextField()
    academic_interests = models.TextField()
    career_goals = models.TextField()
    extracurricular_activities = models.TextField()
    personal_achievements = models.TextField()
    challenges_overcoming = models.TextField()
    unique_qualities = models.TextField()
    additional_information = models.TextField(blank=True, null=True)

    # Documents Required (File Fields)
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
        return f"{self.full_name} - {self.offer.title}"
