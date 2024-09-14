from django.db import models


class Work(models.Model):
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    description = models.TextField()
    files_required = models.JSONField(default=dict)
    files_uploaded = models.JSONField(default=dict)


    def __str__(self):
        return f"{self.title}: {self.country}"
