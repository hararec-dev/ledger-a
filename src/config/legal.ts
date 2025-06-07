import type { TermLegalSection } from '@types';

export const LEGAL_ACCEPTANCE_LABELS = {
    accept: 'Aceptar',
    and: 'y',
    termsAndConditions: 'términos y condiciones',
    privacyPolicy: 'política de privacidad',
};

export const termsAndConditions: TermLegalSection = {
    title: 'Términos y Condiciones de Ledger A',
    lastUpdate: 'Última actualización: [Fecha]',
    sections: [
        {
            subtitle: 'Introducción',
            items: [
                { text: 'Ledger A (\'la App\') es una aplicación móvil de gestión financiera personal desarrollada por [Tu Nombre Completo] (\'Desarrollador\', \'nosotros\'), como individuo bajo las leyes de México. Al utilizar la App, aceptas estos Términos y Condiciones (\'Términos\').' },
            ],
        },
        {
            subtitle: 'Aceptación de los Términos',
            items: [
                { text: 'El uso de la App implica aceptación plena de estos Términos y la Política de Privacidad.' },
                { text: 'Si no estás de acuerdo, deberás abstenerte de usar la App.' },
            ],
        },
        {
            subtitle: 'Cuentas de Usuario',
            items: [
                { text: 'Opcionalidad', subitems: ['Puedes usar funciones básicas sin cuenta.', 'La creación de cuenta es voluntaria para acceder a funciones premium.'] },
                { text: 'Responsabilidad', subitems: ['Eres responsable de la confidencialidad de tus credenciales y actividades en tu cuenta.'] },
                { text: 'Veracidad', subitems: ['Debes proporcionar información precisa y actualizada.'] },
            ],
        },
        {
            subtitle: 'Contenido del Usuario',
            items: [
                { text: 'Derechos', subitems: ['Conservas la propiedad de todo contenido (texto, imágenes) que subas a la App.'] },
                { text: 'Licencia', subitems: ['Nos concedes una licencia no exclusiva, mundial y libre de regalías para usar dicho contenido con fines operativos de la App.'] },
                { text: 'Prohibiciones', subitems: ['No podrás subir contenido ilegal, difamatorio o que infrinja derechos de terceros.'] },
            ],
        },
        {
            subtitle: 'Propiedad Intelectual',
            items: [
                { text: 'Nuestros derechos', subitems: ['Todos los elementos de la App (código, diseño, marcas \'Ledger A\', gráficos) son propiedad exclusiva del Desarrollador.'] },
                { text: 'Restricciones', subitems: ['Queda prohibida la reproducción, modificación o uso comercial sin autorización por escrito.'] },
            ],
        },
        {
            subtitle: 'Suscripciones y Prueba Gratuita',
            items: [
                { text: 'Prueba de 30 días', subitems: ['Acceso gratuito a funciones premium durante 30 días desde el registro.'] },
                { text: 'Renovación automática', subitems: ['Al finalizar el periodo de prueba, la suscripción se renovará automáticamente salvo cancelación previa.'] },
                { text: 'Cancelación', subitems: ['Puedes gestionar suscripciones a través de las tiendas de aplicaciones (Google Play/App Store).'] },
            ],
        },
        {
            subtitle: 'Privacidad y Protección de Datos',
            items: [
                { text: 'LFPDPPP', subitems: ['Cumplimos con la Ley Federal de Protección de Datos Personales en Posesión de Particulares.'] },
                { text: 'Datos locales', subitems: ['La versión gratuita almacena datos exclusivamente en tu dispositivo.'] },
                { text: 'Cloud opcional', subitems: ['Los usuarios premium pueden optar por sincronización en nube bajo estándares de seguridad.'] },
            ],
        },
        {
            subtitle: 'Comentarios y Sugerencias',
            items: [
                {
                    text: 'Cesión de derechos: Todo feedback que nos proporciones se considerará de libre uso para mejoras, actualizaciones o nuevas funcionalidades sin obligación de compensación o atribución.',
                },
            ],
        },
        {
            subtitle: 'Limitación de Responsabilidad',
            items: [
                {
                    text: 'Exclusión: No somos responsables por:',
                    subitems: [
                        'Daños indirectos, incidentales o consecuentes derivados del uso de la App.',
                        'Pérdida de datos por fallos técnicos o uso incorrecto de la App.',
                        'Decisiones financieras tomadas con base en los reportes generados.',
                    ],
                },
            ],
        },
        {
            subtitle: 'Exenciones y Garantías',
            items: [
                {
                    text: "La App se proporciona 'tal cual', sin garantías explícitas o implícitas de rendimiento o disponibilidad continua.",
                },
            ],
        },
        {
            subtitle: 'Ley Aplicable y Jurisdicción',
            items: [
                {
                    text: 'Legislación: Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos.',
                },
                {
                    text: 'Conflictos: Cualquier disputa se resolverá en los tribunales competentes de la Ciudad de México.',
                },
            ],
        },
        {
            subtitle: 'Modificaciones a los Términos',
            items: [
                {
                    text: 'Nos reservamos el derecho de actualizar estos Términos. Las modificaciones entrarán en vigor al publicarse en la App.',
                },
            ],
        },
        {
            subtitle: 'Comunicación y Notificaciones',
            items: [
                {
                    text: 'Contacto: Para consultas sobre estos Términos: matematicamatematica1729@gmail.com',
                },
                {
                    text: 'Notificaciones legales: Se considerarán válidas las enviadas al correo anterior.',
                },
            ],
        },
        {
            subtitle: 'Disposiciones sobre Derechos de Autor (DMCA)',
            items: [
                {
                    text: 'Agente designado: Notificaciones de infracción de derechos de autor deben enviarse a:',
                    subitems: [
                        'Email: matematicamatematica1729@gmail.com',
                        'Contenido requerido: Identificación del trabajo protegido, ubicación del material infractor y datos de contacto.',
                    ],
                },
            ],
        },
        {
            subtitle: 'Idioma',
            items: [
                {
                    text: 'Versión original: Español. En caso de discrepancia con la versión en inglés, prevalecerá el texto en español.',
                },
            ],
        },
        {
            subtitle: 'Vigencia',
            items: [
                {
                    text: 'Estos Términos permanecen vigentes mientras uses la App.',
                },
            ],
        },
        {
            subtitle: 'Avisos Legales Adicionales',
            items: [
                {
                    text: 'LFPC: Cumplimos con la Ley Federal de Protección al Consumidor en materia de transparencia en servicios digitales.',
                },
                {
                    text: 'Menores de edad: No está dirigida a menores de 13 años. Si eres menor de 18, necesitas consentimiento parental.',
                },
                {
                    text: 'Derecho de retracto: Según el Artículo 47 Bis de la LFPC, las suscripciones digitales no aplican derecho de retracto una vez iniciado el servicio.',
                },
            ],
        },
    ],
    footer: '© [Año] [Tu Nombre Completo]. Todos los derechos reservados.',
};

