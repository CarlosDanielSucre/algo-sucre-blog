# Algo Sucre Blog
Basado en el **Hextra Starter Template.**
Este repositorio contiene las modificaciones hechas en el site (https://algosucreblog.netlify.app/),
un espacio dedicado a explorar ideas sobre programación, tecnología, pensamiento crítico e inteligencia artificial.

Puedes consultar el repositorio original del template para más información.
Acepto pull requests, pero evita realizar cambios masivos: solo pequeñas mejoras o correcciones son bienvenidas.

## Desarrollo Local
### Pre-requisitos
**Opción recomendada**: Docker + Docker Compose
También puedes instalar las dependencias manualmente si lo prefieres.
#### Con Docker
 - Docker
 - Docker Compose
#### Instalación Local (sin Docker)
 - Hugo (versión extendida)
 - Go
 - Ruby
 - Git
### Usando Docker
### 1. Clone el repositorio
```bash
git clone https://github.com/CarlosDanielSucre/algosucreblog.git
cd algosucreblog
```
#### 2. Inicia el entorno de desarrollo:

```bash
./scripts/dev.sh start
```
#### 3. Accede al blog localmente:
```bash
http://localhost:1313
```
#### Comandos útiles
```bash
./scripts/dev.sh logs           # Ver logs
./scripts/dev.sh stop           # Detener el entorno
./scripts/dev.sh new-post       # Crear un nuevo post
./scripts/dev.sh generate-index # Generar índice de posts
./scripts/dev.sh help           # Mostrar todos los comandos
```
### Instalación Local (sin Docker)
```bash
# Clonar el repositorio
git clone https://github.com/CarlosDanielSucre/algosucreblog.git
cd algosucreblog

# Crear nuevo contenido
nvim content/2025/10/06/mi-post/index.md

# Generar índice
cd content
./scripts/generate_index.rb

# Construir el sitio
hugo

# Ejecutar servidor local
hugo server --logLevel debug --disableFastRender -p 1313
```
## Cómo Contribuir
### 1. Fork y Clone
- Haz un fork del repositorio
- Clona tu fork localmente
### 2. Configura tu entorno
- Usa Docker (recomendado) o instala las dependencias localmente
- Sigue las instrucciones anteriores
### 3. Realiza tus cambios
```
git checkout -b feature/nueva-funcionalidad
# Realiza tus modificaciones
./scripts/dev.sh start   # o hugo server para probar localmente
git commit -m "Agrega nueva funcionalidad"
```
### 4. Crear nuevos posts

 **Con Docker**:
```
./scripts/dev.sh new-post "Título del Post"

```
 **Manual**:
```
mkdir -p content/2025/10/06/mi-post
nvim content/2025/10/06/mi-post/index.md
```

### 5. Estructura de un post

```
---
title: "Título del Post"
date: 2025-10-06T10:00:00-03:00
draft: false
description: "Descripción breve del post"
tags: [programción, tecnología, inteligencia-artificial]
categories: [análisis, opinión]
---
Contenido del post aquí...
```

### 6. Enviar Pull Request

```
git push origin feature/nueva-funcionalidad
```
Luego abre un Pull Request en GitHub y describe claramente tus cambios.

### Estructura del Proyecto
```
algosucreblog/
├── content/            # Posts y páginas (Markdown)
├── layouts/            # Plantillas HTML
├── assets/             # CSS, JS, imágenes
├── hugo.yaml           # Configuración de Hugo
├── go.mod              # Dependencias Go
├── scripts/            # Scripts de desarrollo
├── Dockerfile          # Imagen Docker
└── docker-compose.yml  # Orquestación Docker
```
## Checklist para Contribuciones

- [ ] Probé los cambios localmente (Docker o instalación manual)
- [ ] Generé el índice (./scripts/dev.sh generate-index)
- [ ] Verifiqué que el sitio funciona correctamente
- [ ] Seguí las convenciones del proyecto
- [ ] Documenté cualquier cambio significativo

## Directrices de Contribución

- Mantén los cambios pequeños y enfocados
- Prueba siempre antes de enviar
- Usa mensajes de commit descriptivos
- Respeta el estilo del código existente
- Para cambios grandes, abre primero una issue

## Licencia

**Licencia:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Este trabajo está licenciado bajo una licencia **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional**.
