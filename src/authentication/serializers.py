from rest_framework import serializers

from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(style={'input_type': 'password'})
    re_password = serializers.CharField(style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ["username", "password", "re_password"]


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(style={"input_type": "password"})

    class Meta:
        model = User
        fields = ["username", "password"]