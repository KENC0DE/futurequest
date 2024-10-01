from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Application
from .serializers import ApplicationSerializer


class ApplicationCreateView(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ApplicationListView(generics.ListAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Application.objects.filter(user=self.request.user)


class ApplicationUpdateView(generics.UpdateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        return Application.objects.filter(user=self.request.user)
