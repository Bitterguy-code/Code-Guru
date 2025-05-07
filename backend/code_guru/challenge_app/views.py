from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Challenge, Answer
from .serializers import ChallengeSerializer
import requests
from user_app.views import TokenReq
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
import html
from openai import OpenAI
from decouple import config
MY_API_KEY = config('MY_API_KEY')

from openai import OpenAI
OPENAI_API_KEY = config('OPENAI_API_KEY')
openai_client = OpenAI(api_key=OPENAI_API_KEY)




class DailyChallenge(APIView):

  def IDK_unencoded_HTML(encoded_HTML):
    result = encoded_HTML.encode().decode('unicode_escape')
    clean_HTML = html.unescape(result)
    return clean_HTML
  
  def REFORMATED_AI_JSX(AI_response):
    start_string = AI_response.find("html_string = ")
    end_string = AI_response.rfind("</>")
    print(start_string,end_string)
    ready_JSX = AI_response[start_string+20:end_string]
    return ready_JSX

  def AI_HTML_TO_JSX(ruff_html):
     AIcontent = f"""
          Clean and Render React Code with Tailwind
          Return me the first set of code as similar as possible to the second set of code. Clean it up so I can render on react properly so attention in trying have the tailwind similar as possible especially when it comes to the <pre/>. Sure it can render properly on react by correcting "<",">". Make sure to include proper spacing between words. But around the <pre> or "Explanation:" keep the spacing tight and get rid of and necessary /n.

          first code:
          {ruff_html}
          second code:
          <>
            <p className="text-base sm:text-lg mb-4 break-words">
              You have <code className="bg-gray-100 px-1 py-0.5 rounded">n</code> tasks and
              <code className="bg-gray-100 px-1 py-0.5 rounded">m</code> workers. Each task has a strength
              requirement stored in a <strong className="font-semibold">0-indexed</strong> integer array
              <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code>, with the
              <code className="bg-gray-100 px-1 py-0.5 rounded">i<sup>th</sup></code> task requiring
              <code className="bg-gray-100 px-1 py-0.5 rounded">tasks[i]</code> strength to complete. The strength of each worker is stored in a
              <strong className="font-semibold">0-indexed</strong> integer array
              <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code>, with the
              <code className="bg-gray-100 px-1 py-0.5 rounded">j<sup>th</sup></code> worker having
              <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j]</code> strength. Each worker can only be assigned to a
              <strong className="font-semibold">single</strong> task and must
              have a strength <strong className="font-semibold">greater than or equal</strong> to the task’s strength requirement (i.e.,
              <code className="bg-gray-100 px-1 py-0.5 rounded">workers[j] &gt;= tasks[i]</code>).
            </p>

            <p className="text-base sm:text-lg mb-4 break-words">
              Additionally, you have
              <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> magical pills that will
              <strong className="font-semibold">increase a worker’s strength</strong> by
              <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>. You can decide which
              workers receive the magical pills, however, you may only give each worker
              <strong className="font-semibold">at most one</strong> magical pill.
            </p>

            <p className="text-base sm:text-lg mb-6 break-words">
              Given the <strong className="font-semibold">0-indexed</strong> integer arrays
              <code className="bg-gray-100 px-1 py-0.5 rounded">tasks</code> and
              <code className="bg-gray-100 px-1 py-0.5 rounded">workers</code> and the integers
              <code className="bg-gray-100 px-1 py-0.5 rounded">pills</code> and
              <code className="bg-gray-100 px-1 py-0.5 rounded">strength</code>, return
              <em>
                the <strong className="font-semibold">maximum</strong> number of tasks that can be
                completed.
              </em>
            </p>

            <div className="mb-6">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                <strong className="block">Example 1:</strong>
              </h2>




              <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
                <strong className="block">Input:</strong>
                tasks = [3, 2, 1], workers = [0, 3, 3], pills = 1, strength = 1
                <strong className="block">Output:</strong>
                3
                <strong className="block">Explanation:</strong>
                We can assign the magical pill and tasks as follows:<br/>
                - Give the magical pill to worker 0.<br/>
                - Assign worker 0 to task 2 (0 + 1 &gt;= 1)<br/>
                - Assign worker 1 to task 1 (3 &gt;= 2)<br/>
                - Assign worker 2 to task 0 (3 &gt;= 3)<br/>
              </pre>



            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                <strong className="block">Example 2:</strong>
              </h2>


              <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
                <strong className="block">Input:</strong>
                tasks = [5, 4], workers = [0, 0, 0], pills = 1, strength = 5
                <strong className="block">Output:</strong>
                1
                <strong className="block">Explanation:</strong>
                - Give the magical pill to worker 0.<br/>
                - Assign worker 0 to task 0 (0 + 5 &gt;= 5)<br/>
              </pre>


            </div>

            <div className="mb-6">
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                <strong className="block">Example 3:</strong>
              </h2>


              <pre className="bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words">
                <strong className="block">Input:</strong>
                tasks = [10, 15, 30], workers = [0, 10, 10, 10, 10], pills = 3, strength = 10
                <strong className="block">Output:</strong>
                2
                <strong className="block">Explanation:</strong> 
                - Give the magical pill to worker 0 and worker 1.<br/>
                - Assign worker 0 to task 0 (0 + 10 &gt;= 10)<br/>
                - Assign worker 1 to task 1 (10 + 10 &gt;= 15)<br/>
                - The last pill is not given because it will not make any worker strong enough for the last task.<br/>
              </pre>


            </div>

            <div>
              <h2 className="text-lg font-bold text-indigo-700 mb-2">
                <strong className="block">Constraints:</strong>
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base break-words">
                <li>
                  <code className="bg-gray-100 px-1 py-0.5 rounded block">
                    n == tasks.length
                  </code>
                </li>
                <li>
                  <code className="bg-gray-100 px-1 py-0.5 rounded block">
                    m == workers.length
                  </code>
                </li>
                <li>
                  <code className="bg-gray-100 px-1 py-0.5 rounded block">
                    1 &lt;= n, m &lt;= 5 * 10<sup>4</sup>
                  </code>
                </li>
                <li>
                  <code className="bg-gray-100 px-1 py-0.5 rounded block">
                    0 &lt;= pills &lt;= m
                  </code>
                </li>
                <li>
                  <code className="bg-gray-100 px-1 py-0.5 rounded block">
                    0 &lt;= tasks[i], workers[j], strength &lt;= 10<sup>9</sup>
                  </code>
                </li>
              </ul>
            </div>
          </>


          At the end return me a python variable with the name "html_string" that has all the code in triple quotation so I can save to my back end with django text field
          """
     
     client = OpenAI(api_key= MY_API_KEY, base_url="https://api.deepseek.com")
     response = client.chat.completions.create(
     model="deepseek-chat",
     messages=[
          {"role": "user", "content": AIcontent},
      ],
     stream=False
      )
    #  print(response.choices[0].message.content)
    #  format_JSX = DailyChallenge.REFORMATED_AI_JSX(response.choices[0].message.content)
     return response.choices[0].message.content 

  def leetcode_API():
    url = "https://alfa-leetcode-api.onrender.com/daily"
    response = requests.get(url)
    if response.status_code == 200:
      return response.json()
    else: 
      return Response("'alfa-leetcode-api.onrender.com' is messing up", status=HTTP_404_NOT_FOUND)

  def chatGPT():
    response = openai_client.responses.create(
      model="gpt-4.1",
      input="""\n  <p className=\"text-base sm:text-lg mb-4 break-words\">\n    Given a <strong className=\"font-semibold\">zero-based permutation</strong> <code className=\"bg-gray-100 px-1 py-0.5 rounded\">nums</code> (<strong className=\"font-semibold\">0-indexed</strong>), build an array <code className=\"bg-gray-100 px-1 py-0.5 rounded\">ans</code> of the <strong className=\"font-semibold\">same length</strong> where <code className=\"bg-gray-100 px-1 py-0.5 rounded\">ans[i] = nums[nums[i]]</code> for each <code className=\"bg-gray-100 px-1 py-0.5 rounded\">0 &lt;= i &lt; nums.length</code> and return it.\n  </p>\n\n  <p className=\"text-base sm:text-lg mb-4 break-words\">\n    A <strong className=\"font-semibold\">zero-based permutation</strong> <code className=\"bg-gray-100 px-1 py-0.5 rounded\">nums</code> is an array of <strong className=\"font-semibold\">distinct</strong> integers from <code className=\"bg-gray-100 px-1 py-0.5 rounded\">0</code> to <code className=\"bg-gray-100 px-1 py-0.5 rounded\">nums.length - 1</code> (<strong className=\"font-semibold\">inclusive</strong>).\n  </p>\n\n  <div className=\"mb-6\">\n    <h2 className=\"text-lg font-bold text-indigo-700 mb-2\">\n      <strong className=\"block\">Example 1:</strong>\n    </h2>\n    <pre className=\"bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words\">\n      <strong className=\"block\">Input:</strong> nums = [0,2,1,5,3,4]\n      <strong className=\"block\">Output:</strong> [0,1,2,4,5,3]\n      <strong className=\"block\">Explanation:</strong> The array ans is built as follows: \n      ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]\n          = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]\n          = [0,1,2,4,5,3]\n    </pre>\n  </div>\n\n  <div className=\"mb-6\">\n    <h2 className=\"text-lg font-bold text-indigo-700 mb-2\">\n      <strong className=\"block\">Example 2:</strong>\n    </h2>\n    <pre className=\"bg-gray-50 border border-gray-200 rounded p-4 overflow-x-auto text-sm break-words\">\n      <strong className=\"block\">Input:</strong> nums = [5,0,1,2,3,4]\n      <strong className=\"block\">Output:</strong> [4,5,0,1,2,3]\n      <strong className=\"block\">Explanation:</strong> The array ans is built as follows:\n      ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]\n          = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]\n          = [4,5,0,1,2,3]\n    </pre>\n  </div>\n\n  <div>\n    <h2 className=\"text-lg font-bold text-indigo-700 mb-2\">\n      <strong className=\"block\">Constraints:</strong>\n    </h2>\n    <ul className=\"list-disc pl-5 space-y-1 text-sm sm:text-base break-words\">\n      <li>\n        <code className=\"bg-gray-100 px-1 py-0.5 rounded block\">\n          1 &lt;= nums.length &lt;= 1000\n        </code>\n      </li>\n      <li>\n        <code className=\"bg-gray-100 px-1 py-0.5 rounded block\">\n          0 &lt;= nums[i] &lt; nums.length\n        </code>\n      </li>\n      <li>\n        <code className=\"bg-gray-100 px-1 py-0.5 rounded block\">\n          The elements in <code className=\"bg-gray-100 px-1 py-0.5 rounded\">nums</code> are <strong className=\"font-semibold\">distinct</strong>.\n        </code>\n      </li>\n    </ul>\n  </div>\n\n  <p className=\"text-base sm:text-lg mt-6 break-words\">\n    <strong className=\"font-semibold\">Follow-up:</strong> Can you solve it without using an extra space (i.e., <code className=\"bg-gray-100 px-1 py-0.5 rounded\">O(1)</code> memory)?\n  </p>\n"
        Take this leetcode example and return me an example variable named "input" with ### at the end and a variable name "output" with @@@ at the end   in javascrit and Python"""
    )
    print(response.output_text)





  def get(self,request,date):
      # testDate = '2025-04-30'
      result = Challenge.objects.filter(date__date= date)
      resultSer = ChallengeSerializer(result, many=True)

      if len(resultSer.data) == 0:
        data = DailyChallenge.leetcode_API()
        ready_HTML = DailyChallenge.IDK_unencoded_HTML(data["question"])
        big_AI_response = DailyChallenge.AI_HTML_TO_JSX(ready_HTML)
        ready_JSX = DailyChallenge.REFORMATED_AI_JSX(big_AI_response)
        

        dailyDataFormatted = {
          "date": data["date"],
          "questionLink": data["questionLink"],
          "questionTitle": data["questionTitle"],
          "difficulty": data["difficulty"],
          "question": data["question"],
          "hints": data["hints"],
          "html": ready_JSX,
        }

        newChallenge = Challenge.objects.create(**dailyDataFormatted)
        return Response(newChallenge)
      else:
        # ready_JSX = DailyChallenge.AI_HTML_TO_JSX(resultSer.data[0]["question"])
        # result[0].setHTML(ready_JSX)
        DailyChallenge.chatGPT()
        return Response(resultSer.data[0])
  





