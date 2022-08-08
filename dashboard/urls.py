from django.urls import path
from .views import index, saved_favicons, output, text_to_favicon

app_name = 'dashboard'

urlpatterns = [
    path('',index, name="index"),
    path('savedfavicons',saved_favicons, name="saved_favicons"),
    path('output',output, name="output"),
    path('text-to-favicon',text_to_favicon, name="text_to_favicon"),
]