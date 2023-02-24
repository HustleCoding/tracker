from rest_framework import serializers
from .models import Course, Section

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'url', 'description', 'instructors', 'created', 'duration', 'existing_rating', 'user_rating')

class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = ('id', 'course', 'title', 'description', 'created',
                  'estimated_completion_time', 'start_date', 'completed_date',
                  'status', 'estimated_difficulty')