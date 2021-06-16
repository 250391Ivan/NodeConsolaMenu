require('colors');
var inquirer = require('inquirer');

/* CREANDO  LAS  PREGUNTAS */
 const preguntas =[{
    type: 'list',
    name:'opcion',
    message:'¿Que quieres hacer?',
    choices:['opc1','opc2','opc3','opc4'],

 }];

const MenuInquiri = async()=>{

    console.log('=========================='.green);
    console.log('    Mostrar Menu'.green);
    console.log('==========================\n'.green);

    const respuesta = await inquirer.prompt(preguntas);
    return respuesta;


}



module.exports ={
    MenuInquiri,

}