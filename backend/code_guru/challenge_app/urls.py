from django.urls import path
from .views import DailyChallenge, DailyAnswer

# 127.0.0.1:8000/api/v1/challenge/
urlpatterns = [
    path('html/<str:date>/', DailyChallenge.as_view()),
    path('answer/', DailyAnswer.as_view()),
    
]