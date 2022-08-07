from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User, auth
from django.contrib import messages
# Create your views here.

@login_required(redirect_field_name="next", login_url="accounts:login")
def index(request):
    return render(request,'dashboard/index.html')

@login_required(redirect_field_name="next", login_url="accounts:login")
def logout_view(request):
    auth.logout(request)
    return redirect('accounts:home')