from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer
from .serializers import WorkSerializer
from .serializers import EducationSerializer
from .serializers import CountrySerializer
from .models import User
from .models import Work
from .models import Country
from .models import Education


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
