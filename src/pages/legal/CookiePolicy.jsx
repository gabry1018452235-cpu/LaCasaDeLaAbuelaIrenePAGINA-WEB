import React from 'react';
import SeoMetadata from '@/components/SeoMetadata';
import { Button } from '@/components/ui/button';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-bone text-oak px-6 py-20 md:px-20 lg:px-40">
      <SeoMetadata path="/cookies" />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-terracotta mb-8">Política de Cookies</h1>
        <p className="text-sm text-oak/60 mb-8">Última actualización: [Fecha de publicación]</p>
        <Button
          type="button"
          onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
          variant="outline"
          className="mb-8"
        >
          Configurar preferencias de cookies
        </Button>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Esta política informa cómo el sitio de <strong>Casa de La Abuela Irene</strong> utiliza cookies y tecnologías similares (por ejemplo, almacenamiento local, píxeles o componentes de terceros). Se complementa con la <a className="underline" href="/privacidad">Política de Privacidad y Tratamiento de Datos Personales</a>.</p>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">1. Qué son y qué datos pueden recoger</h2>
            <p>Las cookies son archivos que un sitio o proveedor puede guardar en el navegador. El almacenamiento local cumple una función parecida, aunque no es técnicamente una cookie. Estas tecnologías pueden registrar identificadores, preferencias, IP, dispositivo, navegador y actividad de navegación. La información que identifique o pueda asociarse a una persona se trata como dato personal conforme a la ley aplicable.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">2. Tecnologías utilizadas en este sitio</h2>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><strong>Almacenamiento funcional:</strong> las preferencias se guardan en el almacenamiento local del navegador bajo <code>cookie_consent</code>. Registra las categorías elegidas y permanece hasta que se borren los datos del sitio o del navegador, o se actualicen las preferencias.</li>
              <li><strong>Medición (opcional):</strong> Google Analytics 4 solo se carga después de aceptar la categoría “Analíticas”. Google puede usar cookies o identificadores, como <code>_ga</code> y variantes, conforme a su propia configuración y política. Al retirar el permiso, el sitio desactiva la medición y elimina las cookies analíticas propias que puede identificar.</li>
              <li><strong>Servicios externos (opcionales):</strong> Google Maps, Google Fonts y el widget de voz de ElevenLabs solo se cargan después de aceptar “Servicios externos”. Al habilitarlos, esos proveedores pueden recibir datos técnicos y usar sus propias tecnologías de almacenamiento.</li>
              <li><strong>Canales externos:</strong> al abrir WhatsApp, Booking, Airbnb u otro sitio, la navegación y los datos quedan sujetos a las políticas del proveedor correspondiente.</li>
            </ul>
            <p>Los nombres, duración y contenido exactos de cookies de terceros pueden cambiar por actualizaciones del proveedor, navegador, configuración o región. Google Analytics puede conservar identificadores por períodos definidos por Google y por la configuración de la cuenta. Antes de publicar, el responsable debe verificar el inventario y duración efectiva en los navegadores y servicios activos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">3. Finalidades y fundamento</h2>
            <p>Las tecnologías necesarias se utilizan para guardar la elección de cookies y mantener las funciones básicas. Las analíticas miden visitas e interacciones. Los servicios externos permiten mostrar el mapa, las fuentes web y el asistente de voz. Las categorías opcionales permanecen desactivadas hasta que la persona las habilite. Consulta la <a className="underline" href="/privacidad">Política de Privacidad</a> para conocer los responsables, destinatarios y derechos sobre los datos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">4. Cómo funciona el consentimiento</h2>
            <p>Antes de recibir una elección, el sitio no carga Google Analytics, Google Maps, Google Fonts ni el asistente de voz de ElevenLabs. El banner permite “Aceptar todas”, “Rechazar opcionales” o “Gestionar” las categorías. Las tecnologías necesarias no pueden desactivarse porque guardan la preferencia y permiten operar el sitio. Las analíticas y servicios externos están desactivados por defecto.</p>
            <p>La opción “Rechazar opcionales” guarda la elección sin habilitar esas categorías. En “Gestionar”, la persona puede activar una o ambas categorías y guardar su selección. Las preferencias pueden cambiarse posteriormente desde el botón “Cookies” flotante, desde “Configurar cookies” en el pie de página o desde esta política; retirar el permiso detiene las cargas opcionales posteriores y desactiva Google Analytics.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">5. Cómo gestionar o borrar estos datos</h2>
            <p>También puede borrar el almacenamiento del sitio desde las opciones de privacidad del navegador. Si lo hace, se eliminará <code>cookie_consent</code> y el banner volverá a aparecer. Sin autorización para servicios externos, el mapa y el asistente de voz no se cargarán; la ubicación y los canales de contacto seguirán visibles en el sitio. Para ejercer derechos sobre datos personales, contacte a [Correo electrónico de protección de datos] o consulte la <a className="underline" href="/privacidad">Política de Privacidad</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-moss mb-3">6. Proveedores y cambios</h2>
            <p>La carga de componentes externos está sujeta a los avisos de privacidad de Google, Meta/WhatsApp y ElevenLabs, según el servicio utilizado. El responsable puede actualizar esta política cuando cambien las tecnologías, finalidades o requisitos legales. La versión vigente y su fecha se publicarán en esta página.</p>
          </section>
        </div>
        <div className="mt-12">
          <Button onClick={() => window.history.back()} variant="outline">Volver</Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
