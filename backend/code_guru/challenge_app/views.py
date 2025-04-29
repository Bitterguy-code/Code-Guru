from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests


class Challenge(APIView):
    def get(self,request):
        LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql'
        DAILY_CODING_CHALLENGE_QUERY = '''
        query questionOfToday {
        activeDailyCodingChallengeQuestion {
            date
            userStatus
            link
            question {
            acRate
            difficulty
            freqBar
            frontendQuestionId: questionFrontendId
            isFavor
            paidOnly: isPaidOnly
            status
            title
            titleSlug
            hasVideoSolution
            hasSolution
            topicTags {
                name
                id
                slug
            }
            }
        }
        }
        '''

        # def fetch_daily_coding_challenge():
        print("Fetching daily coding challenge from LeetCode API.")

        headers = {
            'Content-Type': 'application/json'
        }

        payload = {
            'query': DAILY_CODING_CHALLENGE_QUERY
        }

        response = requests.post(LEETCODE_API_ENDPOINT, json=payload, headers=headers)


        print(response.json())
        if response.status_code == 200:
            return Response(response.json())
        # else:
        #     raise Exception(f"Query failed with status code {response.status_code}: {response.text}")
        
        return Response('hi')
