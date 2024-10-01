from django.urls import path
from .views import RegisterView, CustomTokenObtainPairView, ValidateTokenView, UserDetailView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('validate-token/', ValidateTokenView.as_view(), name='validate_token'),
    path('', UserDetailView.as_view(), name='user_detail'),
]
