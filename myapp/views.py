from django.shortcuts import render
from rest_framework import generics, permissions, status, viewsets
from .serializers import UserSerializer, OffersSerializer, ApplicationFormSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import AccessToken
from django.shortcuts import get_object_or_404
from .customs.offers import Offers
from .customs.applications import ApplicationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.admin.views.decorators import staff_member_required


# fetch users
@staff_member_required
@api_view(['GET'])
def fetch_users(request):
    # Exclude staff and superuser accounts
    users = User.objects.filter(is_staff=False, is_superuser=False).values('id', 'username', 'email')
    return Response(users)


@api_view(['POST'])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'id': user.id, 'username': user.username}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def validate_token(request):
    token = request.data.get('token')
    if not token:
        return Response({'valid': False}, status=status.HTTP_400_BAD_REQUEST)

    try:
        AccessToken(token)
        return Response({'valid': True})
    except Exception as e:
        return Response({'valid': False}, status=status.HTTP_401_UNAUTHORIZED)

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

class OffersViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Offers.objects.all()
    serializer_class = OffersSerializer
    permission_classes = [permissions.AllowAny]

    def list(self, request):
        queryset = self.queryset
        type = request.query_params.get('type', None)
        is_paid = request.query_params.get('is_paid', None)
        full_scholarship = request.query_params.get('full_scholarship', None)
        country = request.query_params.get('country', None)

        if type:
            queryset = queryset.filter(type=type.upper())
        if is_paid is not None:
            queryset = queryset.filter(is_paid=is_paid.lower() == 'true')
        if full_scholarship is not None:
            queryset = queryset.filter(full_scholarship=full_scholarship.lower() == 'true')
        if country:
            queryset = queryset.filter(country__icontains=country)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ApplicationFormViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        user_id = self.request.query_params.get('user', None)

        if user.is_superuser:
            if user_id:
                return ApplicationForm.objects.filter(user_id=user_id)
            return ApplicationForm.objects.all()
        else:
            return ApplicationForm.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if not request.user.is_superuser and instance.user != request.user:
            return Response({"detail": "You do not have permission to delete this application."},
                            status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, **kwargs)
