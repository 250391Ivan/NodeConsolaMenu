const { resolve } = require('path');

require('colors');


const MostrarMenu = () =>{


    return  new Promise (resolve=>{

        console.log('=========================='.green);
        console.log('    Mostrar Menu'.green);
        console.log('==========================\n'.green);
    
        console.log(`${'1-.'.green} Crear Tareas`);
        console.log(`${'2-.'.green} Listar Tareas`);
        console.log(`${'3-.'.green} Listar Tareas Completas`);
        console.log(`${'4-.'.green} Listar Tareas Pendientes`);
        console.log(`${'5-.'.green} Completar Tarea(s)`);
        console.log(`${'6-.'.green} Borrar  Tarea`);
        console.log(`${'0-.'.green} Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione una  Tecla\n`,(opt)=>{
            console.log('opcion selccionada',opt);
            resolve(opt)
            readline.close();
        });
    });
}

const Pausar = ()=>{
    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`Presione ${'ENTER'.red} para continuar\n`,(opt)=>{
            console.log('opcion selccionada',opt);
            resolve(opt);
            readline.close();
        });
    });


}

module.exports ={
    MostrarMenu,
    Pausar

}