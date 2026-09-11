from django.db import models
from tours.models import Tour


class Reserva(models.Model):

    tour = models.ForeignKey(
        Tour,
        on_delete=models.CASCADE,
        related_name="reservas"
    )

    nombre_tour = models.CharField(max_length=255)

    nombre_persona = models.CharField(max_length=255)

    documento = models.CharField(max_length=255)

    celular = models.CharField(max_length=255)

    pais = models.CharField(max_length=255)

    fecha = models.DateField()

    hora = models.TimeField()

    saldo = models.IntegerField()

    cantidad_personas = models.IntegerField()

    adultos = models.IntegerField()

    ninos = models.IntegerField()

    estado = models.CharField(
        max_length=100,
        default="pendiente"
    )


    def __str__(self):
        return self.nombre_persona