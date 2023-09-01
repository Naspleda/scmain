from django.urls import path, re_path
from rest_framework.routers import DefaultRouter
from .views import PersonaViewSet, obtener_personas, agregar_persona, mostrar_persona, actualizar_persona, eliminar_persona, buscar_personas

# Configura el router para la vista PersonaViewSet
router = DefaultRouter()
router.register(r'personas', PersonaViewSet)

urlpatterns = [
    path('api/personas/lista/', obtener_personas, name='obtener-personas'),
    path('buscar_personas/', buscar_personas, name='buscar-personas'),
    path('personas/<int:persona_id>/', mostrar_persona, name='mostrar-persona'),
    path('personas/<int:persona_id>/actualizar/', actualizar_persona, name='actualizar-persona'),
    path('personas/<int:persona_id>/eliminar/', eliminar_persona, name='eliminar-persona'),
    path('personas/', agregar_persona, name='agregar-persona'),
    re_path(r'^.*$', agregar_persona),  # Captura cualquier otra ruta y redirige a agregar_persona
]

# Agrega las rutas generadas por el router al final
urlpatterns += router.urls