class DailyAnswer(TokenReq):
  def post(self,request):
    the_account = request.auth.user.account
    challenge_id = request.data["challengeID"]
    the_challenge = Challenge.objects.get(id= challenge_id)
    the_answer = Answer.objects.get(account= the_account, challenge= the_challenge)      
    return Response({"answer": the_answer.code})
  """
  {"challengeID": 20}
  """      


  def put(self, request):
    the_account = request.auth.user.account
    challenge_id = request.data["challengeID"]
    answer_code = request.data["answerCode"]
    the_challenge = Challenge.objects.get(id= challenge_id)

    the_answer, created = Answer.objects.get_or_create(account= the_account, challenge= the_challenge)
    # print(the_account.answer.get(challenge = challenge_id))

    the_answer.setCode(answer_code)
    print(the_answer.code)
    # print(the_answer.code)
    return Response(f"{the_answer} successfully Modified")    
  """
  {"challengeID": 20, "answerCode": "fgfgfgdffgfgffgdfggfdgfgd"}
  """   





















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
"""
{
  "questionLink": "https://leetcode.com/problems/push-dominoes/",
  "date": "2025-05-02",
  "questionId": "868",
  "questionFrontendId": "838",
  "questionTitle": "Push Dominoes",
  "titleSlug": "push-dominoes",
  "difficulty": "Medium",
  "isPaidOnly": false,
  "question": "\u003Cp\u003EThere are \u003Ccode\u003En\u003C/code\u003E dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.\u003C/p\u003E\n\n\u003Cp\u003EAfter each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.\u003C/p\u003E\n\n\u003Cp\u003EWhen a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.\u003C/p\u003E\n\n\u003Cp\u003EFor the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.\u003C/p\u003E\n\n\u003Cp\u003EYou are given a string \u003Ccode\u003Edominoes\u003C/code\u003E representing the initial state where:\u003C/p\u003E\n\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ccode\u003Edominoes[i] = &#39;L&#39;\u003C/code\u003E, if the \u003Ccode\u003Ei\u003Csup\u003Eth\u003C/sup\u003E\u003C/code\u003E domino has been pushed to the left,\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003Edominoes[i] = &#39;R&#39;\u003C/code\u003E, if the \u003Ccode\u003Ei\u003Csup\u003Eth\u003C/sup\u003E\u003C/code\u003E domino has been pushed to the right, and\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003Edominoes[i] = &#39;.&#39;\u003C/code\u003E, if the \u003Ccode\u003Ei\u003Csup\u003Eth\u003C/sup\u003E\u003C/code\u003E domino has not been pushed.\u003C/li\u003E\n\u003C/ul\u003E\n\n\u003Cp\u003EReturn \u003Cem\u003Ea string representing the final state\u003C/em\u003E.\u003C/p\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 1:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E dominoes = &quot;RR.L&quot;\n\u003Cstrong\u003EOutput:\u003C/strong\u003E &quot;RR.L&quot;\n\u003Cstrong\u003EExplanation:\u003C/strong\u003E The first domino expends no additional force on the second domino.\n\u003C/pre\u003E\n\n\u003Cp\u003E\u003Cstrong class=\"example\"\u003EExample 2:\u003C/strong\u003E\u003C/p\u003E\n\u003Cimg alt=\"\" src=\"https://s3-lc-upload.s3.amazonaws.com/uploads/2018/05/18/domino.png\" style=\"height: 196px; width: 512px;\" /\u003E\n\u003Cpre\u003E\n\u003Cstrong\u003EInput:\u003C/strong\u003E dominoes = &quot;.L.R...LR..L..&quot;\n\u003Cstrong\u003EOutput:\u003C/strong\u003E &quot;LL.RR.LLRRLL..&quot;\n\u003C/pre\u003E\n\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConstraints:\u003C/strong\u003E\u003C/p\u003E\n\n\u003Cul\u003E\n\t\u003Cli\u003E\u003Ccode\u003En == dominoes.length\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003E1 &lt;= n &lt;= 10\u003Csup\u003E5\u003C/sup\u003E\u003C/code\u003E\u003C/li\u003E\n\t\u003Cli\u003E\u003Ccode\u003Edominoes[i]\u003C/code\u003E is either \u003Ccode\u003E&#39;L&#39;\u003C/code\u003E, \u003Ccode\u003E&#39;R&#39;\u003C/code\u003E, or \u003Ccode\u003E&#39;.&#39;\u003C/code\u003E.\u003C/li\u003E\n\u003C/ul\u003E\n",
  "exampleTestcases": "\"RR.L\"\n\".L.R...LR..L..\"",
  "topicTags": [
    {
      "name": "Two Pointers",
      "slug": "two-pointers",
      "translatedName": null
    },
    {
      "name": "String",
      "slug": "string",
      "translatedName": null
    },
    {
      "name": "Dynamic Programming",
      "slug": "dynamic-programming",
      "translatedName": null
    }
  ],
  "hints": [],
  "solution": {
    "id": "470",
    "canSeeDetail": true,
    "paidOnly": false,
    "hasVideoSolution": false,
    "paidOnlyVideo": true
  },
  "companyTagStats": null,
  "likes": 3793,
  "dislikes": 259,
  "similarQuestions": "[]"
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
