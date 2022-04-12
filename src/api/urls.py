from django.urls import path, re_path
from .views import (TodoList, TodoDetail,
                     TodoCreate, TodoModify,
                     TodoView,
                     )
app_name = 'api'

urlpatterns = [
    path("", TodoList.as_view(), name="list"),
    path("create/", TodoCreate.as_view(), name="create"),
    re_path(r"^test/(?P<pk>\d+)/$", TodoView.as_view(), name="test"),
    path("test/", TodoView.as_view(), name="test"),
    re_path(r"^(?P<pk>\d+)/$", TodoDetail.as_view(), name="detail"),
    re_path(r"^(?P<pk>\d+)/modify$", TodoModify.as_view(), name="modify"),
]
