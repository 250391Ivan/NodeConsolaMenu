 const colors  = require('colors');
 /* const { MostrarMenu,Pausar } = require('./helpers/mensajes'); */
 const {MenuInquiri} = require('./helpers/inquirir');
 
 

console.clear();

const main= async()=>{

    let  opcion = '';
    do {
        console.log({opcion});
     
        opcion = await MenuInquiri();

      /*   opcion = await MostrarMenu(); */
     /*    if (opcion !== '0') {
            await Pausar();
            
        } */
    } while (opcion !== '0');
}

main();