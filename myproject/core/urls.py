from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OffersViewSet, ApplicationFormViewSet


router = DefaultRouter()
router.register(r'offers', OffersViewSet)
router.register(r'applications', ApplicationFormViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
