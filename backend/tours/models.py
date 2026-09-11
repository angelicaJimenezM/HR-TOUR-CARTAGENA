from django.db import models


class Tour(models.Model):

    CATEGORIAS = [
        ("PASADIAS_MARITIMOS", "Pasadías Marítimos"),
        ("CITY_TOURS", "City Tours"),
        ("CHIVAS", "Chivas"),
        ("TOURS_BAHIA", "Tours por la Bahía"),
        ("TERRESTRES_BARU", "Tours Terrestres Barú"),
        ("CLASICO_ROSARIO", "Tour Clásico Isla del Rosario"),
        ("PUBLICO_ROSARIO", "Tour Público Isla del Rosario"),
        ("TIERRA_BOMBA_PUNTA_ARENA", "Tierra Bomba y Punta Arena"),
    ]

    titulo_es = models.CharField(max_length=200)
    titulo_en = models.CharField(max_length=200)

    descripcion_es = models.TextField()
    descripcion_en = models.TextField()

    categoria = models.CharField(
        max_length=100,
        choices=CATEGORIAS
    )

    precio_adulto = models.IntegerField(default=0)
    
    # Se habilita null=True para saber si el tour no tiene tarifa de niño diferenciada
    precio_nino = models.IntegerField(null=True, blank=True)

    # Rango explicativo (Ejemplo: "4 a 10 años")
    rango_edad_nino = models.CharField(
        max_length=50, 
        null=True, 
        blank=True,
        help_text="Ej: 4 a 10 años"
    )

    imagen_portada = models.ImageField(
        upload_to="tours/"
    )

    flyer = models.ImageField(
        upload_to="flyers/",
        null=True,
        blank=True
    )

    video = models.FileField(
        upload_to="videos/",
        null=True,
        blank=True
    )

    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.titulo_es