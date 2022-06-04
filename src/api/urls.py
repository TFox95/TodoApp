from django.urls import path, re_path
from .views import TodoView, CategoryView
app_name = 'api'

urlpatterns = [
    re_path(r"^$", TodoView.as_view(), name="todo"),
    re_path(r"^(?P<pk>\d+)/$", TodoView.as_view(), name="detail"),
    re_path(r"^category/$", CategoryView.as_view(), name="category")

]
