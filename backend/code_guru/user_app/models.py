from django.db import models

# Create your models here.
class User(models.Model):
    username = models.TextField(unique=True)
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['username', 'email']
