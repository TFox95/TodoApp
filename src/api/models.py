from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import datetime

# Create your models here.


class Category(models.Model):

    title = models.CharField(max_length=50)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title


class Priority(models.Model):

    level = models.CharField(max_length=75)

    class Meta:
        verbose_name_plural = "Priorities"

    def __str__(self):
        return self.level





class Todo(models.Model):

    """
    This class is to create our Todo Model.
    """

    user = models.ForeignKey(to=User, on_delete=models.CASCADE, null=False)
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=250)
    dueDate = models.DateField(default=timezone.now, null=False)
    completed = models.BooleanField(default=False, null=True)
    lastModified = models.DateTimeField(auto_now_add=timezone.now(), null=True)
    priority = models.ForeignKey(to=Priority, on_delete=models.CASCADE,
                                null=True)
    primaryCategory = models.ForeignKey(to=Category, on_delete=models.CASCADE,
                                        null=True)

    def __str__(self):
        return self.title

    def detailUser(self):
        return f"{self.user}"
