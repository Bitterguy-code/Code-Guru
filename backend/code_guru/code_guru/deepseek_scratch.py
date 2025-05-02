from decouple import config
from openai import OpenAI

#create API key @ https://platform.deepseek.com/api_keys
client = OpenAI(api_key=config('DEEPSEEK_API'), base_url='https://api.deepseek.com')

#put money into API key @ https://platform.deepseek.com/top_up
response = client.chat.completions.create(
    model='deepseek-chat',
    messages=[
        {'role':'system', 'content':'You are a helpful assistant'},
        {'role':'user', 'content':'hello'}
    ],
    stream=False
)

print(response.choices[0].message.content)


#Multiple round conversation
#Messages become an array
messages = [{'role':'user', 'content':'How much wood would a wood chuck chuck if a wood chuck could chuck wood?'}]

response = client.chat.completions.create(
    model='deepseek-chat',
    messages=messages
)

#Append deepseeks response to the messag array
messages.append(response.choices[0].message)
print(f'Message round 1: {messages}')
print(f'Response round 1: {response.choices[0].message.content}')

#Round 2
messages.append({'role':'user', 'content':'What is a wood chuck?'})
response = client.chat.completions.create(
    model='deepseek-chat',
    messages=messages
)

messages.append(response.choices[0].message)
print(f'Message Round 2: {messages}')
print(f'Response round 2: {response.choices[0].message.content}')