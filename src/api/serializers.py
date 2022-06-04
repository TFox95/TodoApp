from rest_framework import serializers
from .models import Todo, Category, Priority


class TodoSerializers(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:

        model = Todo
        fields = "__all__"

class CategorySerializers(serializers.ModelSerializer):
    class Meta:

        model = Category
        fields = "__all__"

class PrioritySerializers(serializers.ModelSerializer):
    class Meta:

        model = Priority
        fields = "__all__"