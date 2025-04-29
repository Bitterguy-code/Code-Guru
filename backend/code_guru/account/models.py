from django.db import models

# Create your models here.
class Account(models.Model):
    position = models.TextField()
    years = models.IntegerField()
    goals = models.TextField()
    
