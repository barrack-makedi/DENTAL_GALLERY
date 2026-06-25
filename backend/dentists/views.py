from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import DentistProfile
from .serializers import DentistProfileSerializer

@api_view(['GET'])
def get_dentist(request):
    dentist = DentistProfile.objects.first()
    if dentist:
        serializer = DentistProfileSerializer(dentist)
        return Response(serializer.data)
    else:
        return Response(
            {'error': 'No dentist profile found'}, 
            status=status.HTTP_404_NOT_FOUND
        )

@api_view(['PUT', 'POST'])
@parser_classes([MultiPartParser, FormParser])
def update_dentist(request):
    """
    Update dentist profile including profile image
    """
    try:
        dentist = DentistProfile.objects.first()
        
        if not dentist:
            return Response(
                {'error': 'Dentist profile not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        data = request.data.copy() if hasattr(request.data, 'copy') else request.data
        
        if 'profile_image' in request.FILES:
            serializer = DentistProfileSerializer(
                dentist, 
                data=data, 
                partial=True
            )
        else:
            serializer = DentistProfileSerializer(
                dentist, 
                data=data, 
                partial=True
            )
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(
                serializer.errors, 
                status=status.HTTP_400_BAD_REQUEST
            )
            
    except Exception as e:
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

# Dedicated endpoint for image upload
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_dentist_image(request):
    """
    Dedicated endpoint for uploading dentist profile image
    """
    try:
        dentist = DentistProfile.objects.first()
        
        if not dentist:
            return Response(
                {'error': 'Dentist profile not found'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        
        if 'profile_image' not in request.FILES:
            return Response(
                {'error': 'No image file provided'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
        
        dentist.profile_image = request.FILES['profile_image']
        dentist.save()
        
        serializer = DentistProfileSerializer(dentist)
        return Response(serializer.data, status=status.HTTP_200_OK)
        
    except Exception as e:
        return Response(
            {'error': str(e)}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )