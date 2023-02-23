from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'url', 'description', 'instructors', 'created', 'duration', 'existing_rating', 'user_rating')
