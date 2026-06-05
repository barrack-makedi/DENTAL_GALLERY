from django.db import models

# Create your models here.
class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
   
    CATEGORY_CHOICES = [
        ('oral_health', 'Oral Health'),
        ('whitening', 'Teeth Whitening'),
        ('kids_dentistry', 'Kids Dentistry'),
        ('gum_care', 'Gum Care'),
        ('dental_tips', 'Dental Tips'),
    ]

    title = models.CharField(max_length=200)

    featured_image = models.ImageField(
        upload_to='blog_images/',
        blank=True,
        null=True
    )

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES
    )

    content = models.TextField()

    author = models.CharField(
        max_length=100,
        default="Head Dentist"
    )

    published_date = models.DateTimeField(auto_now_add=True)

    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title