from django.contrib import admin
from django.urls import path
from .views import CourseList, CourseDetail, SectionList, SectionDetail

urlpatterns = [
    path('courses/', CourseList.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseDetail.as_view(), name='course-detail'),
    path('courses/<int:pk>/sections/', SectionList.as_view(), name='section-list'),
    path('courses/<int:pk_c>/sections/<int:pk>/', SectionDetail.as_view(), name='section-detail'),
    path('admin/', admin.site.urls),
]
