 const colors  = require('colors');
 /* const { MostrarMenu,Pausar } = require('./helpers/mensajes'); */
 const {MenuInquiri,Pausar} = require('./helpers/inquirir');
 
 

console.clear();

const main= async()=>{

    let  opcion = '';
    do {
        
        opcion = await MenuInquiri();
        
        console.log({opcion});
        await Pausar();

      /*   opcion = await MostrarMenu(); */
     /*    if (opcion !== '0') {
            await Pausar();
            
        } */
    } while (opcion !== '0');
}

main();