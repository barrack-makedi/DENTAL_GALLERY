from django.db import models

class DentistProfile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    bio = models.TextField()

    education = models.TextField()
    credentials = models.TextField()
    memberships = models.TextField()
    experience = models.TextField()

    image = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name