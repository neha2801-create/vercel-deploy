from django.urls import path
from . import views


urlpatterns = [
    path('<int:pk>/', views.get, name='get'),
    path('create/', views.create_canvas, name='create_canvas')
]