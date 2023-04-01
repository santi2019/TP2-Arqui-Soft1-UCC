/**
 * Reservacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {

  attributes: {

    codigo: {type: 'number', required: true},
    fechaIngreso: {type: 'string', required: true},
    fechaSalida: {type: 'string', required: true},
    cantidadPasajeros: {type: 'number', required: true},
    metodoPago: {type: 'string', isIn: ['Debito/Credito', 'Efectivo'], required: true},
    montoTotal: {type: 'number', required: true},


    //Referencia a huesped
    owner: {
      model: 'Huesped'
    },

    //Referencia a usuario
    usuario: {
      model: 'User'
    },

    //Referencia a habitacion
    habitacionReservada: {
      model: 'Habitacion'
    },

  },

};

