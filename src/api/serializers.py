from rest_framework import serializers
from .models import Todo


class TodoSerialiers(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:

        model = Todo
        fields = "__all__"
