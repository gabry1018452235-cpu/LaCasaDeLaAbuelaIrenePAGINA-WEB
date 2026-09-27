import React from 'react';
import SeoMetadata from '@/components/SeoMetadata';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-bone text-oak px-6 py-20 md:px-20 lg:px-40">
      <SeoMetadata path="/terminos" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-terracotta mb-8">Términos y Condiciones de Uso y Venta</h1>
        <p className="text-sm text-oak/60 mb-8">Última actualización: [Fecha de publicación]</p>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Estos términos regulan el acceso y uso de este sitio y las consultas, reservas de alojamiento y compras de productos artesanales ofrecidos bajo el nombre <strong>Casa de La Abuela Irene</strong>. Al navegar, solicitar una reserva o realizar una compra, la persona usuaria acepta las condiciones que le sean aplicables, sin renunciar a los derechos irrenunciables reconocidos por la ley colombiana.</p>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">1. Identificación del proveedor</h2>
            <address className="not-italic">
              <p>Nombre o razón social: [Nombre o razón social del prestador]</p>
              <p>NIT: [NIT del prestador]</p>
              <p>Domicilio: [Vereda Los Tanques, Finca La Mata de Guadua, Código Postal 632001, Calarcá, Quindío, Colombia._gabry.1018452235]</p>
              <p>Teléfono y WhatsApp: [+57 320 7016292]</p>
              <p>Correo de atención y notificaciones: [Correo electrónico oficial]</p>
              <p>Registro Nacional de Turismo: [Registro Nacional de Turismo (RNT) N° 244594]</p>
            </address>
            <p>El prestador deberá mantener esta información completa y actualizada en el sitio y en los canales de venta.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">2. Alcance y canales de contratación</h2>
            <p>El sitio presenta información sobre alojamiento rural y productos artesanales. En la versión actual, el formulario de disponibilidad dirige la consulta a WhatsApp; no constituye por sí solo una reserva confirmada ni un cobro. La reserva se perfecciona cuando el prestador confirma por escrito la disponibilidad, fechas, número de huéspedes, precio total, servicios incluidos, forma de pago y condiciones particulares, y el consumidor acepta esa propuesta.</p>
            <p>Las compras de productos que se acuerden por WhatsApp, correo, plataformas de terceros u otros canales se rigen por la oferta y confirmación enviadas para esa operación, además de estos términos y de los derechos legales del consumidor. Si una plataforma interviene en el pago o la reserva, también podrán aplicar sus condiciones, sin que estas sustituyan las obligaciones legales del prestador.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">3. Información de productos, alojamiento y precios</h2>
            <p>Las descripciones, fotografías, disponibilidad, restricciones, cantidades, materiales, características, tiempos de entrega o prestación y servicios incluidos se informarán de forma clara antes de aceptar la operación. Los productos artesanales pueden presentar variaciones razonables de tono, textura o acabado propias de su elaboración manual; cualquier diferencia relevante o característica especial se informará antes de la compra.</p>
            <p>Los precios se expresan en pesos colombianos (COP) e indicarán impuestos, cargos, transporte y demás valores que correspondan. El consumidor solo estará obligado a pagar el precio total informado y aceptado antes de concluir la transacción. Las ofertas y promociones tendrán vigencia, disponibilidad y condiciones visibles. La confirmación de una reserva o pedido identificará el precio final y lo incluido.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">4. Reservas de alojamiento</h2>
            <p>Toda solicitud está sujeta a disponibilidad y confirmación expresa. Antes de pagar, el consumidor recibirá las fechas de entrada y salida, número de huéspedes, capacidad, precio, servicios incluidos, política de cancelación aplicable, forma de pago y horarios de ingreso y salida: [Hora de ingreso] y [Hora de salida]. Las solicitudes especiales solo se entienden aceptadas cuando el prestador las confirme por escrito.</p>
            <p>El titular de la reserva debe comprobar los datos de confirmación y comunicar oportunamente errores. Las reglas razonables de convivencia, seguridad, capacidad y cuidado del alojamiento se informarán antes de confirmar; no podrán utilizarse para desconocer derechos del consumidor ni para cambiar unilateralmente lo acordado.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">5. Pedidos, pagos y comprobantes</h2>
            <p>El canal de pago disponible, las instrucciones, el plazo de pago, la entrega o recogida y cualquier costo adicional se informarán antes de la aceptación. No envíe claves, códigos de seguridad ni datos completos de tarjetas por WhatsApp o correo. Si se incorpora un proveedor de pagos, el tratamiento de los datos de pago se sujetará también a sus avisos y condiciones.</p>
            <p>Una vez aceptada la operación, el prestador enviará una constancia con el pedido o reserva, precio y condiciones pactadas por un medio que el consumidor pueda conservar. La factura o documento equivalente se emitirá cuando corresponda conforme a la normativa tributaria.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">6. Entrega, prestación y garantía</h2>
            <p>Los productos se entregarán en el lugar y plazo confirmados. El consumidor debe verificar el pedido al recibirlo y reportar novedades sin perjuicio de los términos legales para reclamar. El alojamiento se prestará en las fechas y condiciones confirmadas, con la calidad e idoneidad ofrecidas. La garantía legal y los remedios por incumplimiento se aplicarán según la naturaleza del bien o servicio y la Ley 1480 de 2011.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">7. Retracto, cancelaciones y reversión del pago</h2>
            <p>Cuando legalmente proceda el derecho de retracto en una venta a distancia, el consumidor podrá ejercerlo dentro de los cinco (5) días hábiles previstos en la Ley 1480 de 2011. Para servicios, el término se cuenta desde la celebración del contrato; para bienes, desde su entrega. Se aplican las excepciones legales, entre ellas los servicios cuya prestación haya comenzado con acuerdo del consumidor, los bienes personalizados y los bienes perecederos, según corresponda. El reintegro derivado del retracto se efectuará dentro del término legal de hasta treinta (30) días calendario desde su ejercicio.</p>
            <p>Las condiciones de cancelación de cada reserva o pedido deben informarse y aceptarse antes del pago. Las solicitudes de cancelación, devolución y reembolso se tramitan conforme a la <a className="underline" href="/reembolsos">Política de Cancelaciones y Reembolsos</a> y nunca limitan los derechos legales de retracto, garantía, reversión del pago o reclamación.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">8. Uso del sitio y propiedad intelectual</h2>
            <p>La persona usuaria se compromete a utilizar el sitio de forma lícita, no interferir con su seguridad y no proporcionar información falsa. Los textos, fotografías, marcas, diseños y demás contenidos pertenecen a sus titulares y no pueden reproducirse o explotarse comercialmente sin autorización, salvo los usos permitidos por la ley. Esta cláusula no afecta derechos sobre contenidos de terceros ni limita usos legítimos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">9. Privacidad, disponibilidad y cambios</h2>
            <p>El tratamiento de datos personales se rige por la <a className="underline" href="/privacidad">Política de Privacidad y Tratamiento de Datos Personales</a>. El prestador procurará mantener el sitio disponible y seguro, pero puede suspenderlo temporalmente por mantenimiento, incidentes técnicos o causas fuera de su control. Esto no lo exonera de cumplir las reservas, pedidos ni las obligaciones legales ya adquiridas.</p>
            <p>Las modificaciones a estos términos se publicarán con su fecha de actualización y aplicarán a operaciones futuras. Las condiciones aceptadas para una reserva o compra ya confirmada no se modificarán unilateralmente.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">10. Reclamaciones y ley aplicable</h2>
            <p>Las consultas y reclamaciones pueden presentarse en [Correo electrónico oficial] o por WhatsApp al [+57 320 7016292], indicando nombre, medio de respuesta, número de reserva o pedido, hechos y solución solicitada. El prestador acusará recibo y entregará un número de radicado o constancia. Las reclamaciones directas de consumo se responderán de fondo dentro de los quince (15) días hábiles siguientes a su recepción, conforme a la Ley 1480 de 2011.</p>
            <p>Estos términos se rigen por las leyes de la República de Colombia. El consumidor podrá acudir a la <a className="underline" href="https://www.sic.gov.co/" target="_blank" rel="noopener noreferrer">Superintendencia de Industria y Comercio (SIC)</a> o a la autoridad competente, sin perjuicio de intentar primero la reclamación directa cuando la ley lo exija. Ninguna disposición de estos términos excluye derechos imperativos del consumidor.</p>
          </section>
        </div>
        <div className="mt-12">
          <Button onClick={() => window.history.back()} variant="outline">Volver</Button>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
