from rest_framework import serializers

from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.EmailField(style={"placeholder": "johnDoe123"}, required=True)
    password = serializers.CharField(style={'input_type': 'password'}, required=True)
    re_password = serializers.CharField(style={'input_type': 'password'},label="Confirm Password", required=True)

    class Meta:
        model = User
        fields = ["username", "password", "re_password"]


class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(style={"placeholder": "Enter username or email"})
    password = serializers.CharField(style={"input_type": "password"})

    class Meta:
        model = User
        fields = ["username", "password"]