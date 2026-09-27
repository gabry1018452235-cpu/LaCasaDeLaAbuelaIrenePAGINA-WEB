import React from 'react';
import SeoMetadata from '@/components/SeoMetadata';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-bone text-oak px-6 py-20 md:px-20 lg:px-40">
      <SeoMetadata path="/privacidad" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-terracotta mb-8">Política de Privacidad y Tratamiento de Datos Personales</h1>
        <p className="text-sm text-oak/60 mb-8">Última actualización: [Fecha de publicación]</p>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Esta política explica cómo <strong>Casa de La Abuela Irene</strong> recolecta, usa, conserva, comparte y protege datos personales en el sitio, al atender consultas y al gestionar reservas de alojamiento y pedidos de productos artesanales. Se aplica conforme a la Ley 1581 de 2012, sus normas reglamentarias y demás disposiciones colombianas vigentes.</p>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">1. Responsable del tratamiento y contacto</h2>
            <address className="not-italic">
              <p>Responsable: [Nombre o razón social del responsable]</p>
              <p>NIT: [NIT del responsable]</p>
              <p>Domicilio: [Vereda Los Tanques, Finca La Mata de Guadua, Código Postal 632001, Calarcá, Quindío, Colombia._gabry.1018452235]</p>
              <p>Teléfono y WhatsApp: [+57 320 7016292]</p>
              <p>Correo para consultas y reclamos de datos: [Correo electrónico de protección de datos]</p>
            </address>
            <p>El responsable designará a [Persona o área encargada de protección de datos] para atender los derechos de los titulares.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">2. Datos que podemos tratar</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Identificación y contacto: nombre, documento cuando sea necesario, teléfono, correo y datos de contacto de acompañantes suministrados por quien reserva.</li>
              <li>Reserva o pedido: fechas, número de huéspedes, preferencias, producto solicitado, dirección de entrega, comunicaciones y estado de la operación.</li>
              <li>Transacción: valores, comprobantes y método de pago. El sitio no solicita por WhatsApp claves, códigos de seguridad ni el número completo de tarjetas.</li>
              <li>Datos técnicos de navegación: dirección IP, identificadores del dispositivo o navegador, páginas consultadas, eventos de uso y datos almacenados mediante cookies o tecnologías similares.</li>
            </ul>
            <p>No se solicitan datos sensibles salvo que sean estrictamente necesarios y exista habilitación legal y, cuando corresponda, autorización explícita. Si se solicitan, se informará que responder es facultativo. Los datos de niñas, niños y adolescentes se tratarán únicamente cuando sea necesario, respetando sus derechos prevalentes y con intervención de su representante legal cuando la ley lo exija.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">3. Finalidades y fundamento</h2>
            <p>Tratamos datos para: responder solicitudes y cotizaciones; verificar disponibilidad; confirmar y administrar reservas y pedidos; coordinar alojamiento, entrega y atención posventa; procesar pagos mediante el proveedor elegido; expedir comprobantes; atender garantías, retractos, cancelaciones, PQR y requerimientos de autoridades; cumplir obligaciones contables, tributarias y turísticas; prevenir fraude y proteger la seguridad del sitio; y, con autorización cuando sea necesaria, enviar novedades u ofertas comerciales.</p>
            <p>El tratamiento se sustenta en la autorización previa e informada del titular cuando sea exigible, la ejecución de medidas precontractuales o del contrato solicitado, el cumplimiento de obligaciones legales y el ejercicio o defensa de derechos. Negarse a entregar datos indispensables puede impedir cotizar o prestar el servicio; los datos opcionales y los usados para mercadeo no condicionan la compra.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">4. Canales y proveedores que intervienen</h2>
            <p>Las consultas de reserva del sitio se envían a WhatsApp cuando la persona pulsa el botón correspondiente; Meta/WhatsApp trata esos datos bajo sus propias condiciones. Google Analytics 4, Google Maps, Google Fonts y el widget de voz de ElevenLabs solo se cargan cuando la persona autoriza sus respectivas categorías en las preferencias de cookies. Al habilitarlos, estos proveedores pueden recibir datos técnicos como IP, navegador e interacción con sus componentes y operar infraestructura fuera de Colombia.</p>
            <p>También podrán acceder a datos, bajo instrucciones y deberes de confidencialidad, proveedores de alojamiento web, soporte tecnológico, correo, pagos, mensajería o plataformas de reserva que se utilicen efectivamente para la operación. Los datos solo se compartirán en lo necesario para esas finalidades, con autorización cuando corresponda, por obligación legal o para la ejecución del servicio. El responsable no vende bases de datos personales.</p>
            <p>Cuando exista transmisión o transferencia internacional, se aplicarán las garantías y excepciones previstas en la Ley 1581 de 2012. Los servicios de terceros enlazados tienen políticas propias y el responsable no controla sus prácticas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">5. Conservación y seguridad</h2>
            <p>Conservaremos los datos durante el tiempo necesario para las finalidades informadas y, después, por los períodos exigidos por obligaciones contables, tributarias, turísticas, contractuales o de defensa jurídica. Cumplidos esos plazos, se suprimirán, anonimizarán o bloquearán según corresponda. Aplicamos medidas administrativas, técnicas y humanas razonables para prevenir pérdida, alteración, consulta o acceso no autorizado; ningún sistema conectado a internet puede garantizar seguridad absoluta.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">6. Derechos del titular</h2>
            <p>El titular puede conocer, acceder, actualizar y rectificar sus datos; solicitar prueba de la autorización; conocer el uso dado; presentar reclamos; pedir la revocatoria de la autorización o supresión cuando proceda; y acudir ante la Superintendencia de Industria y Comercio (SIC), una vez agotado el trámite ante el responsable. La supresión o revocatoria no procederá cuando exista un deber legal o contractual de conservar o tratar la información.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">7. Cómo presentar consultas y reclamos</h2>
            <p>Envíe la solicitud a [Correo electrónico de protección de datos] o a la dirección física indicada en esta política, dirigida al Responsable de Protección de Datos. Incluya nombre e identificación del titular, descripción clara de la solicitud, datos de contacto para respuesta y, si actúa un representante, soporte de esa calidad. Para proteger la información podremos verificar razonablemente la identidad. No envíe datos financieros sensibles por WhatsApp.</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Las consultas se responderán dentro de diez (10) días hábiles desde su recepción. Si no es posible, se informará el motivo y la nueva fecha, que no podrá superar cinco (5) días hábiles adicionales.</li>
              <li>Los reclamos completos se resolverán dentro de quince (15) días hábiles contados desde el día siguiente a su recepción. Si se requiere más tiempo, se informarán los motivos y la fecha de respuesta, que no podrá superar ocho (8) días hábiles adicionales.</li>
              <li>Si el reclamo está incompleto, se solicitará subsanarlo dentro de los cinco (5) días siguientes. Si quien lo recibe no es competente, lo trasladará al competente dentro de dos (2) días hábiles e informará al titular.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">8. Cambios a esta política</h2>
            <p>Los cambios sustanciales se publicarán en esta página y se comunicarán a los titulares cuando la ley lo exija, antes de aplicarlos. La versión vigente indicará su fecha de actualización. La política se complementa con la <a className="underline" href="/cookies">Política de Cookies</a>.</p>
          </section>
        </div>
        <div className="mt-12">
          <Button onClick={() => window.history.back()} variant="outline">Volver</Button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
