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
