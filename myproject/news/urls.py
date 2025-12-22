from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"), 
    path("rss_proxy/", views.rss_proxy, name="rss_proxy"),
]