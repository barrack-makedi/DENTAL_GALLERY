from django.urls import path
from .views import get_dentist

urlpatterns = [
    path('', get_dentist),
]