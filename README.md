# Lab: Advanced Navigation App

Este es un proyecto de navegación avanzada en React Native. La aplicación maneja múltiples stacks de navegación y utiliza Redux para la gestión del estado de autenticación.

## Estructura de Archivos

```
src/
   components/ # Componentes reutilizables
      Header.tsx # Encabezado
      Head.tsx # Otro encabezado
   navigation/ # Navegación de la app
      AppDrawerNavigator.tsx # Navegador principal de la app (drawer)
      AuthStackNavigator.tsx # Navegador para la autenticación (stack)
      BottomTabNavigator # Navegador de Home (tabs)
      FeedStackNavigator.tsx # Navegador del feed con lazy loading (stack)
      RootNavigator.tsx # Navegador raíz que determina qué stack mostrar
   screens/ # Pantallas de la aplicación
      auth/ # Pantallas para flujo de autenticación
         LoginScreen.tsx # Inicio de sesión
         RegisterScreen.tsx # Registro de usuario
      features/
         SearchScreen.tsx # Pantalla para búsqueda
         DetailsScreen.tsx # Pantalla de detalle
         NotificationsScreen.tsx # Pantalla para notificaciones 
      main/ # Pantallas principales
         HomeScreen.tsx # Pantalla de inicio
         ProfileScreen.tsx # Pantalla de perfil
         SettingsScreen.tsx # Pantalla de configuración
      store/ # Redux store
         authSlice.ts # Reducer para la autenticación
         index.ts # Configuración del store
```


## Tecnologías Usadas

- **React Native**: Framework para desarrollo móvil.
- **React Navigation**: Para la gestión de la navegación de la app.
- **Redux**: Para la gestión del estado global, especialmente para la autenticación.
- **Lazy Loading**: Utilizado para cargar componentes solo cuando son necesarios.
- **useMemo y memo**: Utilizados para optimizar el rendimiento de la aplicación.

## Instalación

1. Clonar este repositorio:
   ```bash
   git clone https://github.com/jona-femsa/AdvancedNavigationLab_JonathanSalinas
2. Navegar a la carpeta del proyecto:
   ```bash
   cd AdvancedNavigationLab_JonathanSalinas
3. Instalar las dependencias:
   ```bash
   npm install
4. Ejecutar la aplicación en Android o iOS:
   ```bash
   npm run android
   # o
   npm run ios
