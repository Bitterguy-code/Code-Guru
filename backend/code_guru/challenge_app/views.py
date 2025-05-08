from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Challenge, Answer
from .serializers import ChallengeSerializer, AnswerSerializer
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
  def API_leetcode():
      url = "https://alfa-leetcode-api.onrender.com/daily"
      response = requests.get(url)
      if response.status_code == 200:
        return response.json()
      else: 
        return Response("'alfa-leetcode-api.onrender.com' is messing up", status=HTTP_404_NOT_FOUND)

  def REFORMATED_unencoded_HTML(encoded_HTML):
    result = encoded_HTML.encode().decode('unicode_escape')
    clean_HTML = html.unescape(result)
    return clean_HTML
  
  def AI_HTML_TO_JSX(clean_HTML):
     AIcontent = f"""
          Clean and Render React Code with Tailwind
          Return me the first set of code as similar as possible to the second set of code. Clean it up so I can render on react properly so attention in trying have the tailwind similar as possible especially when it comes to the <pre/>. Sure it can render properly on react by correcting "<",">". Make sure to include proper spacing between words. But around the <pre> or "Explanation:" keep the spacing tight and get rid of and necessary /n.

          first code:
          {clean_HTML}
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
     return response.choices[0].message.content

  def REFORMATED_AI_JSX(AI_response):
    start_string = AI_response.find("html_string = ")
    end_string = AI_response.rfind("</>")
    print(start_string,end_string)
    ready_JSX = AI_response[start_string+20:end_string]
    return ready_JSX

   
  def AI_input_and_output(jsx):
    response = openai_client.responses.create(
      model="gpt-4.1",
      input= f"""
      {jsx}
      Take this leetcode example and return me an example like in this format below even if the code does not make sense.

      one example in javascipt:
      @let input = "example"$
      @let output = "example"$
      or
      @let input = "moveTime = [[0,4],[4,4]]"$
      @let output = "6"$


      one example in python:
      ~input = "example"&
      ~output = "example"&
      or
      ~input = "moveTime = [[0,4],[4,4]]"&
      ~output = "6"&
      """ 
      )
    return response.output_text
  
  def REFORMATED_input_and_output(input_and_output_string):
    # JavaScript format:
    start_input = input_and_output_string.find("@let input = ")
    end_input = input_and_output_string.find("$")
    start_output = input_and_output_string.rfind("@let output = ")
    end_output = input_and_output_string.rfind("$")
    input_JavaScript = input_and_output_string[start_input+14:end_input-1]
    output_JavaScript = input_and_output_string[start_output+15:end_output-1]
    #Python
    start_input = input_and_output_string.find("~input = ")
    end_input = input_and_output_string.find("&")
    start_output = input_and_output_string.rfind("~output = ")
    end_output = input_and_output_string.rfind("&")
    input_Python = input_and_output_string[start_input+10:end_input-1]
    output_Python = input_and_output_string[start_output+11:end_output-1]
    return input_JavaScript, output_JavaScript, input_Python, output_Python




  def get(self,request,date):
    result = Challenge.objects.filter(date__date= date)
    resultSer = ChallengeSerializer(result, many=True)

    if len(resultSer.data) == 0:
      data = DailyChallenge.API_leetcode()
      clean_HTML = DailyChallenge.REFORMATED_unencoded_HTML(data["question"])
      response_AI = DailyChallenge.AI_HTML_TO_JSX(clean_HTML)
      clean_JSX = DailyChallenge.REFORMATED_AI_JSX(response_AI)
      input_and_output_string = DailyChallenge.AI_input_and_output(clean_JSX)
      input_J, output_J, input_P, output_P = DailyChallenge.REFORMATED_input_and_output(input_and_output_string)

      dailyDataFormatted = {
        "date": data["date"],
        "questionLink": data["questionLink"],
        "questionTitle": data["questionTitle"],
        "difficulty": data["difficulty"],
        "question": data["question"],
        "hints": data["hints"],
        "html": clean_JSX,
        "input_J": input_J,
        "output_J": output_J,
        "input_P": input_P,
        "output_P": output_P,
      }

      newChallenge = Challenge.objects.create(**dailyDataFormatted)
      return Response(newChallenge)
    else:
      # ALTER PAST CHALLENGE|HTML
      # ready_JSX = DailyChallenge.AI_HTML_TO_JSX(resultSer.data[0]["question"])
      # response_AI = DailyChallenge.AI_HTML_TO_JSX(clean_HTML)
      # clean_JSX = DailyChallenge.REFORMATED_AI_JSX(response_AI)
      # result[0].setHTML(ready_JSX)

      # ALTER PAST CHALLENGE|INPUT,OUTPUT(J&P)
      # input_and_output_string = DailyChallenge.AI_input_and_output(resultSer.data[0]["html"])
      # input_J, output_J, input_P, output_P = DailyChallenge.REFORMATED_input_and_output(input_and_output_string)
      # result[0].set_Input_And_Output(input_J, output_J, input_P, output_P)
      # resultSer = ChallengeSerializer(result, many=True)
      return Response(resultSer.data[0])
  





class DailyAnswer(TokenReq):

  def AI_check_answer(challenge, code, language):
    if language == "python":
      input_Cha = challenge.input_P
      output_Cha = challenge.output_P
    elif language == "javascript":
      input_Cha = challenge.input_J
      output_Cha = challenge.output_J

    response = openai_client.responses.create(
      model="gpt-4.1",
      input= f"""
      Want you to take this leetcode “question” below with the following “input” and “expected output” 
      in the specified coding “language” and check if the “user code response”  results in the “expected  output”.

      If the “user code response” results in the “expected output”  return only the following:
      @@@True@@@ $$$"the output of the user's code"$$$
      like @@@True@@@ $$$10$$$

      Else If the “user code response” does not results in the “expected output” return only the following:
      @@@False@@@ $$$"the output of the user's code"$$$
      like @@@False@@@ $$$10$$$

  
      question:
      {challenge.html}
      
      input: {input_Cha}
      expected output:{output_Cha}
      language: {language}

      user code response:
      {code}
      """ 
    )
    print(response.output_text)
    return response.output_text


  def REFORMAT_AI_answer(ai_result):
    # print(ai_result,"&&&&")
    start_solve = ai_result.find("@@@")
    end_solve = ai_result.rfind("@@@")
    start_result = ai_result.find("$$$")
    end_result = ai_result.rfind("$$$")

    solve = ai_result[start_solve+3:end_solve]
    result = ai_result[start_result+3:end_result]
    return solve, result


    

  def get(self,request):
    the_account = request.auth.user.account
    all_answer = Answer.objects.filter(solve=True)
    all_answer_Ser = AnswerSerializer(all_answer, many=True)
    return Response(all_answer_Ser.data)

  # def post(self,request):
  #   the_account = request.auth.user.account
  #   challenge_id = request.data["challengeID"]
  #   the_challenge = Challenge.objects.get(id= challenge_id)
  #   the_answer = Answer.objects.get(account= the_account, challenge= the_challenge)      
  #   return Response({"answer": the_answer.code})
  # """
  # {"challengeID": 20}
  # """      


  def put(self, request):
    the_account = request.auth.user.account
    challenge_id = request.data["challengeID"]
    answer_code = request.data["answerCode"]
    print(answer_code)
    answer_language = request.data["answerLanguage"]
    the_challenge = Challenge.objects.get(id= challenge_id)
    ai_result = DailyAnswer.AI_check_answer(the_challenge, answer_code, answer_language)
    solve, result = DailyAnswer.REFORMAT_AI_answer(ai_result)
    # print("@@@@@@###")
    # print(solve, result)

    the_answer, created = Answer.objects.get_or_create(account= the_account, challenge= the_challenge)
    the_answer.setCode(answer_code)
    the_answer.setLanguage(answer_language)
    the_answer.setSolve(solve)
    return Response({"message":f"{the_answer} successfully Created or Modified","solve": solve, "userCodeResult": result})    
  """ input
    {"challengeID": 28, "answerCode": "import heapq\n\ndef minimumTime(moveTime):\n    n, m = len(moveTime), len(moveTime[0])\n    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # Right, Down, Left, Up\n    visited = [[[float('inf')] * 2 for _ in range(m)] for _ in range(n)]\n    heap = [(0, 0, 0, 0)]  # (current_time, row, col, parity)\n\n    visited[0][0][0] = 0\n\n    while heap:\n        time, x, y, parity = heapq.heappop(heap)\n        if (x, y) == (n - 1, m - 1):\n            return time\n\n        for dx, dy in directions:\n            nx, ny = x + dx, y + dy\n            if 0 <= nx < n and 0 <= ny < m:\n                move_cost = 1 if parity == 0 else 2\n                arrival_time = max(time + move_cost, moveTime[nx][ny])\n                new_parity = 1 - parity\n                if visited[nx][ny][new_parity] > arrival_time:\n                    visited[nx][ny][new_parity] = arrival_time\n                    heapq.heappush(heap, (arrival_time, nx, ny, new_parity))\n\n# Example usage:\nmoveTime = [[0,1,2],[2,3,4],[5,6,7]]\nprint(minimumTime(moveTime))", "answerLanguage": "python"}
  """   
  """
  {
  "message": "(Answer of (kennywelcome' account) for Challenge(2025-05-08 00:00:00+00:00)) successfully Created or Modified",
  "solve": "True",
  "userCodeResult": "10"
  }
  """
