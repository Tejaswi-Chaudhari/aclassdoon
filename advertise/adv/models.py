from django.db import models

class Ad(models.Model):
    business_name = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=200)
    services = models.TextField()
    contact_no = models.BigIntegerField()
    email = models.EmailField(max_length=200, default='')
    thumbnail = models.ImageField(upload_to='assets', default='')

    def __str__(self) -> str:
        return self.business_name



