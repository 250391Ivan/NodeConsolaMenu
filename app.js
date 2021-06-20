 const colors  = require('colors');
/*  const { MostrarMenu,Pausar } = require('./helpers/mensajes');  */
 const {MenuInquiri,Pausar,Leertarea} = require('./helpers/inquirir');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
 
 

console.clear();

const main= async()=>{

    let  opcion = '';
    const  tareas  = new Tareas();
    do {
        opcion = await MenuInquiri();
        console.log('-- --',opcion);

        switch (opcion.opcion) {
            case '1':
                const salida = await Leertarea('Descripcion:');
                tareas.CrearTarea(salida);
                console.log(salida);
                break;
            case '2':
                console.log(tareas.ListaArr);
                

            break
        
            default:
                break;
        }
        await Pausar();
 
    } while (opcion.opcion !== '0');

}

main();


/* switch (opcion) {
    case 1:
      const descripcion = await CrearTarea('Descripcion:')
      console.log(descripcion);               
        break;

    case '2':
     console.log(this._lista);
      
        break;
 */


       
       /* 
        console.log({opcion});
 */
      /*   opcion = await MostrarMenu(); */
     /*    if (opcion !== '0') {
            await Pausar();
            
        } */