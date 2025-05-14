from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Newsletter
from .serializers import NewsletterSerializer

import requests
from user_app.views import TokenReq
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)

from openai import OpenAI
from decouple import config
MY_API_KEY = config('MY_API_KEY')
OPENAI_API_KEY = config('OPENAI_API_KEY')
openai_client = OpenAI(api_key=OPENAI_API_KEY)



class DailyNewsletter(APIView):
    def AI_newsletter(date):
        response = openai_client.responses.create(
        model="gpt-4.1",
        input= f"""

        For this date: {date} give me a full-on report about the new developments programming, 
        coding, AI or the tech industry. I want all the information returned Within <> </> 
        which should contain jsx code which I can paste into my react front end with beautiful 
        Tailwind styling. Use the code below as a template and replace the information as 
        needed. Make sure to start and end the code with "@@@" even if it doesn't make sense 
        or is functional. And only return the code in a string.
@@@
<div className="bg-gray-100 min-h-screen py-10 px-6">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">
      🧠 Tech & AI Industry Report — May 12, 2025
    </h1>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        🚀 AI & Programming Innovations
      </h2>
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">OpenAI GPT-4.1</h3>
          <p className="text-gray-700">
            OpenAI released GPT-4.1, with a massive 1 million-token context window, further improved reasoning, and better coding support. It excels on SWE-bench and is heavily integrated into IDEs via tool use.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Claude 3.5 and Context Sharing</h3>
          <p className="text-gray-700">
            Anthropic launched Claude 3.5 with even more advanced reasoning capabilities and new "Context Sharing" tools, allowing it to remember and pass information across sessions more efficiently.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Meta Llama 3 Expanded</h3>
          <p className="text-gray-700">
            Meta announced the expansion of Llama 3 models, including a 400B parameter version expected later this year. The models are open-weight and power several cutting-edge research applications.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Mistral Codestral</h3>
          <p className="text-gray-700">
            Mistral introduced Codestral, a code-specific LLM optimized for software engineering tasks like debugging, documentation, and refactoring. It supports many programming languages and offers blazing-fast inference.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jule: A New Reactive Backend Framework</h3>
          <p className="text-gray-700">
            Jule, an open-source reactive framework written in Rust, has gained traction for building high-performance web backends with full type safety and minimal boilerplate. It integrates AI-powered code scaffolding as a core feature.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        📈 Industry Shifts & Market Trends
      </h2>
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">AI Chip Race Heats Up</h3>
          <p className="text-gray-700">
            Nvidia, AMD, and Intel are racing to release next-gen AI chips. Nvidia's Blackwell GPUs have seen record-breaking demand from hyperscalers, while AMD's MI400 line promises more energy-efficient AI computation.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Google’s Project Astra Announced</h3>
          <p className="text-gray-700">
            Google unveiled Project Astra, a real-time multimodal AI agent capable of voice conversations, live visual input interpretation, and memory retention. It's built on Gemini 1.5 and aims to redefine virtual assistance.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">China’s New Open Model Initiative</h3>
          <p className="text-gray-700">
            The Chinese government launched an initiative to support open-source AI development. Major tech firms like Baidu and Alibaba have pledged models and compute power to foster global collaboration and model transparency.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Global Dev Hiring Trends</h3>
          <p className="text-gray-700">
            Developer hiring is shifting toward LLM integration, prompt engineering, and DevOps with AI workflows. Companies prioritize AI fluency and productivity over traditional stack mastery.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">
        🛠️ AI Tools for Developers
      </h2>
      <div className="space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Cursor AI IDE Gains Traction</h3>
          <p className="text-gray-700">
            Cursor, an AI-first coding environment, continues growing in popularity. It offers inline completions, natural language code editing, and one-click refactors powered by GPT-4.1 and Claude 3.5.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">AI DevOps with Continual</h3>
          <p className="text-gray-700">
            Continual released new AI Ops tools that automatically monitor ML pipelines and trigger intelligent retraining, rollback, or alert workflows—paving the way for more autonomous AI lifecycle management.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-red-700 mb-4">
        ⚖️ AI & Copyright Concerns
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">EU AI Act Finalized</h3>
        <p className="text-gray-700">
          The European Union passed the AI Act, setting strict guidelines for model transparency, risk categorization, and prohibited use cases. It includes mandatory disclosures for training data and model usage logs.
        </p>
      </div>
    </section>

    <footer className="text-center text-gray-500 mt-10">
      <p>Data compiled as of May 12, 2025.</p>
    </footer>
  </div>
</div>
        @@@
        """ 
        )
        # print(response.output_text)
        return response.output_text
    
    def REFORMATED_newsletter(ai_result):
        start = ai_result.find("@@@")
        end = ai_result.rfind("@@@")
        result = ai_result[start+3:end]
        print(result)
        return result

    def get(self,request,date):
        result = Newsletter.objects.filter(date= date)
        resultSer = NewsletterSerializer(result, many=True)

        if len(resultSer.data) == 0:
            response_AI = DailyNewsletter.AI_newsletter(date)
            clean_JSX = DailyNewsletter.REFORMATED_newsletter(response_AI)

            newNewsletter = Newsletter.objects.create(date=date, html=clean_JSX)
            newNewsletterSer = NewsletterSerializer(newNewsletter)
            return Response(newNewsletterSer)
        else:
            return Response(resultSer.data[0])