from  django.urls import path
from .views import generate_all

app_name = 'generate'
urlpatterns = [
    path('<model_id>',generate_all,name='generate_all')
]
