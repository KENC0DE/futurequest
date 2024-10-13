from django.urls import path, include
from .views import UserDetailView, register_user, validate_token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import OffersViewSet, ApplicationFormViewSet

router = DefaultRouter()
router.register(r'offers', OffersViewSet)
router.register(r'applications', ApplicationFormViewSet)

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('validate-token/', validate_token, name='validate_token'),
    path('user/', UserDetailView.as_view(), name='user_detail'),
    path('', include(router.urls)),
]
