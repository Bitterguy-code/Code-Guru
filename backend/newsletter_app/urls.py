from django.urls import path
from .views import DailyNewsletter

# 127.0.0.1:8000/api/v1/newsletter/
urlpatterns = [
    path('<str:date>/', DailyNewsletter.as_view()),
    
]