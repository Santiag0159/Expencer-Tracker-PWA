# Proyecto Colaborativo - Expense Tracker (PWA)

### ¡Bienvenidos al repositorio del equipo para el Sprint 2! Este archivo contiene la guía definitiva para configurar el entorno de desarrollo local, instalar las dependencias, probar las funciones offline y mantener un flujo de trabajo ordenado mientras construimos nuestra Progressive Web App (PWA) con React y Vite.

### 1. Cómo levantar y probar la aplicación

Vite funciona diferente a Expo. A continuación se detallan los tres modos principales que utilizaremos para levantar y probar la app:

## A. Instalación inicial (Primera vez)

* Clona el repositorio:

```
git clone https://github.com/Santiag0159/Expencer-Tracker-PWA.git

cd ExpenseTracker
```

### Instala las dependencias:
``
npm install
``

## B. Modo Desarrollo (Pruebas en la computadora)

Para trabajar en tu código y ver los cambios en tiempo real en tu PC:

``
npm run dev
``

Esto abrirá un servidor local (generalmente en http://localhost:5173/).

## C. Prueba en Celular (Red Local)

A diferencia de Expo, Vite requiere un comando específico para exponer la app a los celulares conectados a tu misma red Wi-Fi:

Asegúrate de que PC y celular estén en el mismo Wi-Fi.

Ejecuta:

``
npm run dev --host
``

* La terminal te mostrará una IP (ej: Network: http://192.168.1.5:5173/).

Ingresa esa URL exacta en el navegador de tu celular (Chrome o Safari).

## D. Modo Producción (Prueba PWA y Offline)

### ¡IMPORTANTE! El Service Worker (que permite que la app funcione sin internet y sea instalable) NO se activa en el modo de desarrollo (npm run dev). Para probar la US #8, debes compilar la app:

Genera el build de producción:

``
npm run build
``

Levanta la vista previa:

``
npm run preview
``

 Abre la URL que te arroja. Ahora podrás ir a las DevTools del navegador -> Application -> Service Workers y probar la app simulando la pérdida de conexión (Offline).

### 2. Flujo de Trabajo y Buenas Prácticas de Git

El trabajo ordenado en Git es obligatorio para evitar conflictos masivos (merge conflicts).

## Regla de Oro:

NUNCA hagas commits directamente sobre la rama main o master.

Paso a paso para trabajar en tu US:

Sincroniza tu local: Antes de empezar tu día, asegúrate de tener lo último.

```
git checkout main
git pull origin main
```

Crea tu rama: Nombra tu rama de forma descriptiva (US + tu nombre + tarea).

```
git checkout -b us1/rama-santiago
```

Trabaja y haz commits: Realiza commits pequeños y descriptivos.
```
git add .
git commit -m "Estructura terminada"
```

Actualiza tu rama antes de subir: Si tus compañeros subieron cosas a main mientras trabajabas, actualiza tu rama para resolver conflictos localmente:

```
git merge main
```

Sube y crea el Pull Request (PR):
```
git push origin feature/us4-noelia-home
```

 Ve a GitHub, crea el PR hacia main y avisa por el grupo para que alguien lo revise y apruebe.

### 3. Consejos útiles para el trabajo colaborativo

* Nuevas Dependencias: Si necesitas instalar una librería nueva (ej. npm install react-icons), avisa inmediatamente por el grupo de chat. Tus compañeros deberán ejecutar npm install en sus computadoras para sincronizar las carpetas node_modules.

* Archivos Protegidos: Revisa siempre que no estés intentando subir la carpeta node_modules/, la carpeta dist/ o archivos .env. Estos deben estar bloqueados en el archivo .gitignore.

* Recursos de la PWA: Todo lo relacionado a la instalabilidad (íconos, manifest.json, splash screens) debe ir estrictamente dentro de la carpeta public/ para que Vite los procese correctamente.

* Comunicación de Rutas: Dado que Nery se encarga de las rutas (US #7), mantengan comunicación constante para asegurarse de que los nombres de las vistas (ej. /expenses, /settings) coincidan en todos los archivos.