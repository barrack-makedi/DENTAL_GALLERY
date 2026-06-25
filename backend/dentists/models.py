import os
import time
from django.db import models

def upload_to_dentist_profile(instance, filename):
    """
    Splits the filename and appends a UNIX timestamp.
    Ensures that every time an image is replaced, it gets a completely 
    unique filename string, clearing out cache issues entirely.
    """
    base_name, extension = os.path.splitext(filename)
    timestamped_filename = f"{base_name}_{int(time.time())}{extension}"
    return os.path.join('dentist_images/', timestamped_filename)


class DentistProfile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    bio = models.TextField()

    education = models.TextField()
    credentials = models.TextField()
    memberships = models.TextField()
    experience = models.TextField()

    # Dynamic filename handler with fallbacks enabled for database flexibility
    profile_image = models.ImageField(
        upload_to=upload_to_dentist_profile, 
        blank=True, 
        null=True
    )

    def __str__(self):
        return self.name