from rest_framework import serializers
from .models import DentistProfile

class DentistProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DentistProfile
        fields = '__all__'