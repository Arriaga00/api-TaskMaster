

**Deploying the Backend**
================

### Overview
------------

Este documento describe los pasos para deployar el backend de la aplicación de tareas.

### Prerequisites
--------------

- **Backend Code**: El código del backend debe estar listo para deployar.
- **Server**: Un servidor debe estar configurado para ejecutar el backend.
- **Database**: La base de datos debe estar configurada y lista para usar.

### Deployment Steps
-------------------

### Step 1: Clone the Repository
-------------

1. **Clone the Repository**

   ` git clone https://github.com/Arriaga00/api-TaskMaster`
   

### Step 2: Install Dependencies
-------------

1. **Install Dependencies**
   ```   npm install   ```

### Step 3: Start the Development Server
-------------

1. **Start the Development Server**
   ```  npm run dev  ```

### Step 4: Configure the Server
-------------

1. **Configure the Server**
   - Configurar el servidor para ejecutar el backend.
   - Crear un archivo .ENV para crear variables de entorno.
   - Esto incluye la configuracion de la base de datos, el puerto del servidor y informacion para enviar emails.

### Step 5: Configure the Database
-------------

1. **Configure the Database**
   - Configurar la base de datos para que se conecte con el backend.
   - Esto puede incluir la configuración de credenciales de acceso y la creación de tablas.
   - Se debe descargar el script de creación de la base de datos que se encuentra en la carpeta **SQL**.
   - Sincronizar la base de datos con el script de creación.
   - Asegurarse de que la base de datos esté configurada correctamente.
   - Verificar que la base de datos esté conectada correctamente y con el backend por medio de las variables de entorno.
   



### Step 6: Test the Deployment
-------------

1. **Test the Deployment**
   - Probar la aplicación para asegurarse de que funcione correctamente.
   - Esto puede incluir pruebas de carga y pruebas de seguridad.

### Conclusion
----------

El deploy del backend de la aplicación de tareas se ha completado con éxito. Asegúrese de que el servidor esté configurado correctamente y que la base de datos esté conectada correctamente.