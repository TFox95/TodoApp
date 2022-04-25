from django.contrib.auth.models import User
from django.contrib import auth
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import (csrf_exempt, csrf_protect,
                                          ensure_csrf_cookie)


from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response as Res

from .serializers import RegisterSerializer, LoginSerializer

class EnsurecsrfToken(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.AllowAny]

    @method_decorator(ensure_csrf_cookie, name="dispatch")
    def get(self, request, *args):
        
        try:
            return Res(data={"success": "csrfToken has been ensured successfully"},
                        status=status.HTTP_201_CREATED)
        
        except:
            return Res(data={"error": "server error"},
                       status=status.HTTP_400_BAD_REQUEST)



class IsAuthenticatedView(APIView):
    
    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):

        user = self.request.user

        if user.is_authenticated:
            return  Res(data={"success": f"user, {user.username}, is currently authenticated and logged in"},
                        status=status.HTTP_200_OK)
        
        else:
            return Res(data={"error": "user is not currently logged in; Please Signup or Login"},
                        status=status.HTTP_401_UNAUTHORIZED)

    


class SignupView(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.AllowAny]
        self.serializer_class = RegisterSerializer

    def post(self, request, format= None):

        requestData= {}
        for key, item in self.request.data.items():
            requestData.update({str(key): str(item)})
        
        try:
            if requestData["password"] == requestData["re_password"]:
                    if User.objects.filter(username=requestData["username"]).exists():
                        return Res(data={"error": "Username already exists"})
                    else:
                        if len(requestData["password"]) <= 6:
                            return Res(data={"error": "Password must be at least 7 characters long"})
                        else:
                            user= User.objects.create_user(username= requestData["username"], password= requestData["password"])
                            return Res(data={"success": f"User, {user.username} has been created Successfully!"})
            else:
                return Res(data={"error": "Passwords don't match"})
        except:
            return Res(data={"error": "Opps, Something went wrong"})


class LoginView(APIView):
    
    def __init__(self):
        APIView.__init__(self)
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
                    return Res(data={"success": "User Authenthicated"})
                else:
                    return Res(data={"error": "Error Authenticating"})

        except:
            return Res(data={"error": "Opps, Something went wrong "})


class LogoutView(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]

    def post(self, request, format= None):

        try:
            user = self.request.user
            username = user.username

            if user.is_active:
                auth.logout(request)
                return Res(data={"success": f"{username} has been Logged out"},
                    )
            else:
                return Res(data={"error": "There's no user currently logged in"})
        except:
            return Res(data={"error": "Something went wrong!"})