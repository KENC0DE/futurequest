from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkViewSet, EducationViewSet, CountryViewSet, UserViewSet

router = DefaultRouter()
router.register(r'works', WorkViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'countries', CountryViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
