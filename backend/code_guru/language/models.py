from django.db import models

# Create your models here.
class Language(models.Model):
    name = models.TextField()
    prompt = models.TextField()
