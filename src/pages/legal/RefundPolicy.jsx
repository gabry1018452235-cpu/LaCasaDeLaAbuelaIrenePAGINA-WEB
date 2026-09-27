import React from 'react';
import SeoMetadata from '@/components/SeoMetadata';
import { Button } from '@/components/ui/button';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-bone text-oak px-6 py-20 md:px-20 lg:px-40">
      <SeoMetadata path="/reembolsos" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-terracotta mb-8">Política de Cancelaciones y Reembolsos</h1>
        <p className="text-sm text-oak/60 mb-8">Última actualización: [Fecha de publicación]</p>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Esta política aplica a las reservas de alojamiento y a los productos artesanales ofrecidos por <strong>Casa de La Abuela Irene</strong>. No reduce derechos de retracto, garantía, reversión del pago ni otros derechos reconocidos por la Ley 1480 de 2011. Cada oferta debe informar antes del pago sus condiciones particulares de cancelación, entrega y reembolso.</p>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">1. Identificación y canales para solicitar atención</h2>
            <address className="not-italic">
              <p>Prestador: [Nombre o razón social del prestador], NIT [NIT del prestador]</p>
              <p>Dirección: [Vereda Los Tanques, Finca La Mata de Guadua, Código Postal 632001, Calarcá, Quindío, Colombia._gabry.1018452235]</p>
              <p>WhatsApp/teléfono: [+57 320 7016292]</p>
              <p>Correo para cancelaciones y PQR: [Correo electrónico oficial de atención]</p>
              <p>RNT: [Registro Nacional de Turismo (RNT) N° 244594]</p>
            </address>
            <p>Solicite cancelaciones, devoluciones, garantías o reembolsos por el canal donde realizó la operación o por uno de los contactos anteriores. Incluya nombre del titular, número de reserva o pedido, fecha, producto o servicio, motivo, medio de pago y solución solicitada. No remita números completos de tarjetas, claves ni códigos de seguridad.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">2. Constancia y plazos de respuesta</h2>
            <p>El prestador enviará acuse de recibo y número de radicado dentro de un (1) día hábil. Si la solicitud se presenta verbalmente, se dejará constancia del recibo, fecha y objeto. Las reclamaciones directas de consumo se responderán de fondo dentro de los quince (15) días hábiles siguientes a su recepción, con las razones y soportes de la decisión, conforme al artículo 58 de la Ley 1480 de 2011. Si falta información indispensable, se solicitará oportunamente y se explicará cómo completar la petición.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">3. Cancelación de reservas por el huésped</h2>
            <p>La confirmación de cada reserva indicará claramente el plazo para cancelar, los cargos que eventualmente apliquen y el valor reembolsable. Según la condición informada y aceptada, una cancelación recibida con al menos cuarenta y ocho (48) horas antes de la hora de ingreso da derecho al reembolso total del depósito pagado. Para solicitudes recibidas después de ese plazo, se aplicará únicamente la condición específica comunicada antes de contratar; si no se informó y aceptó un cargo, no se impondrá una penalidad no divulgada.</p>
            <p>La solicitud se entiende presentada cuando el prestador la recibe por escrito en WhatsApp o correo. El huésped debe esperar confirmación y conservar el radicado. La inasistencia (no-show), salida anticipada, cambio de fechas o reducción de huéspedes se tratará conforme a la condición particular informada al reservar y a los derechos imperativos aplicables.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">4. Cancelación o incumplimiento por parte del prestador</h2>
            <p>Si el prestador cancela, no puede ofrecer el alojamiento confirmado o incumple de manera que impida prestar el servicio contratado, informará al consumidor a la mayor brevedad y ofrecerá, a elección del consumidor cuando corresponda, una alternativa equivalente aceptable o el reembolso de las sumas pagadas. No se impondrán descuentos o penalidades por una cancelación imputable al prestador. Los cambios de fecha o alojamiento requieren aceptación del consumidor.</p>
            <p>Ante fuerza mayor o caso fortuito, las partes procurarán una reprogramación voluntaria o la devolución que corresponda según la parte no ejecutada, la ley y las condiciones aceptadas. Esta regla no constituye una exoneración automática de responsabilidad ni limita los remedios legales del consumidor.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">5. Derecho de retracto y reversión del pago</h2>
            <p>Cuando proceda el derecho de retracto para una compra a distancia, podrá ejercerse dentro de los cinco (5) días hábiles siguientes a la entrega del bien o a la celebración del contrato de servicios. Aplican las excepciones establecidas por la ley, por ejemplo, servicios cuya ejecución haya comenzado con acuerdo del consumidor, productos personalizados y bienes perecederos, según el caso. El dinero que corresponda se devolverá dentro del máximo legal de treinta (30) días calendario desde el ejercicio del retracto.</p>
            <p>La reversión de pagos electrónicos procede solo en las causales legales, como fraude, operación no solicitada, no recepción, producto distinto o defectuoso, y debe solicitarse al proveedor y al emisor del medio de pago dentro de los cinco (5) días hábiles previstos por la ley, aportando la información requerida. Este mecanismo es diferente a una cancelación voluntaria y no reemplaza el trámite ante el emisor del pago.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">6. Productos artesanales: novedades, garantía y devoluciones</h2>
            <p>Si un producto llega averiado, incompleto, defectuoso o distinto de lo confirmado, comuníquelo tan pronto como sea posible e incluya fotografías, número de pedido y evidencia de entrega. Se evaluará la garantía legal y, según corresponda, se ofrecerá reparación, reposición o devolución de dinero en los términos de la Ley 1480 de 2011. Variaciones menores propias de la elaboración manual solo se considerarán aceptadas cuando hayan sido descritas claramente antes de la compra y no afecten la calidad o idoneidad ofrecida.</p>
            <p>Las excepciones legales al retracto de bienes personalizados o perecederos no eliminan el derecho a reclamar por defectos, falta de conformidad o incumplimiento. No se exigirá el empaque original cuando la ley no lo requiera ni se impondrán condiciones que hagan impracticable un derecho legal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">7. Aprobación y ejecución del reembolso</h2>
            <p>Una vez aprobada una devolución voluntaria o una cancelación que dé lugar a reembolso, el prestador ordenará el reintegro dentro de diez (10) días hábiles, usando preferiblemente el mismo medio de pago. Si el medio original no admite el reembolso, se acordará con el titular un medio alternativo verificable. Este plazo operativo no sustituye ni amplía los términos legales aplicables: se respetará siempre el que venza primero cuando la ley establezca un plazo máximo distinto. La fecha de reflejo final puede depender de los tiempos del banco o proveedor de pagos; el prestador informará la fecha y soporte de la orden emitida.</p>
            <p>El consumidor recibirá por escrito la decisión, el valor aprobado o las razones de la negativa, el método de devolución y el soporte de la operación. Los reembolsos no incluirán cargos de terceros que la ley permita excluir y que hayan sido informados antes de la compra; nunca se descontarán conceptos prohibidos por la ley.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">8. Escalamiento de reclamos</h2>
            <p>Si la respuesta no resuelve la solicitud, el consumidor puede responder al mismo radicado aportando nuevos antecedentes o acudir a la <a className="underline" href="https://www.sic.gov.co/" target="_blank" rel="noopener noreferrer">Superintendencia de Industria y Comercio (SIC)</a> o a la autoridad competente, con los soportes de la compra y de la reclamación directa. El prestador conservará trazabilidad de la solicitud y de su respuesta. Esta política se interpreta junto con los <a className="underline" href="/terminos">Términos y Condiciones de Uso y Venta</a>.</p>
          </section>
        </div>
        <div className="mt-12">
          <Button onClick={() => window.history.back()} variant="outline">Volver</Button>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
