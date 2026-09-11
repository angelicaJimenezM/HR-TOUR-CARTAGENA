from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tours.views import TourViewSet
from django.conf import settings
from django.conf.urls.static import static
from reservas.views import ReservaViewSet
# Cambia la línea 8 de config/urls.py a esto:
from resenas.views import ResenaViewSet  
 



router = DefaultRouter()

router.register(
    "tours",
    TourViewSet
)


router.register("reservas", ReservaViewSet, basename="reserva")
router.register("resenas", ResenaViewSet, basename="resena")


urlpatterns = [

    path('admin/', admin.site.urls),

    path(
        'api/',
        include(router.urls)
    ),

]


urlpatterns += static(
    settings.MEDIA_URL,
    document_root=settings.MEDIA_ROOT
)