//requieres
const filesystem=require('fs');//librerias ya instaladas con nodejs esta en particular trabaja con archivos


let  crearArchivo=(base)=>{
    return new Promise((resolve, reject)=>{
        if(!Number(base)){
            reject(`El valor introducido: ${base} no es un número`);
            return;
        }

        let data='';
        for (let i=1; i<=10; i++) {
            let mensaje=`${base} * ${i} = ${base*i} \n`;
            data+=mensaje;
        }
        
        filesystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) 
            reject(err)
            else
            resolve(`tabla-${base}.txt`)
//            console.log('El archivo fue creado');
          });
        
    });
}

module.exports={
    crearArchivo
}