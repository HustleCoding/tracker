from django.contrib import admin
from django.urls import path
from .api import create_course, list_courses, get_course, update_course, delete_course
from .views import SectionList, SectionDetail

urlpatterns = [
    path('courses/', list_courses, name='course-list'),
    path('courses/<int:pk>/', get_course, name='course-detail'),
    path('courses/<int:pk>/sections/', SectionList.as_view()),
    path('courses/<int:pk_c>/sections/<int:pk>/', SectionDetail.as_view()), #TODO: Optimize here
    path('admin/', admin.site.urls),
]
