# favicon-gen-team-70
**FAVICON GENERATOR by Team 70**
>Team70 is building a favicon generator(named **IconCity**). Basically, authenticated users will be able to upload an image, generate Favicon in all the standard sizes and formats and the respective HTML codes(parsed in a text file) and then all these would be available in a zipfile which would be downloaded by users who can save their favicons and come back to download them.

>Note: All project contributors much be familiar with the [Rules of Engagement](https://docs.google.com/document/d/1D9N1TRe5wGy6t3cCa-JtPIFo-S4-cVjq1lsBvtaXHqo/edit?usp=sharing)

Version conflict dependencies for Pillow and favicons 
favicons 0.1.1 depends on pillow<9.0 and >=7.2
I installed changed the requirements.txt to Pillow==8.4.0
Installed psycopg2 for Postgresql database

In iconcity\settings.py
    I modified the database to point to Potsgres  with this line of code inserted inside the DATABASE object
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'iconcitydb', 
        'USER': 'postgres', 
        'PASSWORD': 'EnterDatabase',
        'HOST': '127.0.0.1', 
        'PORT': '5432',
    and commented out the original default django engine

Created a Superser - 
    Username: engrzeus
    Password: EnterDjango

In the iconcity\urls.py 
    I imported "include"
    I added a new path to urlpatterns "path("accounts/", include("django.contrib.auth.urls")),"

In accounts\models.py 
    I added the following lines of code 
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