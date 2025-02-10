# 📖 Ledger-A 💰📊

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

> Ledger-A es una aplicación móvil para la gestión de finanzas personales, enfocada en el control y seguimiento de gastos. Inspirada en la libreta personal de [John D. Rockefeller](https://es.wikipedia.org/wiki/John_D._Rockefeller#Infancia), quien meticulosamente registraba cada transacción en su famoso "Ledger A", esta app busca brindarte la misma disciplina financiera en la era digital.

> 🚀 Características
- ✅ Registro rápido y sencillo de gastos e ingresos
- 📊 Gráficos y reportes detallados para visualizar tus finanzas
- 🔔 Notificaciones y recordatorios para mantener el control
- 🔐 Seguridad en tus datos financieros

> 💡 ¡Lleva un mejor control de tu dinero con Ledger-A y toma decisiones financieras más inteligentes! 

</div>

---

<div id="️-tecnologías-utilizadas">

## 🛠️ Tecnologías Utilizadas

> El proyecto fue desarrollado utilizando las siguientes tecnologías y herramientas:

- **@react-navigation/native: ^7.0.0** - Para la gestión de rutas.
- **react-native:0.77.0** - Framework para construir aplicaciones móviles multiplataforma.

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
3. Usa las pautas de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (`git commit -m '<type>[optional scope]: <description> [optional body] [optional footer(s)]'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

</div>

<div id="-licencia">

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles

</div>

<div id="-creditos">

## 👏 Creditos

- Inspirado en la disciplina financiera de John D. Rockefeller
- Diseño UI [Nombre del Diseñador]

</div>
