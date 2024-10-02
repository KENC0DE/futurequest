from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .models import Offers, ApplicationForm
from .serializers import OffersSerializer, ApplicationFormSerializer


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
