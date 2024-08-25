# Project: e-Commerce with React

Build an e-commerce site using React by consuming an API provided by a generic backend. The design is flexible and will be taken into account.

## API

A local JSON-based API (mock) will be used for the store's development. You should have it downloaded and running locally to work on the project. The URL for the backend and its documentation is:  
[https://github.com/cordovacarlos22/JSON-Server_by_carloscordova.dev-](https://github.com/cordovacarlos22/JSON-Server_by_carloscordova.dev-)

If you don't want to use the API locally, you can optionally use my deployment at:  
[https://json-server-by-carloscordova-dev.onrender.com/](https://json-server-by-carloscordova-dev.onrender.com/)

## FUNCTIONAL REQUIREMENTS

It's recommended to approach the project in phases, adding new features in each iteration.

### MVP PHASE 1: View and Browse Products

In this phase, we'll focus on starting the project and consuming the API to display the most relevant information of a store: Products and their details.

**General Features:**
- Display products
- Display product details
- Search products

**Functionalities:**
- When I enter the home page, I can see all the products.
- The NavBar component should be visible throughout the app.
- There should always be a search bar in the NavBar to search for products.
- If I click on a product, I can see its full details on a unique URL/route for that product.
- Within the individual product detail, the "buy" button is displayed. In this phase, it won't have any programming logic but should be included for design purposes and later functionality.

**Recommended Pages/Views:**
- Products (can be the Home)
- Individual Product

**Skills:** APIs, Axios/fetch, useState, useEffect, react-router, events, useContext (NavBar).

### MVP PHASE 2: Login and Registration

In this phase, we'll focus on consuming the user login API and creating a registration form, as well as conditional rendering based on whether the user is authenticated (i.e., the interface may show slight changes depending on the case).

**General Features:**
- Must have signup (registration)
- Must have login (sign-in)
- When logging in, it should distinguish between ADMIN users and CUSTOMER users

**CUSTOMER Functionalities:**
- **Without User / With User (not logged in / logged in):**
  - When I enter the home page, I can see all the products.
  - There is always a search bar in the NavBar to search for products.
  - If I click on a product, I can see its full details on a unique URL/route for that product.

- **Without User (not logged in):**
  - The NavBar suggests signing up or logging in on the right side.
  - The signup and login views are different URLs (/login /signup).
  - There is a buy button on the individual product detail view, but it is disabled, and you should show (as you wish) an invitation to register or log in.

- **With User (logged in):**
  - The username is displayed in the NavBar.
  - Within the individual product detail, the "Buy" button is enabled.

**Recommended Pages/Views:**
- Login
- Signup

**Skills:** useContext, JWT Authentication, localStorage, Form handling and events.

### MVP PHASE 3: Create Products as an Administrator

We'll give the application the ability to distinguish between a regular user and an administrator. The administrator can create new products.

**ADMIN Functionalities:**
- Must have all CUSTOMER functionalities.
- Can add new products.
- Add a link in the NavBar to upload products.

**Recommended Pages/Views:**
- Product Upload (form)

**Skills:** useContext, JWT Authentication, localStorage, Form handling and events.

**Important:** The API manages 2 user roles: "CUSTOMER" and "ADMIN". You need to log in with an ADMIN account to upload a product.

**Tip:** You can create a user with Postman/Insomnia and add the `role` property to the body with the value:

"role": "ADMIN"
When a product is created, its category should be one of the following:

```
  ["Books", "Movies", "Music", "Games", "Electronics", "Computers", "Home", "Garden", "Tools", "Grocery", "Health", "Beauty", "Toys", "Kids", "Baby", "Clothing", "Shoes", "Jewelery", "Sports", "Outdoors", "Automotive", "Industrial"]
```


  # MVP PHASE 4: Shopping Cart

Using the Context API (useContext), create a shopping cart in our NavBar that shows the products added from the store, updates their quantities/removes them, and calculates the total.

## Functionalities:

- Add shopping cart functionality (add to cart).
- Products can be added to the cart from the individual product view (detail).
- The cart can be displayed as a drop-down or a full page showing all the products added to the cart.
- Products can be removed from the cart.
- The quantity of the selected product can be changed in the cart.
- You must display the total price (the sum of the prices of all products according to the selected quantities).

## Recommended Pages/Views:

- None; create a shopping cart component that is rendered in the NavBar or a similar alternative.
- **Skills:**: useContext, JWT Authentication, localStorage, Events.

# Proyecto: e-Commerce con React

Construye un e-commerce (sitio de comercio electrónico) con React a partir de consumir una API de un backend genérico proporcionado. El diseño es libre y se tomará en cuenta.

## API

Se utilizará una API local basada en JSON (mock) para el desarrollo de la tienda. Por lo que deberás tenerla descargada en tu equipo y corriendo a modo local para poder realizar el proyecto.
La URL con el backend a usar y la documentación es:
[https://github.com/cordovacarlos22/JSON-Server_by_carloscordova.dev-](https://github.com/cordovacarlos22/JSON-Server_by_carloscordova.dev-)

Si no quieres usar la API en modo local, opcionalmente puedes usar mi deployment en: [https://json-server-by-carloscordova-dev.onrender.com/](https://json-server-by-carloscordova-dev.onrender.com/)

## REQUERIMIENTOS FUNCIONALES

Se recomienda realizar el proyecto con una aproximación por fases, añadiendo nuevas características en cada iteración.

### MVP FASE 1: Ver y Consultar Productos

En esta etapa nos centraremos en arrancar el proyecto y poder consumir la API, con el objetivo de mostrar la información más relevante de una tienda: Los productos y detalles de los mismos.

**Características Generales:**
- Mostrar productos
- Mostrar detalles de producto
- Buscar productos

**Funcionalidades:**
- Cuando entro al home puedo ver todos los productos.
- El componente NavBar debe estar a la vista en toda la app.
- Siempre hay una barra de búsqueda en la NavBar para hacer búsquedas por productos.
- Si doy click a un producto, puedo ver su detalle completo en una URL / ruta única para este producto.
- Dentro del detalle individual de un producto, se muestra el botón “comprar”. En esta primera etapa no tendrá lógica de programación dicho botón, pero debe ser considerado para fines de diseño y más adelante hacerlo funcionar.

**Páginas/Vistas recomendadas:**
- Productos (Puede ser la Home)
- Producto Individual

**Skills:** APIs, Axios/fetch, useState, useEffect, react-router, eventos, useContext (navBar).

### MVP FASE 2: Inicio de Sesión y Registro

En esta etapa nos centraremos en poder consumir la API de inicio de sesión de usuario y realizar un formulario de registro. Así como realizar renderizado condicional en base a si estamos o no autenticados (es decir, la interfaz puede presentar ligeros cambios dependiendo el caso).

**Características Generales:**
- Debe tener signup (registro)
- Debe tener login (inicio de sesión)
- Al iniciar sesión, debe distinguir entre usuario de tipo ADMIN y usuario de tipo CUSTOMER

**Funcionalidades CUSTOMER:**
- **Sin Usuario / Con Usuario (sin iniciar sesión / con sesión iniciada):**
  - Cuando entro al home puedo ver todos los productos
  - Siempre hay una barra de búsqueda en la navbar para hacer búsquedas por productos.
  - Si doy click a un producto, puedo ver su detalle completo en una URL / ruta única para este producto.

- **Sin Usuario (sesión no iniciada):**
  - En la navbar, del lado derecho, me sugiere hacer signup o login.
  - La vista de signup, y la vista de login, son urls diferentes (/login /signup).
  - Hay un botón comprar en la vista individual del detalle de cada producto, pero este está desactivado y debes mostrar (como desees) una invitación a registrarte o iniciar sesión.

- **Con Usuario (sesión iniciada):**
  - En la navbar se muestra el nombre de usuario.
  - Dentro del detalle individual de un producto, se muestra el botón “Comprar” habilitado.

**Páginas/Vistas recomendadas:**
- Login (Iniciar sesión)
- Signup (Registro)

**Skills:** useContext, Autenticación con JWT, localStorage, Manejo de formularios y eventos.

### MVP FASE 3: Crear productos como Administrador

Dotaremos a la aplicación de la capacidad de distinguir a un usuario normal de un usuario administrador. El usuario administrador podrá crear nuevos productos.

**Funcionalidades ADMIN:**
- Debe tener todas las funcionalidades del CUSTOMER.
- Puede dar de alta nuevos productos.
- Colocar un enlace en la Navbar qué le permita cargar productos.

**Páginas/Vistas recomendadas:**
- Alta de producto (formulario)

**Skills:** useContext, Autenticación con JWT, localStorage, manejo de formularios y eventos.

**Importante:** La API maneja 2 roles de usuario “CUSTOMER” y “ADMIN”. Necesitas logearte con una cuenta de ADMIN para qué puedas cargar el producto.

**Tip:** Puedes crear con Postman/Insomnia un usuario y añadir la propiedad role al body con el contenido:

"role": "ADMIN"

Cuando se crea un producto, su category deberá ser alguna de las siguientes: 
```
[“Books”, “Movies”, “Music”, “Games”, “Electronics”, “Computers”, “Home”, “Garden”, “Tools”, “Grocery”, “Health”, “Beauty”, “Toys”, “Kids”, “Baby”, “Clothing”, “Shoes”, “Jewelery”, “Sports”, “Outdoors”, “Automotive”, “Industrial”]
```

## MVP FASE 4: Carrito de Compra

Con ayuda de Context API (useContext) creamos un carrito de compras en nuestra Navbar que muestre los productos que agreguemos en la tienda, actualizar sus cantidades/eliminarlos y calcule el total.

**Funcionalidades:**
- Agregar la funcionalidad del carrito de compras (agregar al carrito).
- Los productos pueden agregarse al carrito desde la vista individual (detalle) del producto.
- El carrito puede mostrarse mediante un drop-down o una página completa donde muestres todos los productos que se agregaron al carrito.
- En el carrito puedes eliminar los productos.
- En el carrito puedes cambiar la cantidad elegida del producto.
- Debes mostrar el precio total (la suma de los precios de todos los productos, según cantidades elegidas).

**Páginas/Vistas recomendadas:**
- Ninguna, crear un componente de carrito de compra que se renderice en el Navbar o una alternativa similar.

**Skills:** useContext, Autenticación con JWT, localStorage, Eventos.

