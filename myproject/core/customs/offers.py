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

    # Fields specific to Education
    full_scholarship = models.BooleanField(default=False)
    ed_level = models.CharField(max_length=255, blank=True, null=True)

    # New fields
    is_paid = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.title} ({self.get_type_display()})"
