from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    GetEducations, WorkViewSet,
    EducationViewSet, UserViewSet,
    RegisterView, ApplicationFormViewSet,
    GetWorks
)

router = DefaultRouter()
router.register(r'application-form', ApplicationFormViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'works', WorkViewSet)
router.register(r'users', UserViewSet)
router.register(r'get-educations', GetEducations, basename='get-educations')
router.register(r'get-works', GetWorks, basename='get-works')

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
]
