 const colors  = require('colors');
 /* const { MostrarMenu,Pausar } = require('./helpers/mensajes'); */
 const {MenuInquiri,Pausar} = require('./helpers/inquirir');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
 
 

console.clear();

const main= async()=>{

    let  opcion = '';
    do {

        
        const  tarea = new Tarea('guardar en git');
        const  tareas  = new Tareas();
        console.log(tarea);
        console.log(tareas);
        tareas._listado[tarea.id]= tarea;

        console.log(tareas);
        
        
        await Pausar();
        
       /* 
        console.log({opcion});
 */
      /*   opcion = await MostrarMenu(); */
     /*    if (opcion !== '0') {
            await Pausar();
            
        } */
    } while (opcion !== '0');
}

main();