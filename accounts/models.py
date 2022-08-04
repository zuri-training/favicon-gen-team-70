from django.db import models
from django.utils import timezone

# Create your models here.
class Users(models.Model):
    User_ID = models.CharField(max_length=50)
    firstName = models.CharField(max_length=50)
    otherNames = models.CharField(max_length=50)
    Email = models.EmailField(max_length=180)
    Username = models.CharField(max_length=50)
    Password = models.CharField(max_length=50)
    Date_Registered = models.DateTimeField(default=timezone.now)