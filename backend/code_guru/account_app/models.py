from django.db import models
from user_app.models import User


# Create your models here.
class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='account')
    position = models.TextField(null=True)
    years = models.IntegerField(null=True)
    goals = models.TextField(null=True)
    
