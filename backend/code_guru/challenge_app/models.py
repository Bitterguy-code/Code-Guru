from django.db import models
from account_app.models import Account
from django.contrib.postgres.fields import ArrayField


class Challenge(models.Model):
    date = models.DateTimeField(null=True)
    questionLink = models.CharField(null=True)
    questionTitle = models.CharField(null=True)
    difficulty = models.CharField(null=True)
    question = models.CharField(null=True)
    hints = models.CharField(null=True)
    html = models.TextField(null=True)
    input  = models.CharField(null=True)
    output  = models.CharField(null=True)

    def __str__(self):
        return f"Challenge({self.date})"
    
    def setHTML(self,htmlString):
        self.html = htmlString
        self.save()


class Answer(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='answer')
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE, related_name='answer')
    code = models.TextField(null= True)

    def setCode(self,code):
        self.code = code
        self.save()
    
    def __str__(self):
        return f"(Answer of {self.account} for {self.challenge})"



