from django.urls import path

from .views import AdAPIView,ContactAPIView

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("api/ad/", AdAPIView.as_view(), name="ad_view"),
    path("api/contact/", ContactAPIView.as_view(), name="contact_view"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)