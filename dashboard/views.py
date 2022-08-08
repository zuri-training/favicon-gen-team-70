from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, auth
from django.contrib import messages
# Create your views here.

@login_required(redirect_field_name="next", login_url="accounts:login")
def index(request):
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    return render(request,'dashboard/index.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def saved_favicons(request):
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    return render(request,'dashboard/savedicons.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def output(request):
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    return render(request,'dashboard/output.html',{
        'initials':initials,
    })

@login_required(redirect_field_name="next", login_url="accounts:login")
def text_to_favicon(request):
    current_user = request.user
    initials = f"{current_user.first_name[0]}{current_user.last_name[0]}"
    initials =  initials.upper()
    return render(request,'dashboard/text-to-favicon.html',{
        'initials':initials,
    })
