from django.db import models

# Create your models here.

class Persona(models.Model):
    dni = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    fecha_nacimiento = models.DateField()
    es_gba = models.BooleanField(default=False)

    class Meta:
        app_label = 'Persona'