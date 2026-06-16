from rest_framework import serializers
from .models import Appointment
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = ['full_name', 'phone', 'email', 'service', 'message']
        # This explicitly tells Django to only expect these 5 fields