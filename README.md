# Laboratorio: Calculadora Web

Una calculadora web moderna y funcional, diseñada con la estética de la calculadora científica **Casio fx-991LA CW**. Este proyecto fue construido para cumplir con restricciones estructurales y requerimientos técnicos estrictos, demostrando competencia en React, testing y herramientas modernas de frontend.

## Creador por: Hugo Méndez - 241265

---
## Imagen de la calculadora

<img width="362" height="568" alt="image" src="https://github.com/user-attachments/assets/740b2923-c7c8-4f7d-b1c4-2034a9afd4ea" />

---

Link de app corriendo: http://35.255.29.219:5174/

---

## 🚀 Tecnologías (Tech Stack)
- **Framework:** React 19 + TypeScript (vía Vite)
- **Estilos:** CSS puro (`index.css`)
- **Package Manager:** [Bun](https://bun.sh/)
- **Testing:** Vitest & React Testing Library
- **Documentación:** Storybook
- **Linter:** ESLint configurado con `neostandard` (JavaScript Standard Style)
- **Contenedores:** Docker & Docker Compose

## 📌 Requerimientos y Características del Proyecto
Esta calculadora implementa en su totalidad los requerimientos de la tarea del laboratorio:
- **Límite de 9 caracteres en pantalla:** Limita la longitud en el display a un máximo de 9 caracteres, manejando el truncamiento de decimales y números largos correctamente.
- **Estados de Error:** Muestra `ERROR` si las operaciones resultan en números negativos o si superan `999999999`.
- **Operaciones Soportadas:** Suma (`+`), Resta (`-`), Multiplicación (`*`), División (`/`), Módulo (`%`), Cambio de signo (`+/-`), y Punto Decimal (`.`).
- **Restricción Estricta de Longitud de Archivos:** Todo archivo de componentes de React (ej. `App.tsx`, `Calculator.tsx`, `Button.tsx`) contiene estrictamente **menos de 20 líneas de código**. Toda la lógica está abstraída en un custom hook.
- **Lógica en Custom Hook:** La lógica matemática y el estado son manejados completamente por `useCalculator.ts`.
- **Linter Estricto:** Sigue las reglas de Standard JS, con reglas personalizadas para prohibir los puntos y coma (`;`) y para limitar la longitud de la línea a 120 caracteres máximo.
- **Storybook:** Incluye 5 historias personalizadas para los componentes.
- **Pruebas Automatizadas (Testing):** Incluye 5 pruebas lógicas unitarias no triviales vía Vitest.
- **Diseño Premium UI:** Cuenta con un diseño en CSS responsivo de alta calidad directamente inspirado en las calculadoras serie "ClassWiz" de Casio.

## 🏗 Estructura de la Aplicación
```text
.
├── Dockerfile                  # Imagen ultra ligera oven/bun:1-alpine
├── docker-compose.yml          # Configuración del contenedor
├── eslint.config.js            # Configuración de ESLint con StandardJS
├── bun.lock                    # Archivo Lock de Bun
├── src/
│   ├── App.tsx                 # Componente de entrada
│   ├── index.css               # Estilos con el tema de Casio
│   ├── components/
│   │   ├── Button.tsx          # Componente de botón reutilizable (<20 líneas)
│   │   ├── Calculator.tsx      # Wrapper principal y marcas (<20 líneas)
│   │   ├── Display.tsx         # Pantalla LCD de la calculadora (<20 líneas)
│   │   ├── Keypad.tsx          # Layout de la grilla del teclado (<20 líneas)
│   │   └── Calculator.stories.tsx # Configuraciones para Storybook
│   └── hooks/
│       ├── useCalculator.ts    # Custom hook de la lógica central
│       └── useCalculator.test.ts # Suite de pruebas en Vitest
└── public/
    └── favicon.svg             # Icono (favicon) personalizado
```

## 🛠 Instrucciones para Correr en Local

### Clonar el repositorio

```bash
git clone https://github.com/hmndzzl/WEB_LAB7.git
cd WEB_LAB7
```

### Usando Docker (Recomendado)
Puedes construir y levantar el proyecto instantáneamente utilizando Docker Compose. El entorno estará completamente aislado:
```bash
docker compose up --build -d
```
La aplicación estará disponible en: **[http://localhost:5173](http://localhost:5173)**

### Usando Bun Nativamente
Si prefieres correrlo fuera de Docker y tienes Bun instalado:
1. Instala las dependencias:
   ```bash
   bun install
   ```
2. Levanta el servidor de desarrollo:
   ```bash
   bun run dev
   ```

## 🧪 Testing y Linter

**Correr las pruebas (Tests):**
Para correr la suite de pruebas automatizadas en Vitest y ejecutar los 5 tests lógicos no triviales:
```bash
npm test
# O
bun run test
```

**Correr el Linter:**
Para verificar el cumplimiento del código con Standard JS (0 puntos y coma, max-len 120):
```bash
bun run lint
```

## 📚 Storybook
Para interactuar con los componentes UI aislados (como los botones y la pantalla LCD) a través de Storybook:
```bash
bun run storybook
# O
npm run storybook
```
Esto lanzará un servidor local (típicamente en `http://localhost:6006`) donde podrás ver todas las variaciones de los componentes.
