from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_dentist, name='get_dentist'),  # Changed from 'api/dentist/' to ''
    path('update/', views.update_dentist, name='update_dentist'),
    path('upload-image/', views.upload_dentist_image, name='upload_dentist_image'),
]