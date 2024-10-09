from django.db import models
from django.contrib.auth.models import User


# Model for Offers
class Offers(models.Model):
    TYPE_CHOICES = [
        ('WORK', 'Work'),
        ('EDUCATION', 'Education'),
    ]

    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    description = models.TextField()

    # Fields specific to Education
    full_scholarship = models.BooleanField(default=False)
    ed_level = models.CharField(max_length=255, blank=True, null=True)

    # New fields
    is_paid = models.BooleanField(default=True)
    youtube_link = models.URLField(blank=True, null=True)

    # Image field
    image = models.ImageField(upload_to='offers_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.title} ({self.get_type_display()})"


class PersonalInformation(models.Model):
    full_name = models.CharField(max_length=255)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=50)
    nationality = models.CharField(max_length=100)
    passport_number = models.CharField(max_length=100)


class ContactInformation(models.Model):
    phone_number = models.CharField(max_length=20)
    email_address = models.EmailField()
    permanent_address = models.TextField()
    current_address = models.TextField(blank=True, null=True)


class EducationalBackground(models.Model):
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


class Recommender(models.Model):
    name = models.CharField(max_length=255)
    title_position = models.CharField(max_length=255)
    institution_organization = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)


class PersonalStatementsEssays(models.Model):
    background_influences = models.TextField()
    academic_interests = models.TextField()
    career_goals = models.TextField()
    extracurricular_activities = models.TextField()
    personal_achievements = models.TextField()
    challenges_overcoming = models.TextField()
    unique_qualities = models.TextField()
    additional_information = models.TextField(blank=True, null=True)


class DocumentsRequired(models.Model):
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


class ApplicationForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')
    offer = models.ForeignKey(Offers, on_delete=models.CASCADE, related_name='applications')

    personal_information = models.OneToOneField(PersonalInformation, on_delete=models.CASCADE, null=True)
    contact_information = models.OneToOneField(ContactInformation, on_delete=models.CASCADE, null=True)
    educational_background = models.OneToOneField(EducationalBackground, on_delete=models.CASCADE, null=True)
    recommender1 = models.OneToOneField(Recommender, related_name='recommender1', on_delete=models.CASCADE, null=True)
    recommender2 = models.OneToOneField(Recommender, related_name='recommender2', on_delete=models.CASCADE, null=True)
    recommender3 = models.OneToOneField(Recommender, related_name='recommender3', on_delete=models.CASCADE, null=True)
    personal_statements_essays = models.OneToOneField(PersonalStatementsEssays, on_delete=models.CASCADE, null=True)
    documents_required = models.OneToOneField(DocumentsRequired, on_delete=models.CASCADE, null=True)

    def __str__(self):
        personal_info = self.personal_information.full_name if self.personal_information else "No Personal Info"
        offer_title = self.offer.title if self.offer else "No Offer"
        return f"{personal_info} - {offer_title}"