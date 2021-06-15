/**
 * Habitacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nroHabitacion: {type: 'number', required: true},
    precio: {type: 'number', required: true},
    nroPiso: {type: 'number', required: true},
    caracteristica: {type: 'string',  required: true},
    tipoHabitacion: {type: 'string', isIn: ['Single', 'Double', 'Triple', 'Cuadruple'], required: true},

    ownerHab:{
      model:'reservacion',
      unique: true
    }

  },

};

