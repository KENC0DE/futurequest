from django.db import models
from django.conf import settings


class Application(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    offer = models.ForeignKey('offers.Offer', on_delete=models.CASCADE)
    education_level = models.CharField(max_length=100)
    economic_status = models.CharField(max_length=100)
    family_members = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.email} - {self.offer.title}"
