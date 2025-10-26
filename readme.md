se quedó por hacer:
tener definidas las rutas de peticion a la api
ejemplo:
1. ruta: /banner  →   ['link1.jpg', 'link2.jgp', ''] 3 imagenes
2. ruta: /productos/descuento/electrodomesticos  → [obj] length = 6
    2.1 obj{
                name: 'kwqecg';
                precioAnterior: number
                precioActual: number
                img: 'klujhl.img'        
                }     desc[3].img ==>  'khgk.img'
3. ruta: /productos/categoria → ['string'] length = 8
4. ruuta: /productos/${categoria} → [{}, ....,{}] lengthg = 10
    {
        precio, nombre, img, categoría
    }
5. ruta: /login → 
    {name, img, admin(true o false)}  <Dashboard>
6. ruta: dashboard/report → pdf con el reporte
7. turas: productos "para ti" 


y LLenar la DB




-----------------------------------------------------------

lo que ya está hecho:
- el 1, ya funciona ruta /banner
- el 2, ya funciona la ruta /productos/categoria 
- agregué una ruta /productos que devuelve todos los productos
- punto 4 ya funciona /productos/${categoria}
-------------------
#Explicasión de rutas en funcionamiento:
1. /banner → trae 3 links de imagenes para el banner en un array
2. /productos → trae todos los productos 
3. /productos/categoria → un array de las categorias de la db
4. /productos/:categoría → un array de productos de esa categoría
---------------------------------
# ⚙️ Configuración del archivo .env

En la **raíz del proyecto**, crea un archivo llamado `.env` con el siguiente contenido:

```
DB_USER=JuanSQL
DB_PASS=DevJuanP
DB_SERVER=localhost
DB_NAME=BRICE
DB_PORT=1433
SERVER_PORT=4000
```

Solo necesitas cambiar los valores de **DB_USER** y **DB_PASS** según tu propio usuario y contraseña de SQL Server.

---

✅ **Ejemplo personalizado:**  
Si tu usuario es `AdminDB` y tu contraseña es `12345`, el archivo quedaría así:

```
DB_USER=AdminDB
DB_PASS=12345
DB_SERVER=localhost
DB_NAME=BRICE
DB_PORT=1433
SERVER_PORT=4000
```