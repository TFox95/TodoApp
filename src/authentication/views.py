from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib import auth
from rest_framework.response import Response

class SignupView(APIView):

    permission_classes= (permissions.AllowAny, )

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
    
    permission_classes= (permissions.AllowAny, )

    def post(self, request, format= None):

        LoginCred= {
            "username": self.request.data["username"],
            "password": self.request.data["password"],
        }

        try:
            if LoginCred["username"] and LoginCred["password"] is not None:
                user= auth.authenticate(request, username= LoginCred["username"], password= LoginCred["password"])
                if user is not None:
                    auth.login(request, user)
                    return Response({"success": "User Authenthicated"})
                else:
                    return Response({"error": "Error Authenticating"})

        except:
            return Response({"error": "Opps, Something went wrong "})


class LogoutView(APIView):
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