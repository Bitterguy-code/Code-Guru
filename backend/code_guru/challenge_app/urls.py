from django.urls import path
from .views import Challenge

# 127.0.0.1:8000/api/v1/challenge/
urlpatterns = [
    path('/', Challenge.as_view()),
    
]