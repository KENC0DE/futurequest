from rest_framework.authentication import SessionAuthentication ,TokenAuthentication
from .models import Work, Education, ApplicationForm
from rest_framework.exceptions import PermissionDenied
from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import (
    WorkSerializer, EducationSerializer,
    UserSerializer, ApplicationFormSerializer,LoginSerializer
)
from django.contrib.auth import login
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


# full access [ GET, POST, DELETE, PUT]
class WorkViewSet(viewsets.ModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer
    permission_classes = [IsAdminUser]
    authentication_classes = [SessionAuthentication]

# only get [ GET ]
class GetWorks(viewsets.ReadOnlyModelViewSet):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer

# full access [ GET, POST, DELETE, PUT]
class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAdminUser]
    authentication_classes = [SessionAuthentication]

# only get [ GET ]
class GetEducations(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


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

class LoginView(APIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data = request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data.get('user')
        login(request, user)
        token, created = Token.objects.get_or_create(user = user)

        return Response({
            'token': token.key,
            'message':'login succesfull!!'
        })

class ApplicationFormViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer
