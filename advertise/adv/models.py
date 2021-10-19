from django.db import models

class Ad(models.Model):
    business_name = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=200)
    services = models.TextField()
    contact_no = models.BigIntegerField()
    email = models.EmailField(max_length=200, default='', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='assets', default='assets/placeholder.png')
    img1 = models.ImageField(upload_to='assets', default='assets/placeholder.png')
    img2 = models.ImageField(upload_to='assets', default='assets/placeholder.png')
    img3 = models.ImageField(upload_to='assets', default='assets/placeholder.png')
    priority = models.IntegerField(default=0)
    address = models.TextField(default='', blank=True, null=True)
    owner_name = models.CharField(max_length=200, default='', blank=True, null=True)
    website = models.URLField(default='', blank=True, null=True)

    def __str__(self) -> str:
        return self.business_name

class Contact(models.Model):
    name=models.CharField(max_length=500)
    emailid=models.EmailField(max_length=200)
    phone_no=models.BigIntegerField()
    message=models.TextField(blank=True, null=True)
 
    def __str__(self) -> str:
        return self.name




