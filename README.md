# SGM SG MÉDICA

## Configuración de Entorno Virtual y Django

Estos son los pasos para configurar un entorno virtual, instalar Django y realizar migraciones en un proyecto Django existente.

1. **Instalar Python**: Asegúrate de tener Python instalado en tu sistema.

2. **Instalar virtualenv**: Si no tienes virtualenv instalado, puedes hacerlo usando pip:
```
pip install virtualenv
```

3. **Crear un entorno virtual**: Navega a la carpeta de tu proyecto y crea un entorno virtual:
```
virtualenv mi_entorno
```

4. **Activar el entorno virtual**: Activa el entorno virtual según tu sistema operativo:

- Windows:

  ```
  mi_entorno\Scripts\activate
  ```

- macOS y Linux:

  ```
  source mi_entorno/bin/activate
  ```

5. **Instalar Django**: Con el entorno virtual activado, instala Django:

```
pip install Django
```

6. **Instalar "mathfilter"**: Después de instalar Django, instala la libreria "mathfilter":
```
pip install django-mathfilters
```

7. **Acceder al directorio del proyecto**: Ve al directorio de tu proyecto existente.

8. **Realizar migraciones**: Crea y aplica las migraciones para tu proyecto:
```
python manage.py makemigrations
python manage.py migrate
```

9. **Ejecutar el servidor de desarrollo**: Inicia el servidor de desarrollo con:
```
python manage.py runserver
```

10. **Acceder a la aplicación**: Abre un navegador web y visita http://localhost:8000/ para acceder a tu aplicación Django existente.

## Ejemplo de los directorios
```
mi_proyecto/     ......        # Carpeta principal de tu proyecto Django
|-- mi_aplicacion/  ......     # Carpeta de tu aplicación Django
|   `-- ...
|-- mi_entorno/    ......      # Carpeta de tu entorno virtual
|   `-- ...
|-- manage.py     ......       # Archivo de gestión de Django
`-- ...           ......       # Otros archivos y carpetas de tu proyecto
