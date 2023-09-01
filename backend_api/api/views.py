from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import api_view

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .serializers import PersonaSerializer
from .models import Persona
import json

class PersonaViewSet(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()


@api_view(['POST'])
def agregar_persona(request):
    serializer = PersonaSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def obtener_personas(request):
    personas = Persona.objects.all()
    serializer = PersonaSerializer(personas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def mostrar_persona(request, persona_id):
    try:
        persona = Persona.objects.get(pk=persona_id)
        serializer = PersonaSerializer(persona)
        return Response(serializer.data)
    except Persona.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def actualizar_persona(request, persona_id):
    try:
        persona = Persona.objects.get(pk=persona_id)
    except Persona.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = PersonaSerializer(persona, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def eliminar_persona(request, persona_id):
    try:
        persona = Persona.objects.get(pk=persona_id)
    except Persona.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    persona.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)






class ListPersonasView(APIView):
    permission_classes = (permissions.AllowAny,)

@csrf_exempt
def buscar_personas(request):
    if request.method == 'GET':
        params = json.loads(request.body.decode('utf-8'))
        dni = params.get('dni')
        nombre = params.get('nombre')
        apellido = params.get('apellido')
        fecha_desde = params.get('fecha_desde')
        fecha_hasta = params.get('fecha_hasta')
        es_gba = params.get('es_gba')

        personas = Persona.objects.all()

        if dni:
            personas = personas.filter(dni=dni)
        if nombre:
            personas = personas.filter(nombre__icontains=nombre)
        if apellido:
            personas = personas.filter(apellido__icontains=apellido)
        if fecha_desde and fecha_hasta:
            personas = personas.filter(fecha_nacimiento__range=[fecha_desde, fecha_hasta])
        if es_gba is not None:
            personas = personas.filter(es_gba=es_gba)

        results = list(personas.values())
        return JsonResponse(results, safe=False)
