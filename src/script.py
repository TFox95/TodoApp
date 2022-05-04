from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

def generateTokens():
    for user in User.objects.all():
        Token.objects.get_or_create(user=user)
        print('success!')

generateTokens()
