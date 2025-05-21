# 🎬🎵 Cinemusic

¡Bienvenido a **Cinemusic**! Una plataforma web interactiva donde puedes explorar, descubrir y reproducir música inspirada en el cine y mucho más. Cinemusic está diseñada para ofrecerte una experiencia inmersiva con una interfaz moderna, navegación intuitiva y soporte multilenguaje.

🌐 **Visita la versión desplegada:** [https://juanpabloleonf.github.io/cinemusic/](https://juanpabloleonf.github.io/cinemusic/)

---

## ⚙️ Integración y Despliegue Continuo
Cinemusic está desarrollado con prácticas modernas de **Integración Continua (CI)** y **Despliegue Continuo (CD)**, lo que garantiza:
- Ejecución automática de pruebas y validaciones en cada cambio.
- Despliegues automáticos y confiables al entorno de producción.
- Mayor calidad, rapidez y seguridad en la entrega de nuevas funcionalidades.

---

## 🚀 ¿Qué es Cinemusic?
Cinemusic es una aplicación web desarrollada con Angular que permite a los usuarios:
- Navegar por diferentes secciones de música (álbumes, playlists, categorías, etc.).
- Reproducir canciones mediante un reproductor avanzado e intuitivo.
- Disfrutar de una interfaz atractiva, responsiva y fácil de usar.
- Cambiar el idioma de la interfaz gracias al soporte de internacionalización.

---

## 🛠️ Tecnologías utilizadas
- **Angular** 19+
- **TypeScript**
- **RxJS**
- **@ngx-translate** (internacionalización)
- **Karma & Jasmine** (testing)
- **HTML5, CSS3**

---

## 📁 Estructura principal del proyecto
- `src/app/ui/pages/music/` — Componentes y páginas relacionadas con la música (reproductor, navegación, secciones principales).
- `src/app/domain/` — Modelos y lógica de dominio.
- `src/app/ui/components/` — Componentes reutilizables en toda la aplicación.

---

## ⚡ Cómo usar Cinemusic

### 1. Clona el repositorio
```bash
git clone https://github.com/JuanPabloLeonF/cinemusic.git
cd cinemusic
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Ejecuta el servidor de desarrollo
```bash
ng serve
```
Accede a [http://localhost:4200/](http://localhost:4200/) en tu navegador.

### 4. Construye la aplicación para producción
```bash
ng build
```

### 5. Pruebas
- **Unitarias:**
  ```bash
  ng test
  ```
- **End-to-End:**
  ```bash
  ng e2e
  ```

---

## ✨ Características destacadas
- 🎵 Reproductor de música integrado
- 🌍 Soporte multilenguaje
- 📱 Diseño responsivo y moderno
- ⚙️ Arquitectura modular y escalable
- 🧩 Fácil extensión de componentes y páginas
