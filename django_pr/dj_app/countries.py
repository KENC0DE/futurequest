#!/usr/bin/env python3
"""
Countries list
"""
from django.db import models
from django.core.exceptions import ValidationError


class Country(models.Model):
    name = models.CharField(max_length=255)
    ed_offer = models.CharField(max_length=255, null=True, blank=True)
    wrk_offer = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}: ({self.ed_offer} | {self.wrk_offer})"
