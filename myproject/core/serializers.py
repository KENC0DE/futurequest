from rest_framework import serializers
from .models import Offers, ApplicationForm


class OffersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offers
        fields = '__all__'


class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        exclude = ['user']
