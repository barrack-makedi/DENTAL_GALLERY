from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import DentistProfile
from .serializers import DentistProfileSerializer

@api_view(['GET'])
def get_dentist(request):
    dentist = DentistProfile.objects.first()
    serializer = DentistProfileSerializer(dentist)
    return Response(serializer.data)