from django.urls import path
from .views import index, contact, docs

app_name = 'home'

urlpatterns = [
    path('', index, name="index"),
    path('home', index, name="home"),
    path('contact', contact, name="contact"),
    path('docs', docs, name="docs"),
]