from django.shortcuts import render
from rest_framework import generics, serializers
from .serializers import LeadSerializer
from .models import Lead

# Create your views here.

class RoomView(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer