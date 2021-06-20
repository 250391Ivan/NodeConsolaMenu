const Tarea = require("./tarea");

class Tareas{
    _listado={};

    constructor(){
        this._listado={};
    }

    get ListaArr(){
        const arreglo = [];
       Object.keys(this._listado).forEach(key =>{
           const tarea = this._listado[key];
           arreglo.push(tarea);
       })

       return arreglo;

    }

    
CrearTarea(descripcion =''){
    const tarea = new Tarea(descripcion);
    this._listado[tarea.id] = tarea;

};



}

module.exports = Tareas;