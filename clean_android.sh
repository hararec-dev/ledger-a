#!/usr/bin/env bash

# Script para limpiar las carpetas de configuración de Android
# Creado para reducir el tamaño de las carpetas de configuración y resolver problemas de compilación

echo "🧹 Iniciando limpieza del proyecto React Native para Android..."

echo "🗑️  Eliminando carpeta ~/.gradle..."
rm -rf ~/.gradle

echo "🗑️  Eliminando carpeta android/.gradle..."
rm -rf android/.gradle

echo "🗑️  Eliminando carpeta android/app/build..."
rm -rf android/app/build

echo "🗑️  Eliminando carpeta node_modules..."
rm -rf node_modules

echo "🧹 Limpiando caché de yarn..."
yarn cache clean

echo "📦 Reinstalando dependencias con yarn..."
yarn install

echo "🧼 Ejecutando limpieza de Gradle..."
cd android && ./gradlew clean && cd ..

echo "🚀 Iniciando la aplicación en Android..."
yarn android

echo "✅ Proceso de limpieza y reinicio completado!"