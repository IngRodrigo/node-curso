//rod_dev: flujo de informacion dentro de node //el primero que llega el primero que sale (callback)
console.log("Inicio del programa");
setTimeout(function(){
    console.log("Primer time");
}, 3000);
setTimeout(function(){
    console.log("Segundo time");
}, 0);
setTimeout(function(){
    console.log("Tercer time");
}, 0);

console.log("Fin del programa");