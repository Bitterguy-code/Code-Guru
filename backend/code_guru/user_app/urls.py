from django.urls import path
from .views import Sign_Up, Log_In, Log_Out, Info


# 127.0.0.1:8000/api/v1/user/
urlpatterns = [
    path('signup/', Sign_Up.as_view(), name='signup'),
    path('login/', Log_In.as_view(), name='login'),
    path('logout/', Log_Out.as_view(), name='logout'),
    path('info/', Info.as_view(), name='info'),
]