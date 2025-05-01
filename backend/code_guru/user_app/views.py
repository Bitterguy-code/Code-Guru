from .models import User
from account_app.models import Account
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)


class Sign_Up(APIView):
    def post(self,request):
        try:
            new_user = User.objects.create_user(**request.data) #username, email, password
            new_user_token = Token.objects.create(user=new_user) 
            new_user_profile = Account.objects.create(user=new_user)
            return Response(
                {"username":new_user.username, "token":new_user_token.key}, status=HTTP_201_CREATED
            )
        except Exception as e:
            return Response("Username or Email already exit")
"""
input: {"username":"kennywelcome","email":"kenny@gmail.com","password":"12345678"}
output: {"username":"kennywelcome", "token":"73ae179ee705ce29b4a024b0a1f6d2961fd46258"}
"""


class Log_In(APIView):
    def post(self,request):
        search_user = authenticate(**request.data) 
        if search_user: 
            user_token, is_created = Token.objects.get_or_create(user=search_user)
            return Response({"username":search_user.username,"token":user_token.key})
        else:
            return Response("Wrong email or password")
"""
input: {"username":"kennywelcome","password":"12345678"}
output: {"username":"kennywelcome", "token":"73ae179ee705ce29b4a024b0a1f6d2961fd46258"}

'TODO: DOC: "EXPLAIN WHATS GOING ON"'
'TODO: A CHECK AND RETURN A ERROR IF USER ALREADY EXIT'
'TODO: EMAIL AND USERNAME LOG IN'
username auth 
email auth
authenticate
Token get_or_create
"""



class TokenReq(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
'TODO: DOC: "EXPLAIN WHATS GOING ON"'



class Log_Out(TokenReq):
    def delete(self,request):
        try:
            request.user.auth_token.delete()
            return Response("Successfully Deleted User's Token",status=HTTP_204_NO_CONTENT)
        except Exception:
            return Response("User's Token already deleted or does not exist")
"""
The request must have a token in the headers
"""
        