from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WorkViewSet, EducationViewSet, UserViewSet, RegisterView, ApplicationFormViewSet

router = DefaultRouter()
router.register(r'application-form', ApplicationFormViewSet)
router.register(r'educations', EducationViewSet)
router.register(r'works', WorkViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
]
