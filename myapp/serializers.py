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
    personal_info = PersonalInformationSerializer()
    contact_info = ContactInformationSerializer()
    educational_background = EducationalBackgroundSerializer()
    recommenders = RecommendersSerializer()
    personal_statements = PersonalStatementsSerializer()
    documents = DocumentsSerializer()

    class Meta:
        model = ApplicationForm
        exclude = ['user']

    def create(self, validated_data):
        personal_info_data = validated_data.pop('personal_info')
        contact_info_data = validated_data.pop('contact_info')
        educational_background_data = validated_data.pop('educational_background')
        recommenders_data = validated_data.pop('recommenders')
        personal_statements_data = validated_data.pop('personal_statements')
        documents_data = validated_data.pop('documents')

        personal_info = PersonalInformation.objects.create(**personal_info_data)
        contact_info = ContactInformation.objects.create(**contact_info_data)
        educational_background = EducationalBackground.objects.create(**educational_background_data)
        recommenders = Recommenders.objects.create(**recommenders_data)
        personal_statements = PersonalStatements.objects.create(**personal_statements_data)
        documents = Documents.objects.create(**documents_data)

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
