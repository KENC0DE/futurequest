from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APIClient
from .models import Offers, ApplicationForm
from rest_framework_simplejwt.tokens import RefreshToken

class UserTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            'username': 'testuser',
            'password': 'testpassword'
        }

    def test_register_user(self):
        response = self.client.post(reverse('register'), self.user_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, 'testuser')

    def test_validate_token(self):
        response = self.client.post(reverse('register'), self.user_data)
        user = User.objects.get(username='testuser')
        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)
        response = self.client.post(reverse('validate_token'), {'token': token})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data['valid'])

    def test_user_detail(self):
        response = self.client.post(reverse('register'), self.user_data)
        user = User.objects.get(username='testuser')
        self.client.force_authenticate(user=user)
        response = self.client.get(reverse('user_detail'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'testuser')

class OffersTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.offer_data = {
            'type': 'WORK',
            'title': 'Software Engineer',
            'country': 'USA',
            'description': 'A job offer for a software engineer.',
            'full_scholarship': False,
            'ed_level': '',
            'is_paid': True
        }
        self.offer = Offers.objects.create(**self.offer_data)

    def test_list_offers(self):
        response = self.client.get(reverse('offers-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['title'], 'Software Engineer')

class ApplicationFormTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.client.force_authenticate(user=self.user)
        self.offer = Offers.objects.create(
            type='EDUCATION',
            title='Scholarship Program',
            country='USA',
            description='A scholarship program.',
            full_scholarship=True,
            ed_level='Undergraduate',
            is_paid=False
        )
        self.application_data = {
            'full_name': 'John Doe',
            'date_of_birth': '2000-01-01',
            'gender': 'Male',
            'nationality': 'American',
            'passport_number': 'A12345678',
            'phone_number': '+1234567890',
            'email_address': 'john.doe@example.com',
            'permanent_address': '123 Main St, Anytown, USA',
            'current_address': '123 Main St, Anytown, USA',
            'high_school_name': 'Anytown High School',
            'high_school_address': '456 High St, Anytown, USA',
            'high_school_graduation_date': '2018-06-01',
            'high_school_gpa': '3.8',
            'high_school_major_subjects': 'Math, Science',
            'high_school_honors_awards': 'Honor Roll',
            'undergraduate_university_name': 'State University',
            'undergraduate_university_address': '789 College Ave, Anytown, USA',
            'undergraduate_graduation_date': '2022-05-15',
            'undergraduate_degree_awarded': 'BSc Computer Science',
            'undergraduate_gpa': '3.9',
            'undergraduate_major_subjects': 'Computer Science',
            'undergraduate_honors_awards': 'Dean\'s List',
            'recommender1_name': 'Dr. Smith',
            'recommender1_title_position': 'Professor',
            'recommender1_institution_organization': 'State University',
            'recommender1_email': 'dr.smith@example.com',
            'recommender1_phone_number': '+1234567891',
            'recommender2_name': 'Dr. Johnson',
            'recommender2_title_position': 'Professor',
            'recommender2_institution_organization': 'State University',
            'recommender2_email': 'dr.johnson@example.com',
            'recommender2_phone_number': '+1234567892',
            'recommender3_name': 'Dr. Brown',
            'recommender3_title_position': 'Professor',
            'recommender3_institution_organization': 'State University',
            'recommender3_email': 'dr.brown@example.com',
            'recommender3_phone_number': '+1234567893',
            'background_influences': 'My background influences...',
            'academic_interests': 'My academic interests...',
            'career_goals': 'My career goals...',
            'extracurricular_activities': 'My extracurricular activities...',
            'personal_achievements': 'My personal achievements...',
            'challenges_overcoming': 'Challenges I have overcome...',
            'unique_qualities': 'My unique qualities...',
            'additional_information': 'Additional information...'
        }

    def test_create_application_form(self):
        response = self.client.post(reverse('applicationform-list'), {**self.application_data, 'offer': self.offer.id})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(ApplicationForm.objects.count(), 1)
        self.assertEqual(ApplicationForm.objects.get().full_name, 'John Doe')

    def test_delete_application_form(self):
        application = ApplicationForm.objects.create(user=self.user, offer=self.offer, **self.application_data)
        response = self.client.delete(reverse('applicationform-detail', args=[application.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(ApplicationForm.objects.count(), 0)

    def test_delete_application_form_unauthorized(self):
        other_user = User.objects.create_user(username='otheruser', password='otherpassword')
        application = ApplicationForm.objects.create(user=other_user, offer=self.offer, **self.application_data)
        response = self.client.delete(reverse('applicationform-detail', args=[application.id]))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(ApplicationForm.objects.count(), 1)
