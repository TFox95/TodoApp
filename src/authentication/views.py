from django.contrib.auth.models import User
from django.contrib import auth
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, csrf_protect


from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response

from .serializers import RegisterSerializer, LoginSerializer

class SignupView(APIView):

    def __init__(self):
        self.permission_classes = [permissions.AllowAny]
        self.serializer_class = RegisterSerializer

    def post(self, request, format= None):
        data= self.request.data

        registerCred= {
            "username": data["username"],
            "password": data["password"],
            "re_password": data["re_password"],
        }
        
        try:
            if registerCred["password"] == registerCred["re_password"]:
                    if User.objects.filter(username=registerCred["username"]).exists():
                        return Response({"error": "Username already exists"})
                    else:
                        if len(registerCred["password"]) <= 6:
                            return Response({"error": "Password must be at least 7 characters long"})
                        else:
                            user= User.objects.create_user(username= registerCred["username"], password= registerCred["password"])
                            return Response({"success": f"User, {user.username} has been created Successfully!"})
            else:
                return Response({"error": "Passwords don't match"})
        except:
            return Response({"error": "Opps, Something went wrong"})


class LoginView(APIView):
    
    def __init__(self):
        self.permission_classes = [permissions.AllowAny]
        self.serializer_class = LoginSerializer

    def post(self, request, format= None):

        requestData= {}
        for key, value in self.request.data.items():
            requestData.update({str(key): str(value)})

        try:
            if requestData["username"] and requestData["password"] is not None:
                user= auth.authenticate(request, username= requestData["username"], password= requestData["password"])
                if user is not None:
                    auth.login(request, user)
                    return Response({"success": "User Authenthicated"})
                else:
                    return Response({"error": "Error Authenticating"})

        except:
            return Response({"error": "Opps, Something went wrong "})


class LogoutView(APIView):

    def __init__(self):
        self.permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format= None):

        try:
            user = self.request.user

            if user.is_active:
                auth.logout(request)
                return Response({"success": "Logged out"})
            else:
                return Response({"error": "user no logged in."})
        except:
            return Response({"error": "Something went wrong!"})