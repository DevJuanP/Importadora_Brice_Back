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


y LLenar la DB




-----------------------------------------------------------

lo que ya está hecho:
- el 1, ya funciona ruta /banner
- el 2, ya funciona la ruta /productos/categoria 
- agregué una ruta /productos que devuelve todos los productos
- punto 4 ya funciona /productos/${categoria}