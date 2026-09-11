from django.db import models
from tours.models import Tour


class Resena(models.Model):

    tour = models.ForeignKey(
        Tour,
        on_delete=models.CASCADE,
        related_name="resenas",
        null=True,
        blank=True
    )

    nombre_persona = models.CharField(max_length=255)

    pais = models.CharField(max_length=255)

    foto = models.ImageField(
        upload_to="resenas/"
    )
    activo = models.BooleanField(default=False)
    comentario = models.TextField()

    estrellas = models.IntegerField()


    def __str__(self):
        return self.nombre_persona