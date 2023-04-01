/**
 * Habitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {

  attributes: {

    numero: {type: 'number', isIn: [101, 102, 103, 104, 105, 106, 107, 108, 109, 110], required: true},
    precio: {type: 'number', isIn: [3800, 5800, 7800, 9000], required: true},
    tipoHabitacion: {type: 'number', isIn: [1, 2, 3, 4], required: true},
    descripcion: {type: 'string', required: true},
    estado: {type: 'string', isIn: ['Disponible', 'Ocupada'], required: true},

  },

};

