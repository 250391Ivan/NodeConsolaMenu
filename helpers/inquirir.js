require('colors');
var inquirer = require('inquirer');

/* CREANDO  LAS  PREGUNTAS */
 const preguntas =[{
    type: 'list',
    name:'opcion',
    message:'¿Que quieres hacer?',
    choices:[
        {value:'1',name:`${'1-. '.green}Crear Tareas`},
        {value:'2',name:`${'2-. '.green}Listar Tareas`},
        {value:'3',name:`${'3-. '.green}Listar Tareas Completas`},
        {value:'4',name:`${'4-. '.green}Listar Tareas Pendientes`},
        {value:'5',name:`${'5-. '.green}Completar Tarea(s)`},
        {value:'6',name:`${'6-. '.green}Borrar  Tarea`},
        {value:'0',name:`${'0-. '.green}Salir\n`},
    ],

 }];

const MenuInquiri = async()=>{

    console.log('=========================='.green);
    console.log('    Mostrar Menu'.green);
    console.log('==========================\n'.green);

    const respuesta = await inquirer.prompt(preguntas);
    return respuesta;


}

const Pausar = async() =>{

    const preguntas =[{
              name:'enter', type:'input',message:`Preione ${'ENTER'.red} para continuar..`,value:'enter'
    }];
    console.log('\n');
    
  const respuesta = await inquirer.prompt(preguntas);

  console.log('Scope:',respuesta);
  
  return respuesta;
  
}



module.exports ={
    MenuInquiri,
    Pausar

}