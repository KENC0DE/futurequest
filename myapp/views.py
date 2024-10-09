from django.shortcuts import render
from rest_framework import generics, permissions, status, viewsets
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import AccessToken
from django.shortcuts import get_object_or_404
from .models import Offers, ApplicationForm
from .serializers import OffersSerializer, ApplicationFormSerializer


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
        return ApplicationForm.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user != request.user:
            return Response({"detail": "You do not have permission to delete this application."},
                            status=status.HTTP_403_FORBIDDEN)
        return super().destroy(request, *args, **kwargs)