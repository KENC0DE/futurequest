from .serializers import WorkSerializer, EducationSerializer, UserSerializer, ApplicationFormSerializer
from .models import Work, Education, User, ApplicationForm
from rest_framework.exceptions import PermissionDenied
from rest_framework import viewsets, generics, status
from rest_framework.response import Response


class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
"""
    def perform_create(self, serializer):
        if not self.request.user.is_superuser:
            raise PermissionDenied("You must be a superuser to perform this action.")
        serializer.save()"""


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
"""
    def perform_create(self, serializer):
        if not self.request.user.is_superuser:
            raise PermissionDenied("You must be a superuser to perform this action.")
        serializer.save()"""


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ApplicationFormViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer
