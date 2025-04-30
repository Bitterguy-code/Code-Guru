from django.db import models

class Challenge(models.Model):
    date = models.DateTimeField(null=True)
    questionLink = models.CharField(null=True)
    questionTitle = models.CharField(null=True)
    difficulty = models.CharField(null=True)
    question = models.CharField(null=True)
    hints = models.CharField(null=True)

class Answer(models.Model):
    pass

