from urllib import response
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'home/index.html')

def contact(request):
    return render(request, 'home/contact.html')

def docs(request):
    return render(request, 'home/docs.html')

def handler404(request, exception):
    return render(request,'error/error404.html',status=404)

def handler500(request, *args, **argv):
    return render(request, 'error/500.html', status=500)