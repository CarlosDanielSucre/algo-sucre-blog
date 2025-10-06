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
