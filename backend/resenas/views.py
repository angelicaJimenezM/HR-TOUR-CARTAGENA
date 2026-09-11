# reservas/views.py
from django.shortcuts import render
from rest_framework import viewsets
from .models import Resena
from .serializers import ResenaSerializer  # Esto ahora sí funcionará perfecto

class ResenaViewSet(viewsets.ModelViewSet):
    queryset = Resena.objects.all()
    serializer_class = ResenaSerializer