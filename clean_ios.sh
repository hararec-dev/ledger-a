#!/usr/bin/env bash

# Script para limpiar las carpetas de configuración de iOS
# Creado para reducir el tamaño de las carpetas de configuración y resolver problemas de compilación

echo "🧹 Iniciando limpieza del proyecto React Native para iOS..."

echo "🗑️  Eliminando carpeta DerivedData de Xcode..."
rm -rf ~/Library/Developer/Xcode/DerivedData

echo "🗑️  Eliminando caché de CocoaPods..."
rm -rf ~/Library/Caches/CocoaPods

echo "🗑️  Eliminando carpeta Pods..."
rm -rf ios/Pods

echo "🗑️  Eliminando carpeta build de iOS..."
rm -rf ios/build

echo "🗑️  Eliminando carpeta node_modules..."
rm -rf node_modules

echo "🧹 Limpiando caché de yarn..."
yarn cache clean

echo "📦 Reinstalando dependencias con yarn..."
yarn install

echo "🧪 Instalando pods de CocoaPods..."
cd ios && pod install && cd ..

echo "🚀 Iniciando la aplicación en iOS..."
yarn ios

echo "✅ Proceso de limpieza y reinicio completado!"