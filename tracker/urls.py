from django.contrib import admin
from django.urls import path
from .api import create_course, list_courses, get_course, update_course, delete_course

urlpatterns = [
    path('courses/', list_courses, name='course-list'),
    path('courses/<int:pk>/', get_course, name='course-detail'),
    path('courses/create/', create_course, name='course-create'),
    path('courses/update/<int:pk>/', update_course, name='course-update'),
    path('courses/delete/<int:pk>/', delete_course, name='course-delete'),
    path('admin/', admin.site.urls),
]
