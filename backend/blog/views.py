from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import BlogPost
from .serializers import BlogPostSerializer

@api_view(['GET'])
def get_posts(request):
    posts = BlogPost.objects.all().order_by('-date')
    serializer = BlogPostSerializer(posts, many=True)
    return Response(serializer.data)