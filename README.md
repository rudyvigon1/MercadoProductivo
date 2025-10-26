
# MercadoProductivo

Una plataforma de marketplace moderna construida con Next.js 14, diseñada para conectar compradores y vendedores en un entorno seguro y escalable.

## 🚀 Características

- **🏪 Marketplace Completo**: Compra y venta de productos y servicios
- **👥 Gestión de Usuarios**: Perfiles de compradores, vendedores y administradores
- **💬 Chat en Tiempo Real**: Comunicación directa entre usuarios usando Pusher
- **🔔 Notificaciones**: Sistema de notificaciones push y en tiempo real
- **📱 PWA**: Aplicación web progresiva con instalación nativa
- **🌓 Temas**: Soporte para modo oscuro y claro
- **📊 Dashboard**: Paneles de control para usuarios y administradores
- **💳 Facturación**: Sistema de pagos y facturación integrado
- **🔐 Autenticación Segura**: Autenticación con Supabase
- **📈 Analytics**: Métricas y gráficos con Recharts

## 🛠️ Tecnologías

### Frontend
- **Next.js 14** - Framework React con App Router
- **React 18** - Librería de componentes
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconografía moderna

### Backend & Base de Datos
- **Supabase** - Backend as a Service (Auth, Database, Storage)
- **PostgreSQL** - Base de datos principal
- **Row Level Security** - Seguridad a nivel de fila

### Funcionalidades Avanzadas
- **Pusher** - WebSockets para tiempo real
- **React Query** - Gestión de estado del servidor
- **React Hook Form** - Formularios con validación
- **Zod** - Validación de esquemas
- **Next PWA** - Funcionalidades de aplicación nativa

## 📦 Instalación

### Prerrequisitos
- Node.js 20+
- npm o yarn
- Cuenta de Supabase

### Configuración

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/MercadoProductivo/MercadoProductivo.git
   cd MercadoProductivo
   ```

2. **Instala dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp .env.example .env.local
   ```

   Edita `.env.local` con tus credenciales:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
   SUPABASE_SERVICE_ROLE_KEY=tu_service_role_key
   ```

4. **Configura Supabase**
   - Crea un proyecto en [Supabase](https://supabase.com)
   - Ejecuta las migraciones SQL desde la carpeta `sql/`
   - Configura las políticas RLS según necesites

5. **Ejecuta el proyecto**
   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run type-check` - Verifica tipos TypeScript
- `npm run format` - Formatea el código con Prettier

## 🌍 Variables de Entorno

### Requeridas
- `NEXT_PUBLIC_SUPABASE_URL` - URL de tu proyecto Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Clave anónima de Supabase
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key para operaciones administrativas

### Opcionales
- `NEXT_PUBLIC_VAPID_PUBLIC_KEY` - Para notificaciones push web
- `VAPID_PRIVATE_KEY` - Clave privada para notificaciones push

## 🚀 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno en el dashboard de Vercel
3. El deployment automático se activará en cada push a `main`

### GitHub Actions
- CI/CD configurado para ramas `main` y `develop`
- Tests automatizados y verificación de tipos
- Build validation antes del deployment

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── auth/           # Autenticación y login
│   ├── marketplace/    # Componentes del marketplace
│   ├── products/       # Gestión de productos
│   ├── sellers/        # Perfiles de vendedores
│   ├── services/       # Servicios y categorías
│   ├── chat/           # Chat en tiempo real
│   ├── dashboard/      # Paneles de control
│   ├── notifications/  # Sistema de notificaciones
│   └── ui/             # Componentes base (shadcn/ui)
├── lib/                # Utilidades y configuraciones
│   ├── supabase/       # Cliente y helpers de Supabase
│   ├── auth/           # Lógica de autenticación
│   └── utils.ts        # Funciones auxiliares
├── providers/          # Context providers
├── store/              # Gestión de estado
├── types/              # Definiciones TypeScript
└── middleware.ts       # Middleware Next.js
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- Crea un [issue](https://github.com/MercadoProductivo/MercadoProductivo/issues) en GitHub
- Revisa la [documentación de Supabase](https://supabase.com/docs) para problemas relacionados con el backend

---

**¡Construyendo el futuro del comercio digital!** 🏪✨