export const privacyPolicy: TermLegalSection = {
    title: 'Política de Privacidad de Ledger A',
    lastUpdate: 'Última actualización: [Fecha]',
    sections: [
        {
            subtitle: 'Identidad y Domicilio del Responsable',
            items: [
                { text: 'Nombre: Ledger A (Individuo)' },
                { text: 'Correo electrónico: matematicamatematica1729@gmail.com' },
                { text: 'Jurisdicción: Ciudad de México, México.' },
            ],
        },
        {
            subtitle: 'Alcance y Aceptación',
            items: [
                { text: 'Esta Política de Privacidad rige el tratamiento de datos personales en la aplicación Ledger A, conforme a la LFPDPPP.' },
                { text: 'Al usar la App, aceptas este documento.' },
            ],
        },
        {
            subtitle: 'Definiciones Clave',
            items: [
                { text: 'Datos Personales', subitems: ['Información que identifica o hace identificable a un usuario.'] },
                { text: 'Datos Sensibles', subitems: ['Información financiera, categorías de gastos, y contenido personalizado.'] },
                { text: 'ARCO', subitems: ['Derechos de Acceso, Rectificación, Cancelación y Oposición.'] },
                { text: 'Titular', subitems: ['Usuario que proporciona sus datos.'] },
            ],
        },
        {
            subtitle: 'Datos Recopilados y Finalidades',
            items: [
                { text: 'Datos Recopilados', subitems: ['Correo electrónico (si creas una cuenta)', 'Gastos, ingresos, categorías, etiquetas, cuentas bancarias vinculadas (Premium)', 'Tipo de dispositivo, sistema operativo, dirección IP', 'Emojis, iconos, colores personalizados, notas en transacciones', 'Huella dactilar o Face ID (opcional, almacenados localmente)'] },
                { text: 'Finalidades del Tratamiento', subitems: ['Funcionalidad de la App', 'Seguridad', 'Copias de seguridad locales o en la nube', 'Insights personalizados y mejoras'] },
            ],
        },
        {
            subtitle: 'Bases Legales',
            items: [
                { text: 'Consentimiento: Para datos sensibles (ej. categorías de gastos) y finalidades secundarias.' },
                { text: 'Ejecución contractual: Para funcionalidades esenciales (ej. registro de transacciones).' },
                { text: 'Interés legítimo: Seguridad contra fraudes y mejora técnica.' },
            ],
        },
        {
            subtitle: 'Compartir Datos con Terceros',
            items: [
                {
                    text: 'Proveedores de servicios:',
                    subitems: [
                        'Almacenamiento en la nube (solo para usuarios Premium, con cifrado).',
                        'Herramientas de análisis (ej. Firebase, datos anonimizados).',
                    ],
                },
                { text: 'Cumplimiento legal: En casos requeridos por autoridades mexicanas.' },
                { text: 'Nota: No vendemos ni compartimos datos con fines comerciales no autorizados.' },
            ],
        },
        {
            subtitle: 'Transferencias Internacionales',
            items: [
                {
                    text: 'Si usas sincronización en la nube (Premium), tus datos podrían almacenarse en servidores fuera de México. Garantizamos que los proveedores cumplen estándares de seguridad equivalentes a la LFPDPPP.',
                },
            ],
        },
        {
            subtitle: 'Seguridad de los Datos',
            items: [
                {
                    text: 'Medidas técnicas:',
                    subitems: [
                        'Cifrado AES-256 para datos locales y en tránsito.',
                        'Autenticación de dos factores (opcional para Premium).',
                    ],
                },
                {
                    text: 'Medidas organizativas:',
                    subitems: [
                        'Acceso restringido a datos sensibles.',
                        'Auditorías semestrales de seguridad.',
                    ],
                },
            ],
        },
        {
            subtitle: 'Retención de Datos',
            items: [
                {
                    text: 'Conservamos tus datos:',
                    subitems: [
                        'Hasta que solicites su eliminación.',
                        'Máximo 12 meses tras la desinstalación de la App (para respaldos locales).',
                    ],
                },
            ],
        },
        {
            subtitle: 'Derechos ARCO y Ejercicio',
            items: [
                {
                    text: 'Puedes:',
                    subitems: [
                        'Acceder a tus datos.',
                        'Rectificar información incorrecta.',
                        'Cancelar el tratamiento (eliminar tu cuenta).',
                        'Oponerte a finalidades secundarias.',
                    ],
                },
                {
                    text: 'Procedimiento: Envía una solicitud a matematicamatematica1729@gmail.com con:',
                    subitems: [
                        'Nombre completo.',
                        'Descripción de la solicitud.',
                        'Identificación oficial (para evitar suplantación).',
                    ],
                },
                { text: 'Responderemos en 15 días hábiles.' },
            ],
        },
        {
            subtitle: 'Menores de Edad',
            items: [
                {
                    text: 'La App no está diseñada para menores de 18 años. Si detectamos datos de menores, los eliminaremos.',
                },
            ],
        },
        {
            subtitle: 'Cookies y Tecnologías Similares',
            items: [
                {
                    text: 'Usamos cookies técnicas para:',
                    subitems: [
                        'Funcionalidad offline.',
                        'Personalización de temas.',
                    ],
                },
                { text: 'Puedes desactivarlas en ajustes del dispositivo.' },
            ],
        },
        {
            subtitle: 'Cambios a la Política',
            items: [
                {
                    text: 'Notificaremos cambios vía:',
                    subitems: [
                        'Correo electrónico (usuarios registrados).',
                        'Banner en la App.',
                    ],
                },
                { text: 'La versión actualizada estará disponible en [URL de la política].' },
            ],
        },
        {
            subtitle: 'Contacto',
            items: [
                { text: 'Para dudas o ejercer derechos ARCO: Email: matematicamatematica1729@gmail.com' },
                { text: 'Aviso de Privacidad Integral conforme al artículo 15 de la LFPDPPP.' },
                { text: 'Este documento está disponible en español e inglés.' },
            ],
        },
        {
            subtitle: 'Notas Adicionales',
            items: [
                { text: 'Propiedad intelectual: Todo el contenido generado por Ledger A (marcas, diseños) es propiedad exclusiva del titular.' },
                { text: 'Feedback de usuarios: Los comentarios o sugerencias podrán ser utilizados sin compensación, según lo aceptado al usar la App.' },
                { text: 'Jurisdicción: Cualquier disputa se resolverá en tribunales de la Ciudad de México.' },
                { text: 'Fecha de entrada en vigor: [Fecha]' },
            ],
        },
    ],
    footer: '© Ledger A – Todos los derechos reservados.',
};
