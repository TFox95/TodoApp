from urllib import request
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response as Res
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication, SessionAuthentication

from .serializers import TodoSerializers, CategorySerializers, PrioritySerializers
from .models import Todo, Category, Priority

from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from django.http import Http404
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, csrf_protect


# Create your views here.

class TodoView(APIView):

    def __init__(self, *args):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]
        self.serializer_class = TodoSerializers
        self.authentication_classes = [
            TokenAuthentication, SessionAuthentication]

    def get_object(self, pk=None):
        user = self.request.user

        if user.is_staff:
            try:
                return Todo.objects.get(pk=pk)

            except:
                return Todo.objects.all()

        elif user.is_authenticated:
            try:
                return Todo.objects.get(pk=pk, user=user)

            except:
                return Todo.objects.filter(user=user)

        else:
            raise Http404

    def get(self, request, pk=None, format=None):

        user = self.request.user

        if pk is None:
            # try:

            if user.is_staff:
                todos = self.get_object(pk=pk)
                serializer = TodoSerializers(todos, many=True)
                return Res(data=serializer.data,
                           status=status.HTTP_200_OK)

            elif user.is_authenticated:
                todos = Todo.objects.filter(user=request.user)
                serializer = TodoSerializers(todos, many=True)
                return Res(data=serializer.data,
                           status=status.HTTP_200_OK)

            else:
                return Res(data={"error": "user not logged in"},
                           status=status.HTTP_409_CONFLICT)

            # except:
            return Res(data={"error": "Todo's was unable to load. Please, try again"},
                       status=status.HTTP_408_REQUEST_TIMEOUT)

        elif pk is not None:
            todo = self.get_object(pk)
            serializer = TodoSerializers(todo)

            try:
                todoCreator = Todo.objects.get(pk=pk).user

                try:
                    if user == todoCreator or user.is_staff:
                        return Res(data=serializer.data, status=status.HTTP_200_OK)

                    else:
                        return Res(data={"error": "you cannot access the data of this todo."},
                                   status=status.HTTP_401_UNAUTHORIZED)
                except:
                    return Res(data={"error": "Unauthorized"},
                               status=status.HTTP_401_UNAUTHORIZED)

            except Todo.DoesNotExist:
                return Res(data={"error": "Unauthorized Access"},
                           status=status.HTTP_401_UNAUTHORIZED)

        else:
            Res(data={"error": "server timeout"},
                status=status.HTTP_504_GATEWAY_TIMEOUT)

    @method_decorator(decorator=csrf_protect, name="dispatch")
    def post(self, request, pk=None):
        if pk is None:
            try:
                serializer = TodoSerializers(data=request.data)

                if serializer.is_valid():
                    try:
                        # The reason why we're establishing a new dict is because serializer.data is immutatable.
                        # So we're going to create a new Dict that will inherit the values of serializer.data .
                        requestedData = {
                            "user": self.request.user,
                        }
                        requestedData.update(serializer.data)
                        priority = None if requestedData.get(
                            "priority", None) is None else Priority.objects.get(
                                pk=requestedData["priority"])
                        category = None if requestedData.get(
                            "primaryCategory") is None else Category.objects.get(
                                pk=requestedData["primaryCategory"])

                        if requestedData.get("dueDate") is None or str(""):
                            requestedData.update(
                                {"dueDate": timezone.now().date()})
                            Todo.objects.create(user=requestedData["user"], title=requestedData["title"],
                                                description=requestedData["description"], dueDate=requestedData["dueDate"],
                                                completed=requestedData["completed"], priority=priority,
                                                primaryCategory=category)
                            requestedData.pop("user")
                            return Res(data={"success": requestedData},
                                       status=status.HTTP_200_OK)

                        elif requestedData.get("dueDate") is not None or not str(""):
                            Todo.objects.create(user=requestedData["user"], title=requestedData["title"],
                                                description=requestedData["description"], dueDate=requestedData["dueDate"],
                                                completed=requestedData["completed"], priority=priority,
                                                primaryCategory=category)
                            requestedData.pop("user")
                            return Res(data={"success": requestedData},
                                       status=status.HTTP_200_OK)

                        else:
                            return Res(data={"error": f"Title and Description fields must not be empty, \n {serializer.errors}"},
                                       status=status.HTTP_406_NOT_ACCEPTABLE)

                    except:
                        return Res(data={"error": f"Entry must contain title and description fields"},
                                   status=status.HTTP_406_NOT_ACCEPTABLE)

                else:
                    return Res(data=serializer.errors,
                               status=status.HTTP_400_BAD_REQUEST)

            except:
                return Res(data={"error": "was not able to create entry; please try again later"})

        else:
            return Res(data={"error": "Can't create a new entry while currently in an instance, make a post request while not being within an instance"},
                       status=status.HTTP_403_FORBIDDEN)

    @method_decorator(decorator=csrf_protect, name="dispatch")
    def put(self, request, pk=None):

        try:
            requestedData = {}
            user = self.request.user

            for key, item in self.request.data.items():
                requestedData.update({str(key): str(item)})

            priority = None if requestedData.get(
                "priority", None) == '' else Priority.objects.get(
                    pk=requestedData["priority"])
            completed = "False" if requestedData.get(
                "completed", None) == None else requestedData.get(
                    "completed", None).capitalize()
            category = None if requestedData.get(
                "primaryCategory") == '' else Category.objects.get(
                    pk=requestedData["primaryCategory"])

            if user.is_staff is True:

                try:
                    todoCreator = Todo.objects.get(pk=pk).user
                    todo = Todo.objects.filter(pk=pk, user=todoCreator).update(
                        title=requestedData["title"], description=requestedData["description"],
                        dueDate=requestedData["dueDate"], completed=completed,
                        priority=priority, primaryCategory=category)
                    getTodo = Todo.objects.get(pk=pk, user=todoCreator)
                    getSerializer = TodoSerializers(instance=getTodo)
                    return Res(data={"success": getSerializer.data},
                               status=status.HTTP_202_ACCEPTED)

                except:
                    return Res(data={"error": "Not Staff"},
                               status=status.HTTP_401_UNAUTHORIZED)

            elif user == Todo.objects.get(user=user, pk=pk).user:

                try:
                    todo = Todo.objects.filter(pk=pk, user=user).update(title=requestedData["title"], description=requestedData["description"],
                                                                        dueDate=requestedData[
                                                                            "dueDate"], completed=completed,
                                                                        lastModified=timezone.now(), priority=priority,
                                                                        primaryCategory=category)
                    getTodo = Todo.objects.get(pk=pk, user=user)
                    getSerializer = TodoSerializers(instance=getTodo)
                    return Res(data={"success": getSerializer.data},
                               status=status.HTTP_202_ACCEPTED)

                except:
                    return Res(data={"error": "Not Authorized from user"},
                               status=status.HTTP_401_UNAUTHORIZED)

            else:
                return Res(data={"error": "Not Authorized"},
                           status=status.HTTP_401_UNAUTHORIZED)

        except:
            return Res(data={"error": "Bad Request."},
                       status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(decorator=csrf_protect, name="dispatch")
    def delete(self, request, pk=None):
        if pk is not None:
            try:
                user = self.request.user
                todoCreator = Todo.objects.get(pk=pk).user

                if user.is_staff is True:
                    try:
                        Todo.objects.filter(pk=pk, user=todoCreator).delete()
                        if user != todoCreator:
                            return Res(data={"success": f"{user.username} has successfully removed {todoCreator}'s entry"},
                                       status=status.HTTP_200_OK)
                        else:
                            return Res(data={"success": f"{user.username} has successfully removed thier entry"})

                    except:
                        return Res(data={"error": f"{user.username} was not able to remove the entry; please try again."})

                elif user == todoCreator:
                    try:
                        Todo.objects.filter(pk=pk).delete()
                        return Res(data={"success": f"{user.username} has successfully removed thier entry."},
                                   status=status.HTTP_200_OK)

                    except:
                        return Res(data={"error": "Content Unavailable"},
                                   status=status.HTTP_404_NOT_FOUND)
                else:
                    return Res(data={"error": "Unathorized Action"},
                               status=status.HTTP_401_UNAUTHORIZED)

            except:
                return Res(data={"error": "Todo was not able to be deleted; try again later."},
                           status=status.HTTP_400_BAD_REQUEST)

        else:
            return Res(data={"error": "there is no todo to be deleted!"})


class CategoryView(APIView):

    def __init__(self):
        self.authentication_classes = [
            SessionAuthentication, TokenAuthentication]
        self.permission_classes = [permissions.IsAuthenticated]
        self.serializer_class = CategorySerializers

    def get_objects(self, pk=None):

        try:
            return Category.objects.all()

        except:
            return Http404

    def get(self, request, pk=None, format=None):

        user = self.request.user
        categories = self.get_objects(pk=pk)
        categorySeriailzer = CategorySerializers(categories, many=True)

        priorities = Priority.objects.all()
        prioritySerializer = CategorySerializers(priorities, many=True)
        return Res(data={"success": {"category": categorySeriailzer.data, "priority": prioritySerializer.data}})
