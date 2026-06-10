from django.urls import path
from . import views
from .views import create_appointment
urlpatterns = [
    path('appointments/', views.get_appointments),
    path('appointments/create/', views.create_appointment),
      path('', create_appointment),              # /api/appointments/
    path('create/', create_appointment),       # /api/appointments/create/
]