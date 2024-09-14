from django.db import models


class Education(models.Model):
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    full_scholarship = models.BooleanField(default=False)
    ed_level = models.CharField(max_length=255)
    description = models.TextField()
    files_required = models.JSONField(default=dict)
    files_uploaded = models.JSONField(default=dict)


    def __str__(self):
        return f"{self.title}: {self.country} full: {self.full_scholarship}"
