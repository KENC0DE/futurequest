from django.db import models
from django.core.exceptions import ValidationError


from .customs.country import Country
from .customs.education import Education
from .customs.user import User
from .customs.work import Work


"""
class Work(models.Model):
    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    description = models.TextField()
    files_required = models.JSONField(default=dict)
    files_uploaded = models.JSONField(default=dict)


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
"""