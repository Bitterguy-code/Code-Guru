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
    input_J  = models.CharField(null=True)
    output_J  = models.CharField(null=True)
    input_P = models.CharField(null=True)
    output_P = models.CharField(null=True)

    def __str__(self):
        return f"Challenge({self.date})"
    
    def setHTML(self,htmlString):
        self.html = htmlString
        self.save()
    
    def set_Input_And_Output(self, input_J, output_J, input_P, output_P):
        self.input_J = input_J
        self.output_J = output_J
        self.input_P = input_P
        self.output_P = output_P
        self.save()
    


class Answer(models.Model):
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name='answer')
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE, related_name='answer')
    code = models.TextField(null= True)
    language = models.CharField(null=True)
    solve = models.BooleanField(default=False)

    def setCode(self,code):
        self.code = code
        self.save()
    
    def setSolve(self,value):
        self.solve = value
        self.save()

    def setLanguage(self,language):
        self.language = language
        self.save()
    
    def __str__(self):
        return f"(Answer of {self.account} for {self.challenge})"



