from django.contrib import admin
from .models import Resena


@admin.register(Resena)
class ResenaAdmin(admin.ModelAdmin):

    list_display = (
        "nombre_persona",
        "pais",
        "estrellas",
        "activo"
    )

    list_filter = (
        "activo",
        "estrellas"
    )

    search_fields = (
        "nombre_persona",
        "pais"
    )