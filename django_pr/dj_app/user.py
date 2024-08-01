#!/usr/bin/env python3
"""
User module
"""
from django.db import models
from django.core.exceptions import ValidationError


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
