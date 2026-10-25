from django.urls import path
from app1.views import *

urlpatterns = [
    path('', home, name='home'),
    path('about/', about, name='about'),
    path('services/', services, name='services'),
    path('contact/', contact, name='contact'),
    path('studentinfo/', studentinfo, name='studentdetails'),
    path('teacherinfo/', teacherinfo, name='teacherdetails'),
    path('demo/', demo, name='demo'),
    path('marks/', check_marks, name='marks'),
    path('test/', test, name='test')
]