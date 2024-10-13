from rest_framework import serializers
from django.contrib.auth.models import User
from .customs.offers import Offers
from .customs.applications import ApplicationForm, PersonalInformation, ContactInformation, EducationalBackground, Recommenders, PersonalStatements, Documents


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


class RecommendersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recommenders
        fields = '__all__'


class PersonalStatementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalStatements
        fields = '__all__'


class DocumentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documents
        fields = '__all__'


class ApplicationFormSerializer(serializers.ModelSerializer):
    personal_info = PersonalInformationSerializer(required=False)
    contact_info = ContactInformationSerializer(required=False)
    educational_background = EducationalBackgroundSerializer(required=False)
    recommenders = RecommendersSerializer(required=False)
    personal_statements = PersonalStatementsSerializer(required=False)
    documents = DocumentsSerializer(required=False)

    class Meta:
        model = ApplicationForm
        exclude = ['user']

    def validate(self, data):
        offer = data.get('offer')

        if offer.require_personal_info and 'personal_info' not in data:
            raise serializers.ValidationError("Personal information is required.")
        if offer.require_contact_info and 'contact_info' not in data:
            raise serializers.ValidationError("Contact information is required.")
        if offer.require_educational_background and 'educational_background' not in data:
            raise serializers.ValidationError("Educational background is required.")
        if offer.require_recommenders and 'recommenders' not in data:
            raise serializers.ValidationError("Recommenders are required.")
        if offer.require_personal_statements and 'personal_statements' not in data:
            raise serializers.ValidationError("Personal statements are required.")
        if offer.require_documents and 'documents' not in data:
            raise serializers.ValidationError("Documents are required.")

        return data

    def create(self, validated_data):
        personal_info_data = validated_data.pop('personal_info', None)
        contact_info_data = validated_data.pop('contact_info', None)
        educational_background_data = validated_data.pop('educational_background', None)
        recommenders_data = validated_data.pop('recommenders', None)
        personal_statements_data = validated_data.pop('personal_statements', None)
        documents_data = validated_data.pop('documents', None)

        personal_info = PersonalInformation.objects.create(**personal_info_data) if personal_info_data else None
        contact_info = ContactInformation.objects.create(**contact_info_data) if contact_info_data else None
        educational_background = EducationalBackground.objects.create(**educational_background_data) if educational_background_data else None
        recommenders = Recommenders.objects.create(**recommenders_data) if recommenders_data else None
        personal_statements = PersonalStatements.objects.create(**personal_statements_data) if personal_statements_data else None
        documents = Documents.objects.create(**documents_data) if documents_data else None

        application_form = ApplicationForm.objects.create(
            personal_info=personal_info,
            contact_info=contact_info,
            educational_background=educational_background,
            recommenders=recommenders,
            personal_statements=personal_statements,
            documents=documents,
            **validated_data
        )
        return application_form
