from django.urls import path
from .views import Playground


# 127.0.0.1:8000/api/v1/playground/
urlpatterns = [
    path('answer/', Playground.as_view()),
]