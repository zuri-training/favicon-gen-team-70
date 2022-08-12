from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'home/index.html')

def contact(request):
    return render(request, 'home/contact.html')

def docs(request):
    return render(request, 'home/docs.html')

def error(request, exception):
    return render(request, 'error/error.html')