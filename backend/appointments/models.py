from django.db import models

# Create your models here.


class Appointment(models.Model):
    SERVICE_CHOICES = [
        ('checkup', 'Dental Check-up'),
        ('cleaning', 'Teeth Cleaning'),
        ('whitening', 'Teeth Whitening'),
        ('extraction', 'Tooth Extraction'),
        ('braces', 'Braces Consultation'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled'),
    ]

    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)

    service = models.CharField(max_length=20, choices=SERVICE_CHOICES)
    

    message = models.TextField(blank=True, null=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.service}"