from rest_framework import serializers
from .models import *

class PersonaSerializer(serializers.ModelSerializer):

    class Meta:
        model=Persona
        fields=[
            'id',
            'dni',
            'nombre' ,
            'apellido',
            'es_gba',
        ]