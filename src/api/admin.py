from django.contrib import admin
from .models import (Todo, Category,
                    Priority)

# Register your models here.

admin.site.register(Todo)

admin.site.register(Category)

admin.site.register(Priority)