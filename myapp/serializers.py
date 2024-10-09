from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.serializers import TokenObtainSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from rest_framework import serializers
from .models import (
    Offers, ApplicationForm, PersonalInformation, ContactInformation,
    EducationalBackground, Recommender, PersonalStatementsEssays, DocumentsRequired
)


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


class PersonalInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInformation
        fields = '__all__'


class ContactInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInformation
        fields = '__all__'


class EducationalBackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationalBackground
        fields = '__all__'


class RecommenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommender
        fields = '__all__'


class PersonalStatementsEssaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalStatementsEssays
        fields = '__all__'


class DocumentsRequiredSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentsRequired
        fields = '__all__'


class ApplicationFormSerializer(serializers.ModelSerializer):
    personal_information = PersonalInformationSerializer()
    contact_information = ContactInformationSerializer()
    educational_background = EducationalBackgroundSerializer()
    recommender1 = RecommenderSerializer()
    recommender2 = RecommenderSerializer()
    recommender3 = RecommenderSerializer()
    personal_statements_essays = PersonalStatementsEssaysSerializer()
    documents_required = DocumentsRequiredSerializer()

    class Meta:
        model = ApplicationForm
        exclude = ['user']

    def create(self, validated_data):
        personal_info_data = validated_data.pop('personal_information')
        contact_info_data = validated_data.pop('contact_information')
        educational_background_data = validated_data.pop('educational_background')
        recommender1_data = validated_data.pop('recommender1')
        recommender2_data = validated_data.pop('recommender2')
        recommender3_data = validated_data.pop('recommender3')
        personal_statements_essays_data = validated_data.pop('personal_statements_essays')
        documents_required_data = validated_data.pop('documents_required')

        personal_info = PersonalInformation.objects.create(**personal_info_data)
        contact_info = ContactInformation.objects.create(**contact_info_data)
        educational_background = EducationalBackground.objects.create(**educational_background_data)
        recommender1 = Recommender.objects.create(**recommender1_data)
        recommender2 = Recommender.objects.create(**recommender2_data)
        recommender3 = Recommender.objects.create(**recommender3_data)
        personal_statements_essays = PersonalStatementsEssays.objects.create(**personal_statements_essays_data)
        documents_required = DocumentsRequired.objects.create(**documents_required_data)

        application_form = ApplicationForm.objects.create(
            personal_information=personal_info,
            contact_information=contact_info,
            educational_background=educational_background,
            recommender1=recommender1,
            recommender2=recommender2,
            recommender3=recommender3,
            personal_statements_essays=personal_statements_essays,
            documents_required=documents_required,
            **validated_data
        )

        return application_form
