from rest_framework import serializers 
from .models import Challenge, Answer

# class ChallengeSerializerPart(serializers.ModelSerializer):
#     class Meta:
#         model = Challenge
#         fields = ["date", "questionTitle", "difficulty", "question", "hints","html"]

class ChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Challenge
        fields = "__all__"

class AnswerSerializer(serializers.ModelSerializer):
    challenge = ChallengeSerializer()

    class Meta:
        model = Answer
        fields = ["solve", "challenge"]