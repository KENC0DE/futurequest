from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Offers, ApplicationForm

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class OffersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offers
        fields = '__all__'

class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        exclude = ['user']

    def create(self, validated_data):
        return ApplicationForm.objects.create(**validated_data)