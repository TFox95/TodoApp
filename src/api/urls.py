from django.urls import path, re_path
from .views import TodoView
app_name = 'api'

urlpatterns = [
    re_path(r"^$", TodoView.as_view(), name="test"),
    re_path(r"^(?P<pk>\d+)/$", TodoView.as_view(), name="test"),

]
