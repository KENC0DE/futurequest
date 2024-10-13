from django.db import models

class Offers(models.Model):
    TYPE_CHOICES = [
        ('WORK', 'Work'),
        ('EDUCATION', 'Education'),
    ]

    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    description = models.TextField()

    full_scholarship = models.BooleanField(default=False)
    ed_level = models.CharField(max_length=255, blank=True, null=True)
    is_paid = models.BooleanField(default=True)
    youtube_link = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='offers_images/', blank=True, null=True)

    require_personal_info = models.BooleanField(default=True)
    require_contact_info = models.BooleanField(default=True)
    require_educational_background = models.BooleanField(default=True)
    require_recommenders = models.BooleanField(default=True)
    require_personal_statements = models.BooleanField(default=True)
    require_documents = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} ({self.get_type_display()})"
