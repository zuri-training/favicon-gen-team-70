from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.http import HttpResponse, FileResponse
import os
from .models import Photo, Zip
from django.utils.encoding import smart_str
# Create your views here.

@login_required(redirect_field_name="next", login_url="accounts:login")
def index(request):
    current_user = request.user
    initials = (f"{current_user.first_name[0]}{current_user.last_name[0]}").upper()
    # initials =  initials.upper()
    return render(request,'dashboard/index.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def output(request):
    current_user = request.user
    initials = (f"{current_user.first_name[0]}{current_user.last_name[0]}").upper()
    # initials =  initials.upper()
    return render(request,'dashboard/output.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def text_to_favicon(request):
    current_user = request.user
    initials = (f"{current_user.first_name[0]}{current_user.last_name[0]}").upper()
    # initials =  initials.upper()
    return render(request,'dashboard/text-to-favicon.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def upload(request):
    if request.method == "POST":
        uploaded = request.FILES['upload']
        if uploaded.size / 1024 / 1024 > 2:
            messages.error(request,f"{uploaded.name} exceeds 2mB, Reupload a lesser one!")
            return redirect('dashboard:index')
        else:
            img_type = uploaded.content_type.split("/")[1]
            accepted = ['jpeg','png', 'svg+xml','svg']
            if img_type in accepted:
                photo = Photo()
                na_me = uploaded.name.split(".")
                cleaned = ''.join(ch for ch in na_me[0] if ch.isalnum())
                photo.name = f"{cleaned}.{na_me[1]}"
                print(uploaded.name)
                na_me = photo.name.split(".")
                photo.zip_name = cleaned
                photo.uploader =request.user
                photo.img_file = uploaded
                photo.save();
                return redirect('generate:generate_all',photo.id)
            else:
                messages.error(request,f"{uploaded.name} has an unsupported extension")
            return redirect('dashboard:index')

@login_required(redirect_field_name="next", login_url="accounts:login")
def output(request, zip_id):
    zip_list = Zip.objects.filter(id=zip_id)
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    if zip_list.exists():
        zip = zip_list[0]
        if 'download' in request.POST:
            return redirect('dashboard:download',zip.id)
        elif 'save' in request.POST:
            zip.is_saved = True
            zip.save();
            return redirect('dashboard:saved_favicons')
        return render(request, 'dashboard/output.html',{
            'zip':zip,
            'initials':initials,
        })   
    return render(request,'error/error.html')

@login_required(redirect_field_name="next", login_url="accounts:login")
def saved_favicons(request):
    zips = Zip.objects.filter(downloader=request.user, is_saved=True)
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    if len(zips) >= 1:
        return render(request,'dashboard/savedicons.html', {
            'zips':zips,
            'initials':initials,
        })
    else:
        return render(request,'dashboard/emptyCollections.html',{
            'initials':initials,
        })

@login_required(redirect_field_name="next", login_url="accounts:login")
def delete_view(request,pk):
    if request.method == "POST":
        del_zip =Zip.objects.get(pk=pk)
        del_zip.delete();
    return redirect('dashboard:saved_favicons')

@login_required(redirect_field_name="next", login_url="accounts:login")
def save_view(request,zip_id):
    if request.method == "POST":
        save_zip =Zip.objects.get(id=zip_id)
        save_zip.is_saved = True
        save_zip.save();
    return redirect('dashboard:saved_favicons')

@login_required(redirect_field_name="next", login_url="accounts:login")
def download(request,zip_id):
    if request.method == "POST":
        download_zip = Zip.objects.get(id=zip_id)
        return FileResponse(download_zip.zip_file, as_attachment=True)
    return redirect('dashboard:index')

@login_required(redirect_field_name="next", login_url="accounts:login")
def docs(request):
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    return render(request,'dashboard/docs.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def contact(request):
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    return render(request,'dashboard/contact.html',{
        'initials':initials,
    })