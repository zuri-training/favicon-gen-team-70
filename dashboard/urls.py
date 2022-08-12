from django.urls import path
from .views import index, saved_favicons, output, text_to_favicon,upload,delete_view,download,save_view, docs, contact

app_name = 'dashboard'

urlpatterns = [
    path('',index, name="index"),
    path('docs/',docs, name="docs"),
    path('contact/',contact, name="contact"),
    path('savedfavicons',saved_favicons, name="saved_favicons"),
    path('text-to-favicon',text_to_favicon, name="text_to_favicon"),
    path('upload',upload, name='upload'),
    path('output/<zip_id>',output, name='output'),
    path('save/<zip_id>',save_view, name='save'),
    path('download/<zip_id>',download, name='download'),
    path('delete/<int:pk>',delete_view, name='delete'),
]