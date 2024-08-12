from django.db import models


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
