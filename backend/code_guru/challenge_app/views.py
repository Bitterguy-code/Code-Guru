from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests


class Challenge(APIView):
    def get(self,request,date):
        
        
        return Response('hi')




# https://alfa-leetcode-api.onrender.com/daily
"""
{
  "questionLink": "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/",
  "date": "2025-04-30",
  "questionId": "1421",
  "questionFrontendId": "1295",
  "questionTitle": "Find Numbers with Even Number of Digits",
  "titleSlug": "find-numbers-with-even-number-of-digits",
  "difficulty": "Easy",
  "isPaidOnly": false,
  "question": "\u003Cp\u003EGiven an array \u003Ccode\u003Enums\u003C/code\u003E of integers, return how many of them contain an \u003Cstrong\u003Eeven number\u003C/strong\u003E of digits.\u003C/p\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 1:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E nums = [12,345,2,6,7896]\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 2\n\u003Cstrong\u003EExplanation: \n\u003C/strong\u003E12 contains 2 digits (even number of digits).&nbsp;\n345 contains 3 digits (odd number of digits).&nbsp;\n2 contains 1 digit (odd number of digits).&nbsp;\n6 contains 1 digit (odd number of digits).&nbsp;\n7896 contains 4 digits (even number of digits).&nbsp;\nTherefore only 12 and 7896 contain an even number of digits.\n\u003C/pre\u003E\n\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 2:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E nums = [555,901,482,1771]\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 1 \n\u003Cstrong\u003EExplanation: \u003C/strong\u003E\nOnly 1771 contains an even number of digits.\n\u003C/pre\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConstraints:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= nums.length &lt;= 500\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= nums[i] &lt;= 10\u003Csup\u003E5\u003C/sup\u003E\u003C/code\u003E\u003C/li\u003E\n\u003C/ul\u003E\n",
  "exampleTestcases": "[12,345,2,6,7896]\n[555,901,482,1771]",
  "topicTags": [
    {
      "name": "Array",
      "slug": "array",
      "translatedName": null
    },
    {
      "name": "Math",
      "slug": "math",
      "translatedName": null
    }
  ],
  "hints": [
    "How to compute the number of digits of a number ?",
    "Divide the number by 10 again and again to get the number of digits."
  ],
  "solution": {
    "id": "2048",
    "canSeeDetail": true,
    "paidOnly": false,
    "hasVideoSolution": false,
    "paidOnlyVideo": true
  },
  "companyTagStats": null,
  "likes": 2538,
  "dislikes": 130,
  "similarQuestions": "[{\"title\": \"Finding 3-Digit Even Numbers\", \"titleSlug\": \"finding-3-digit-even-numbers\", \"difficulty\": \"Easy\", \"translatedTitle\": null}, {\"title\": \"Number of Even and Odd Bits\", \"titleSlug\": \"number-of-even-and-odd-bits\", \"difficulty\": \"Easy\", \"translatedTitle\": null}, {\"title\": \"Find if Digit Game Can Be Won\", \"titleSlug\": \"find-if-digit-game-can-be-won\", \"difficulty\": \"Easy\", \"translatedTitle\": null}]"
}
"""



# chatGPT
# Give me a translation in a Json format
# "question": "\u003Cp\u003EGiven an array \u003Ccode\u003Enums\u003C/code\u003E of integers, return how many of them contain an \u003Cstrong\u003Eeven number\u003C/strong\u003E of digits.\u003C/p\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 1:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E nums = [12,345,2,6,7896]\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 2\n\u003Cstrong\u003EExplanation: \n\u003C/strong\u003E12 contains 2 digits (even number of digits).&nbsp;\n345 contains 3 digits (odd number of digits).&nbsp;\n2 contains 1 digit (odd number of digits).&nbsp;\n6 contains 1 digit (odd number of digits).&nbsp;\n7896 contains 4 digits (even number of digits).&nbsp;\nTherefore only 12 and 7896 contain an even number of digits.\n\u003C/pre\u003E\n\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 2:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E nums = [555,901,482,1771]\n\u003Cstrong\u003EOutput:\u003C/strong\u003E 1 \n\u003Cstrong\u003EExplanation: \u003C/strong\u003E\nOnly 1771 contains an even number of digits.\n\u003C/pre\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConstraints:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= nums.length &lt;= 500\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= nums[i] &lt;= 10\u003Csup\u003E5\u003C/sup\u003E\u003C/code\u003E\u003C/li\u003E\n\u003C/ul\u003E\n",
"""
{
  "problem": "Count Numbers with Even Number of Digits",
  "description": "Given a list of integers, return how many of them contain an even number of digits.",
  "examples": [
    {
      "input": [12, 345, 2, 6, 7896],
      "output": 2,
      "explanation": [
        "12 has 2 digits (even)",
        "345 has 3 digits (odd)",
        "2 has 1 digit (odd)",
        "6 has 1 digit (odd)",
        "7896 has 4 digits (even)"
      ]
    },
    {
      "input": [555, 901, 482, 1771],
      "output": 1,
      "explanation": [
        "555 has 3 digits (odd)",
        "901 has 3 digits (odd)",
        "482 has 3 digits (odd)",
        "1771 has 4 digits (even)"
      ]
    }
  ],
  "constraints": {
    "nums.length": "1 <= nums.length <= 500",
    "nums[i]": "1 <= nums[i] <= 100000"
  }
}
"""