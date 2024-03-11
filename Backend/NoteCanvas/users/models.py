from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        unique_together = ('username', 'email')

