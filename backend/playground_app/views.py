from rest_framework.views import APIView
from rest_framework.response import Response
from user_app.views import TokenReq
from openai import OpenAI
from decouple import config
MY_API_KEY = config('MY_API_KEY')
OPENAI_API_KEY = config('OPENAI_API_KEY')
openai_client = OpenAI(api_key=OPENAI_API_KEY)



  
class Playground(TokenReq):
    def AI_playground(language, code, question):
        response = openai_client.responses.create(
        model="gpt-4.1",
        input= f"""
            {language}
            {code}
            {question}
        """ 
        )
        return response.output_text
    
    def put(self,request):
        language = request.data["language"]
        code = request.data["code"]
        question = request.data["question"]
        result = Playground.AI_playground(language, code, question)
        # print(result)
        return Response(result)