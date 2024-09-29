from django.urls import path
from core.views import RegisterView, LoginView, LogoutView
from .views import OpportunityList, ApplicationCreate, ApplicationList


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('opportunities/', OpportunityList.as_view(), name='opportunity-list'),
    path('applications/', ApplicationList.as_view(), name='application-list'),
    path('applications/create/', ApplicationCreate.as_view(), name='application-create'),
]
