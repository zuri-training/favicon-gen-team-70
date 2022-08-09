from django.shortcuts import redirect, render
from favicons import Favicons
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, Http404
from django.conf import settings
from dashboard.models import Photo, Zip
import random
import shutil
from time import sleep
import os
# Create your views here.

base = settings.BASE_DIR 
output = f"{base}/media/output"
upload_dir = f"{base}/media/uploads"

# makes the media folder once
if not os.path.isdir(settings.MEDIA_ROOT):
    os.mkdir(settings.MEDIA_ROOT)

# makes the output folder once
# this function generates the favicon and zip
@login_required(redirect_field_name="next", login_url="accounts:login")
def generate_all(request,model_id):
    if not os.path.isdir(output):
        os.mkdir(output)
    current_user = request.user
    pulled_list = Photo.objects.filter(id=model_id)
    if pulled_list.exists():
        pulled_img = pulled_list[0]
        some = random.randint(0,10000)
        output_path = f"{output}/user{current_user.id}"
        if not os.path.isdir(output_path):
            os.mkdir(output_path)

        WEB_SERVER_ROOT = f"{output_path}/{some}"
        # makes the folder where the output for a specific user will be
        if not os.path.isdir(WEB_SERVER_ROOT):
            os.mkdir(WEB_SERVER_ROOT)
        YOUR_ICON = f"{upload_dir}/{pulled_img.name}"
        # from the favicons library this generates the favicon and html codes
        with Favicons(YOUR_ICON, WEB_SERVER_ROOT) as favicons:
            # generate favicon
            favicons.generate()
            # As generator
            html = favicons.html_gen()
            #  as tuple
            html = favicons.html()

        file_name = "html.txt" #this is the txt file to hold the html codes
        html_file = open(os.path.join(WEB_SERVER_ROOT,file_name),"w")   #we open the file

        html_file.writelines("Copy the required code snippet into your HTML file\n Update the href* to correctly reference the location\n\n") 
        
        #we write the codes generated
        for code in html:
            html_file.writelines(code+"\n")
        html_file.close()

        # using shutil
        zip = Zip()
        zip.name = pulled_img.zip_name
        zip.downloader = request.user
        zip.origin = pulled_img
        zip.zip_file = shutil.make_archive(f"{WEB_SERVER_ROOT}",'zip',f"{output_path}",f"{some}")
        zip.save();
        # remove directory
        shutil.rmtree(WEB_SERVER_ROOT)
        os.remove(YOUR_ICON)
        return redirect('dashboard:output',zip.id)
    return render(request,'error/error.html')
