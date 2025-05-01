from django.db import models
from account_app.models import Account


class Challenge(models.Model):
    date = models.DateTimeField(null=True)
    questionLink = models.CharField(null=True)
    questionTitle = models.CharField(null=True)
    difficulty = models.CharField(null=True)
    question = models.CharField(null=True)
    hints = models.CharField(null=True)

class Answer(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='answer')
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE, related_name='answer')


