
const {crearArchivo}=require('./multiplicar/multiplicar');
const base='8';

//console.log(multiplicar);

crearArchivo(base)
.then(archivo=>console.log(`Archivo creado: ${archivo}`))
.catch(e=>console.log(e))