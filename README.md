# Requisitos
• Python 3.9 o superiror

• pip

• virtualenv 

• npm

• node

# Instalación
• Crear una carpeta que contendrá el repositorio y el entorno virtual.

Clona el repositorio con:

    git clone https://github.com/Naspleda/scmain.git

• Dentro de ella crear un entorno virtual usando virtualenv.

     python -m venv env

• Activar el entorno en
Linux y Mac:

    source env/bin/activate
Windows:

    env\Scripts\activate

• Instala los requerimientos con:

    pip install -r requirements.txt

• Ejecuta migraciones

    python manage.py migrate

• Ejecutar Servidor:

    python manage.py runserver

# React 

• Abrimos un terminal en la dirección del proyecto

• Instalamos dependencias con:

    npm i

• Ejecutamos:

    npm run start







# Funcionamiento

Dentro de la carpeta src se encuentra la lógica del Frontend

• src/containers/pages/Home.jsx

Dentro de este archivo retornamos los componentes para ser vistos en pantalla

Los componentes incluyen un Header, el componente Table es el que muestra la lista de personas en una tabla, y un Footer

• src/components/

# CRUD - React

Creamos un component CRUD para traer la lógica del backend (No aplicado en esta versión, está comentado por si se quisiera ver el código)

# CRUD - Django

• backend_api/api/

Aquí encontramos la lógica definida en el Backend:

• models.py / Creamos el modelo Persona con los campos requeridos

• serializers.py / Creamos el serializer del modelo Persona

• urls.py / Definimos las urls para ser usadas como endpoint

• views.py / Definimos la lógica correspondiente de CRUD

# Software, librerías y framework utilizados

• Django

• Django REST Framework

• SQLite

(Versiones especificadas en 'requirements.txt')

• React 

• Redux

• TailwindCSS
