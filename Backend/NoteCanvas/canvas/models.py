from django.db import models
from django.conf import settings

class Canvas(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='canvases')
    title = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.title} ({self.user.username})"
