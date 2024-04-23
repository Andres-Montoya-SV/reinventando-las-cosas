# Reinventando Axios

`Reinventando Axios` es una biblioteca que tiene como proposito aprender el manejo de solicitudes que hace Axios desde el background.

## Características

- **Solicitudes y Respuestas con Interceptores**: Permite interceptar solicitudes antes de que se envíen y respuestas antes de que se procesen.
- **Manejo Avanzado de Errores**: Incluye una robusta gestión de errores que facilita la depuración y el manejo de problemas de red.
- **Soporte para Promesas**: Utiliza promesas para un manejo asincrónico sencillo y efectivo.

```javascript
let request = await request("URL",{
    method: "METODO"
});
```

```javascript
const postData = {
  mensaje: "Hola mundo"
};

let post = await request('URL', {
  method: 'POST',
  body: postData
})

```

