from django.contrib import admin
from .models import Ad,Contact

admin.site.register(Ad)
admin.site.register(Contact)

admin.site.site_header  =  "A Class Doon"  
admin.site.site_title  =  "A Class Doon"
admin.site.index_title  =  "Admin Panel"