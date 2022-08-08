from django.shortcuts import render,redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.contrib.auth.decorators import login_required
import re
# Create your views here.  
  
regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'  
  
def check(email):   
    if(re.search(regex,email)):   
        return True  
    else:   
        return False

def register_view(request):
    if request.method == "POST":
        username = request.POST['username']
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password = request.POST['password']
        if len(username) < 1 or len(firstname) < 1 or len(lastname) < 1 or check(email) != True or len(password) < 6:
            messages.error(request, "Invalid Credentials") 
            return redirect('accounts:register')
        else:
            if User.objects.filter(username=username).exists():
                messages.error(request, "Username exists Already") 
                return redirect('accounts:register')
            if User.objects.filter(email=email).exists():
                messages.error(request, "Email already used") 
                return redirect('accounts:register')
            else:
                user = User.objects.create_user(username=username,password=password,email=email, first_name=firstname,last_name=lastname)
                user.save();
                messages.success(request, 'You are registered now!')
                return redirect('accounts:login')
    return render(request,'accounts/register.html')


def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        if len(username) < 1  or len(password) < 6:
            messages.error(request, "Invalid Credentials") 
            return redirect('accounts:login')
        else:
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request,user)
                messages.success(request,f'Welcome on board {user.username}')
                return redirect('dashboard:index')
            else:
                messages.error(request,'Invalid Credentials!')
                return redirect('accounts:login')

    return render(request,'accounts/login.html')

@login_required(redirect_field_name="next", login_url="accounts:login")
def logout_view(request):
    auth.logout(request)
    return redirect('home:index')