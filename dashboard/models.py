from django.db import models
from django.contrib.auth import get_user_model


User=get_user_model()
# Create your models here.

# create a file 

def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    folder = "output"
    return '{0}/{1}/{2}'.format(folder,instance.uploader.id, filename)

class Photo(models.Model):
    name = models.CharField(max_length=30)
    zip_name = models.CharField(max_length=30)
    uploader = models.ForeignKey(User,related_name='uploader',on_delete=models.CASCADE)
    img_file = models.ImageField(upload_to="uploads/")

    def __str__(self):
        name = self.name.split(".")
        return f"{name[0]}"

    def delete(self, *args,**kwargs):
        self.img_file.delete()
        super().delete(*args,**kwargs)
# create zipfile class here

class Zip(models.Model):
    name = models.CharField(max_length=30)
    origin = models.ForeignKey(Photo,related_name='origin', on_delete=models.CASCADE)
    downloader = models.ForeignKey(User,related_name='downloader',on_delete=models.CASCADE, blank=True, null=True)
    zip_file = models.FileField(upload_to=user_directory_path)
    is_saved = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def delete(self, *args,**kwargs):
        self.zip_file.delete()
        self.origin.delete()
        super().delete(*args,**kwargs)