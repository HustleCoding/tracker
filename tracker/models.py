from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=255)
    url = models.URLField(max_length=255)
    description = models.TextField()
    instructors = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    duration = models.PositiveIntegerField()
    existing_rating = models.FloatField(default=0)
    user_rating = models.FloatField(null=True, blank=True)

    def __str__(self):
        return self.title

class Section(models.Model):
    STATUS_CHOICES = [
        ('inactive', 'Inactive'),
        ('started', 'Started'),
        ('completed', 'Completed'),
    ]

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    estimated_completion_time = models.PositiveIntegerField()
    start_date = models.DateTimeField(null=True, blank=True)
    completed_date = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='inactive')
    estimated_difficulty = models.PositiveIntegerField(null=True, blank=True)


