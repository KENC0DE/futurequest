from django.db import models


class Offer(models.Model):
    OFFER_TYPES = (
        ('EDUCATION', 'Education'),
        ('WORK', 'Work'),
    )
    OFFER_CATEGORIES = (
        ('FREE', 'Free'),
        ('PAID', 'Paid'),
    )

    title = models.CharField(max_length=200)
    description = models.TextField()
    offer_type = models.CharField(max_length=10, choices=OFFER_TYPES)
    category = models.CharField(max_length=4, choices=OFFER_CATEGORIES)
    youtube_link = models.URLField(blank=True, null=True)
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.title
