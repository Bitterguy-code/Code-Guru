from rest_framework import serializers 
from .models import Challenge

# class ChallengeSerializerPart(serializers.ModelSerializer):
#     class Meta:
#         model = Challenge
#         fields = ["date", "questionTitle", "difficulty", "question", "hints","html"]

class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = "__all__"