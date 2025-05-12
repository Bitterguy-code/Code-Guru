from django.db import models

class Newsletter(models.Model):
    date = models.DateTimeField(null=True)
    html = models.TextField(null=True)

    def __str__(self):
        return f"Newsletter({self.date})"
    
    def setHTML(self,htmlString):
        self.html = htmlString
        self.save()
