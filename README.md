# Mi Portafolio Personal

Este repositorio contiene el código fuente de mi portafolio personal, desarrollado con tecnologías web modernas para mostrar mis proyectos, habilidades y experiencia.

## 🚀 Tecnologías Utilizadas

El proyecto está construido utilizando las siguientes herramientas y librerías:

-   **[React](https://react.dev/)**: Biblioteca de JavaScript para construir interfaces de usuario.
-   **[Vite](https://vitejs.dev/)**: Entorno de desarrollo rápido y herramienta de construcción.
-   **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipado estático.
-   **[Bootstrap](https://getbootstrap.com/)** & **[React-Bootstrap](https://react-bootstrap.github.io/)**: Framework CSS para diseño responsivo y componentes de UI.
-   **[React Icons](https://react-icons.github.io/react-icons/)**: Colección de iconos populares.
-   **[React Type Animation](https://www.npmjs.com/package/react-type-animation)**: Efectos de escritura animada.
-   **[React Intersection Observer](https://www.npmjs.com/package/react-intersection-observer)**: Para detectar cuando los elementos entran en el viewport.
-   **[EmailJS](https://www.emailjs.com/)**: Para el envío de correos desde el formulario de contacto.

## 📂 Estructura del Proyecto

El proyecto sigue una estructura estándar de React con Vite:

```
portafolio/
├── public/          # Archivos estáticos
├── src/             # Código fuente
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes de React (Header, Hero, About, Projects, Contact, Footer)
│   ├── style/       # Estilos adicionales
│   ├── App.tsx      # Componente principal
│   └── main.tsx     # Punto de entrada
├── index.html       # Archivo HTML principal
├── package.json     # Dependencias y scripts
└── tsconfig.json    # Configuración de TypeScript
```

## 🛠️ Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd portafolio
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la consola).

4.  **Construir para producción:**

    ```bash
    npm run build
    ```

## ✨ Funcionalidades

-   **Diseño Responsivo**: Adaptable a dispositivos móviles y de escritorio gracias a Bootstrap.
-   **Navegación Suave**: Desplazamiento fluido entre las secciones.
-   **Animaciones**: Texto animado y efectos visuales.
-   **Formulario de Contacto**: Integración funcional para recibir mensajes.

