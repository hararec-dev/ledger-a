# Ledger-A 💸✨

## 📋 Índice
- [📖 Descripción](#-descripción)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [⚙️ Configuración del Proyecto](#️-configuración-del-proyecto)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)
- [👏 Creditos](#-creditos)

---

<div id="-descripción">

## 📖 Descripción 

> Ledger-A es una aplicación móvil diseñada para transformar la gestión de tus finanzas personales. Nuestra inspiración proviene de la legendaria disciplina financiera de [John D. Rockefeller](https://es.wikipedia.org/wiki/John_D._Rockefeller#Infancia), una figura histórica que, más allá de sus controversias empresariales, estableció un paradigma en la administración financiera personal. El célebre "Ledger A", su meticuloso libro de contabilidad donde registraba cada movimiento financiero, se convirtió en un símbolo de disciplina. Hemos modernizado esta metodología para la era digital, ofreciéndote una herramienta que te permite mantener un control preciso y sistemático de tus finanzas personales.

</div>

<div align="center">
  <div style="display: flex; flex-direction: row; overflow-x: auto; gap: 15px; padding: 20px 0; justify-content: center;">
    <img src="./screenshots/screenshot_1.jpeg" alt="Dashboard" width="200" style="flex-shrink: 0;">
    <img src="./screenshots/screenshot_2.jpeg" alt="Categorías" width="200" style="flex-shrink: 0;">
    <img src="./screenshots/screenshot_3.jpeg" alt="Reportes 1" width="200" style="flex-shrink: 0;">
  </div>
</div>

> 🚀 Características
- ✅ Registro rápido y sencillo de gastos e ingresos
- 📊 Gráficos y reportes detallados para visualizar tus finanzas
- 🔔 Notificaciones y recordatorios para mantener el control
- 🔐 Seguridad en tus datos financieros

> 💡 ¡Lleva un mejor control de tu dinero con Ledger-A y toma decisiones financieras más inteligentes! 

---

<div id="️-tecnologías-utilizadas">

## 🛠️ Tecnologías Utilizadas

> El proyecto fue desarrollado utilizando las siguientes tecnologías y herramientas:

- **React Native: 0.77.0** - Framework para construir aplicaciones móviles híbridas con JavaScript y React.
- **@nozbe/watermelondb: ^0.27.1** - Base de datos reactiva y offline-first optimizada para React Native.
- **@react-native-async-storage/async-storage: ^2.1.1** - Solución de almacenamiento asíncrono persistente para React Native.
- **@react-navigation/native: ^7.0.14** - Solución de navegación para aplicaciones React Native.
- **@rneui/base & @rneui/themed: ^4.0.0-rc.8** - Biblioteca de componentes UI para React Native.
- **@tanstack/react-query: ^5.66.0** - Biblioteca para gestión de estado y datos asíncronos.
- **formik: ^2.4.6 & yup: ^1.6.1** - Bibliotecas para construir y validar formularios en React y React Native.
- **zustand: ^5.0.3** - Solución de gestión de estado minimalista para React.
- **react-native-biometrics: ^3.0.1** - Integración de autenticación biométrica (huella, Face ID).
- **react-native-chart-kit: ^6.12.0** - Componentes de gráficos para visualización de datos.
- **react-native-fs: ^2.20.0** - Sistema de archivos nativo para React Native.
- **react-native-keychain: ^9.2.3** - Acceso seguro al llavero/keychain del dispositivo.
- **react-native-linear-gradient: ^2.8.3** - Componente para crear gradientes lineales.
- **react-native-vector-icons: ^10.2.0** - Iconos vectoriales personalizables.
- **xlsx: ^0.18.5** - Biblioteca para leer y escribir archivos Excel.

</div>

<div id="️-configuración-del-proyecto">

## ⚙️ Configuración del Proyecto

Para configurar este proyecto en tu máquina local, sigue estos pasos:

> Requisitos Previos

- **Node.js**: Asegúrate de tener Node.js instalado (versión 14 o superior). [Descargar Node.js](https://nodejs.org/)
- **Yarn**: Instala el gestor de paquetes Yarn (recomendado). [Instalar Yarn](https://yarnpkg.com/getting-started/install)
- **Android Studio**: Requerido para desarrollo en Android. [Descargar Android Studio](https://developer.android.com/studio)
- **Xcode**: Requerido para desarrollo en iOS (solo Mac). Disponible en la Mac App Store
- **React Native**: Sigue los pasos en la [Documentación Oficial](https://reactnative.dev/docs/set-up-your-environment)

> Pasos de Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/hararec-dev/Ledger-A.git
   ```

2. Instala las dependencias:
   ```bash
   cd Ledger-A
   yarn install
   ```

3. Para iOS (solo Mac), instala los pods:
   ```bash
   cd ios
   pod install
   cd ..
   ```

5. Inicia el empaquetador Metro:
   ```bash
   yarn start
   ```

6. Ejecuta la aplicación:
   ```bash
   # Para Android
   yarn android

   # Para iOS (solo Mac)
   yarn ios
   ```

> Solución de Problemas

- Si encuentras errores de compilación, intenta limpiar el proyecto:
  ```bash
  # Para Android
  cd android
  ./gradlew clean
  cd ..

  # Para iOS
  cd ios
  xcodebuild clean
  cd ..
  ```

</div>

<div id="-contribución">

## 🤝 Contribución

Las contribuciones son siempre bienvenidas. Por favor, sigue estos pasos:

1. Haz Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Asegúrate de que tu código cumpla con los estándares de estilo:
   ```bash
   # Verificar errores de linting
   yarn lint
   
   # Corregir automáticamente errores de linting
   yarn lint-fix
   
   # Corregir errores de linting y formatear código
   yarn lint-fix-all
   
   # Verificar tipos de TypeScript
   yarn typecheck
   ```

4. Usa las pautas de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`git commit -m '<type>[optional scope]: <description> [optional body] [optional footer(s)]'`)
5. Push a la rama (`git push origin feature/amazing-feature`)
6. Abre un Pull Request

</div>

<div id="-licencia">

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles

</div>

<div id="-creditos">

## 👏 Creditos

- _Inspirado en la disciplina financiera inquebrantable de John D. Rockefeller._
- _Esta app utiliza ilustraciones de [unDraw](https://undraw.co/) bajo licencia MIT, un proyecto de [Katerina Limpitsouni](https://x.com/ninalimpi). Agradecemos su increíble trabajo y contribución a la comunidad de diseño._
<!-- - Diseño UI [Nombre del Diseñador] -->

</div>
