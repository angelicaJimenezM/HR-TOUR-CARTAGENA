from django.core.mail import send_mail
from django.conf import settings
from rest_framework import viewsets
from .models import Reserva
from .serializers import ReservaSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        tour_id = self.request.query_params.get('tour')
        fecha = self.request.query_params.get('fecha')

        if tour_id:
            queryset = queryset.filter(tour_id=tour_id)
        if fecha:
            queryset = queryset.filter(fecha=fecha)

        return queryset

    def perform_create(self, serializer):
        # 1. Guarda la reserva en la base de datos
        reserva = serializer.save()

        # 2. Extraer datos de la reserva guardada
        nombre_cliente = getattr(reserva, 'nombre_persona', None) or getattr(reserva, 'nombre', 'Cliente')
        celular_cliente = getattr(reserva, 'celular', None) or getattr(reserva, 'telefono', 'No especificado')
        documento_cliente = getattr(reserva, 'documento', 'N/A')
        pais_cliente = getattr(reserva, 'pais', 'N/A')
        
        tour_nombre = getattr(reserva, 'nombre_tour', None)
        if not tour_nombre and hasattr(reserva, 'tour') and reserva.tour:
            tour_nombre = getattr(reserva.tour, 'titulo_es', None) or getattr(reserva.tour, 'titulo', 'Tour')
        if not tour_nombre:
            tour_nombre = 'Tour'

        fecha_reserva = getattr(reserva, 'fecha', 'N/A')
        hora_reserva = getattr(reserva, 'hora', '')
        adultos = getattr(reserva, 'adultos', 0)
        ninos = getattr(reserva, 'ninos', 0)
        saldo_total = getattr(reserva, 'saldo', 0)

        # 3. Construir el correo de notificación para el administrador
        asunto = f"🚨 Nueva Reserva Creada #{reserva.id} - {nombre_cliente}"
        
        mensaje_cuerpo = (
            f"Se ha registrado una nueva reserva en la plataforma:\n\n"
            f"----------------------------------------\n"
            f"ID de Reserva: #{reserva.id}\n"
            f"Tour: {tour_nombre}\n"
            f"Cliente: {nombre_cliente}\n"
            f"Documento: {documento_cliente}\n"
            f"Celular / WhatsApp: {celular_cliente}\n"
            f"País: {pais_cliente}\n"
            f"Fecha de Tour: {fecha_reserva} {hora_reserva}\n"
            f"Pasajeros: {adultos} Adulto(s), {ninos} Niño(s)\n"
            f"Total a Pagar: ${saldo_total}\n"
            f"----------------------------------------\n\n"
            f"Por favor contactar al cliente para confirmar y validar el pago."
        )

        correo_administrador = "hrtourscartagena@gmail.com" # Correo donde quieres recibir la alerta

        # 4. Enviar correo de manera segura (fail_silently evita que falle la API si falla el correo)
        try:
            send_mail(
                subject=asunto,
                message=mensaje_cuerpo,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[correo_administrador],
                fail_silently=True
            )
        except Exception as e:
            print("Error al enviar la notificación por correo:", e)