from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.response import Response as Res

from .serializers import TodoSerialiers
from .models import Todo, Category, Priority

from django.shortcuts import get_object_or_404
from django.http import Http404
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt, csrf_protect


# Create your views here.

class TodoView(APIView):
    
    def __init__(self, *args):
        self.permission_classes = [permissions.IsAuthenticated]
        self.serializer_class = TodoSerialiers

    def get_object(self, pk):
        
        return get_object_or_404(self.get_queryset(), pk=pk)
    
    def get(self, request, pk=None):

        id = pk or self.request.query_params.get("pk")
        requestedData = {}
        for key, value in self.request.data.items():
            requestedData.update({str(key): str(value)})
        
        try:
            user = requestedData.get("user")
            todoCreator = Todo.objects.get(pk=id).user
            if user == todoCreator or user.is_staff:
                if id is not None:
                    serializer = TodoSerialiers(instance=self.get_object(id))
                    return Res(data={serializer.data},
                        status=status.HTTP_200_OK)
        except:
            user = requestedData.get("user")
            todoCreator = Todo.objects.get(pk=id).user
            if user == todoCreator:
                todo
                serializer = TodoSerialiers(instance=self.get_object(), many=True)
                return Res(data={serializer.data},
                        status=status.HTTP_200_OK)
            elif user == user.is_staff:


    @method_decorator(decorator=csrf_protect, name="dispatch")
    def post(self, request):

        try:
            serializer = TodoSerialiers(data=request.data)

            if serializer.is_valid():
                print(self.request.data)

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

                    if requestedData.get("dueDate") is None:
                        requestedData.update(
                            {"dueDate": timezone.now().date()})
                        Todo.objects.create(user=requestedData["user"], title=requestedData["title"],
                                            description=requestedData["description"], dueDate=requestedData["dueDate"],
                                            completed=requestedData["completed"], priority=priority,
                                            primaryCategory=category)
                        requestedData.pop("user")
                        return Res(data={"success": requestedData},
                                   status=status.HTTP_200_OK)

                    elif requestedData.get("dueDate") is not None:
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


    


class TodoList(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]

    @method_decorator(decorator=csrf_exempt, name="dispatch")
    def get(self, request, format=None):

        try:
            user = self.request.user

            if user.is_staff:
                todos = Todo.objects.all()
                serializer = TodoSerialiers(todos, many=True)
                return Res(data=serializer.data,
                           status=status.HTTP_200_OK)

            elif user.is_authenticated:
                todos = Todo.objects.filter(user=request.user)
                serializer = TodoSerialiers(todos, many=True)
                return Res(data=serializer.data,
                           status=status.HTTP_200_OK)

            else:
                return Res(data={"error": "user either not logged in"})

        except:
            return Res(data={"error": "Todo's was unable to load. Please, try again"},
                       status=status.HTTP_400_BAD_REQUEST)


class TodoDetail(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):

        try:
            return Todo.objects.get(pk=pk)

        except:
            raise Http404

    @method_decorator(decorator=csrf_exempt, name="dispatch")
    def get(self, request, pk, format=None):

        todo = self.get_object(pk)
        serializer = TodoSerialiers(todo)
        activeUser = self.request.user
        todoCreator = Todo.objects.get(pk=pk).user

        try:
            if activeUser == todoCreator or activeUser.is_staff:
                return Res(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Res(data={"error": "you cannot access the data of this todo."},
                           status=status.HTTP_401_UNAUTHORIZED)
        except:
            return Res(data={"error": "Unauthorized"},
                       status=status.HTTP_401_UNAUTHORIZED)


class TodoCreate(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]
        self.serializer_class = TodoSerialiers

    @method_decorator(decorator=csrf_protect, name="dispatch")
    def post(self, request):

        try:
            serializer = TodoSerialiers(data=request.data)

            if serializer.is_valid():
                print(self.request.data)

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

                    if requestedData.get("dueDate") is None:
                        requestedData.update(
                            {"dueDate": timezone.now().date()})
                        Todo.objects.create(user=requestedData["user"], title=requestedData["title"],
                                            description=requestedData["description"], dueDate=requestedData["dueDate"],
                                            completed=requestedData["completed"], priority=priority,
                                            primaryCategory=category)
                        requestedData.pop("user")
                        return Res(data={"success": requestedData},
                                   status=status.HTTP_200_OK)

                    elif requestedData.get("dueDate") is not None:
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


class TodoModify(APIView):

    def __init__(self):
        APIView.__init__(self)
        self.permission_classes = [permissions.IsAuthenticated]
        self.serializer_class = TodoSerialiers

    def get_object(self, pk):

        try:
            return Todo.objects.get(pk=pk)

        except:
            raise Http404

    @method_decorator(decorator=csrf_exempt, name="dispatch")
    def get(self, request, pk, format=None):
        try:
            todo = self.get_object(pk)
            serializer = TodoSerialiers(todo)
            activeUser = self.request.user
            todoCreator = Todo.objects.get(pk=pk).user

            if activeUser == todoCreator or activeUser.is_staff:
                return Res(data=serializer.data, status=status.HTTP_200_OK)

            else:
                return Res(data={"error": "Not Authorized."},
                           status=status.HTTP_401_UNAUTHORIZED)

        except:
            return Res(data={"error": "Bad Request."},
                       status=status.HTTP_400_BAD_REQUEST)

    @method_decorator(decorator=csrf_protect, name="dispatch")
    def put(self, request, pk):

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
                    getSerializer = TodoSerialiers(instance=getTodo)
                    return Res(data={"success": getSerializer.data},
                               status=status.HTTP_202_ACCEPTED)

                except:
                    return Res(data={"error": "Not Staff"},
                               status=status.HTTP_401_UNAUTHORIZED)

            elif user == Todo.objects.get(user=user, pk=pk).user:

                try:
                    todo = Todo.objects.filter(pk=pk, user=user).update(title=requestedData["title"], description=requestedData["description"],
                                                                        dueDate=requestedData["dueDate"], completed=requestedData["completed"],
                                                                        lastModified=timezone.now(), priority=requestedData["priority"],
                                                                        primaryCategory=requestedData["primaryCategory"])
                    getTodo = Todo.objects.get(pk=pk, user=user)
                    getSerializer = TodoSerialiers(instance=getTodo)
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
    def delete(self, request, pk):

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

#    @method_decorator(decorator=csrf_protect, name="dispatch")
#    def patch(self, request, pk):
#
#        if self.request.user.is_staff:
#        try:
#            user = self.request.user
#            data = self.request.data
#
#
#            if len(data) == 1:
#
#                try:
#                    titleData: str = data["title"] or None
#                    if titleData is not None:
#                        return Res(data="yes")
#
#
#
#
#                except:
#                    pass
#
#            elif len(data) == 2:
#
#                try:
#                    pass
#
#                except:
#                    pass
#
#            else:
#                pass
#
#                try:
#                    pass
#
#                except:
#                    pass
#
#        except:
#            return Res(data={"error": "Server Issue"},
#                            status=status.HTTP_408_REQUEST_TIMEOUT)
