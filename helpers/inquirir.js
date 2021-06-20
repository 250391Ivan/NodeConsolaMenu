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
   /*  console.log('--- ---', respuesta.opcion); */
    return respuesta;
    


}

const Pausar = async() =>{
    const preguntaPausar =[{
              name:'opcion', 
              type:'input',
              message:`Presione ${'ENTER'.red} para continuar..`,
    }];
    console.log('\n');
   const salida = await inquirer.prompt(preguntaPausar);
  /*  console.log('Scope:',preguntaPausar); */
   return salida;
}

const Leertarea = async(mensaje) =>{
    const question =[{
        type:'input',
        message:mensaje,
        name:'pregunta',
        validate(value){
            if (value.lenght === 0) {
                return('Ingrese  un Valor');
            }
            return true;
        }
    }];
    const salida = await inquirer.prompt(question);

    return salida;

}



module.exports ={
    MenuInquiri,
    Pausar,
    Leertarea

}