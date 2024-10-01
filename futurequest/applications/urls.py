from django.urls import path
from .views import ApplicationCreateView, ApplicationListView, ApplicationUpdateView


urlpatterns = [
    path('create/', ApplicationCreateView.as_view(), name='application-create'),
    path('list/', ApplicationListView.as_view(), name='application-list'),
    path('update/<int:pk>/', ApplicationUpdateView.as_view(), name='application-update'),
]
